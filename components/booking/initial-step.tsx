"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { containerVariants } from "./animations";
import { FormData } from "./types";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

interface InitialStepProps {
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
  nextStep: () => void;
  setUseEmail: (value: boolean) => void;
  useEmail: boolean;
}

export default function InitialStep({ register, watch, nextStep, setUseEmail, useEmail }: InitialStepProps) {
  const [isValid, setIsValid] = useState(false);
  const name = watch("name");
  const email = watch("email");
  const phone = watch("phone");

  useEffect(() => {
    if (useEmail) {
      setIsValid(!!name && !!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    } else {
      setIsValid(!!name && !!phone && /^[0-9]{10}$/.test(phone));
    }
  }, [name, email, phone, useEmail]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full space-y-12 px-4 sm:px-0"
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-2xl sm:text-4xl font-display block">
            I am{" "}
            <input
              type="text"
              {...register("name")}
              className="bg-transparent border-b-2 border-white/20 focus:border-[#287bd2] outline-none px-2 py-1 w-full sm:w-auto sm:min-w-[300px] transition-all"
              placeholder="your name"
            />
          </label>
        </div>

        <div className="space-y-2">
          <label className="text-2xl sm:text-4xl font-display block">
            and my {useEmail ? "email is" : "phone number is"}{" "}
            <div className="inline-block relative w-full sm:w-auto">
              <input
                type={useEmail ? "email" : "tel"}
                {...register(useEmail ? "email" : "phone")}
                className="bg-transparent border-b-2 border-white/20 focus:border-[#287bd2] outline-none px-2 py-1 w-full sm:w-auto sm:min-w-[300px] transition-all"
                placeholder={useEmail ? "your email" : "your phone number"}
              />
            </div>
          </label>
          <button
            onClick={() => setUseEmail(!useEmail)}
            className="text-sm text-white/50 hover:text-white/70 transition-colors block mt-2"
          >
            {useEmail ? "I prefer to be contacted via phone" : "I prefer to be contacted via email"}
          </button>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: isValid ? 1.02 : 1 }}
        whileTap={{ scale: isValid ? 0.98 : 1 }}
        className={`w-full sm:w-auto px-8 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2 transition-all ${
          isValid ? "bg-[#287bd2] cursor-pointer" : "bg-[#287bd2]/50 cursor-not-allowed"
        }`}
        onClick={() => isValid && nextStep()}
        disabled={!isValid}
      >
        Continue <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}