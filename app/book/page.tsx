"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BookingForm from "@/components/booking-form";

export default function BookPage() {
  const router = useRouter();

  return (
    <main className="gradient-background min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-8 md:px-16">
      <div className="w-full max-w-4xl mx-auto flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <button
            className="text-white/70 hover:text-white flex items-center gap-2 transition-colors"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="w-4 h-4" />
            Back home
          </button>
        </motion.div>
        <BookingForm />
      </div>
    </main>
  );
}