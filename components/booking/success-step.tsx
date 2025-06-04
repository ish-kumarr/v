"use client";

import { motion } from "framer-motion";
import { containerVariants } from "./animations";
import { FormData } from "./types";
import { useState, useEffect } from "react";

interface SuccessStepProps {
  name: string;
  formData: FormData;
}

export default function SuccessStep({ name, formData }: SuccessStepProps) {
  const [status, setStatus] = useState<'submitting' | 'success' | 'error'>('submitting');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const submitData = async () => {
      try {
        const response = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to send email');
        }

        setStatus('success');
      } catch (error) {
        console.error('Error:', error);
        setError(error instanceof Error ? error.message : 'Failed to submit form');
        setStatus('error');
      }
    };

    submitData();
  }, [formData]);

  if (status === 'submitting') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-center space-y-8"
      >
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0">
            <div className="w-full h-full rounded-full border-4 border-[#287bd2]/20 animate-pulse"></div>
          </div>
          <div className="absolute inset-0">
            <div className="w-full h-full rounded-full border-4 border-[#287bd2] border-t-transparent animate-spin"></div>
          </div>
        </div>
        <h2 className="text-4xl font-display">Just a moment...</h2>
        <p className="text-xl text-white/70">We're processing your request</p>
        <p className="text-white/50 animate-pulse">This won't take long</p>
      </motion.div>
    );
  }

  if (status === 'error') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-center space-y-8"
      >
        <div className="error-x">
          <div className="x-icon"></div>
        </div>
        <h2 className="text-4xl font-display text-red-500">Oops! Something went wrong</h2>
        <p className="text-xl text-white/70">{error}</p>
        <p className="text-white/50">Please try again later or contact us directly at info@vfx.ishkumar.com</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="text-center space-y-8"
    >
      <div className="success-checkmark">
        <div className="check-icon"></div>
      </div>
      <h2 className="text-4xl font-display">Thanks, {name}!</h2>
      <p className="text-xl text-white/70">Your project details have been saved successfully.</p>
      <p className="text-white/50">I'll get back to you within 24 hours with next steps!</p>
    </motion.div>
  );
}