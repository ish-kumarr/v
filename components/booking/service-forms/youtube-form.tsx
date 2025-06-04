"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { containerVariants } from "../animations";
import { FormData } from "../types";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

interface YouTubeFormProps {
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
  nextStep: () => void;
}

export default function YouTubeForm({ register, watch, nextStep }: YouTubeFormProps) {
  const channelNiche = watch("channelNiche");
  const videoLength = watch("videoLength");
  const isValid = channelNiche && videoLength;

  const videoLengths = [
    { value: "short", label: "Under 10 minutes" },
    { value: "medium", label: "10-30 minutes" },
    { value: "long", label: "Over 30 minutes" }
  ];

  return (
    <motion.div 
      className="space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="space-y-8">
        <label className="text-3xl font-display block">
          My channel is about{" "}
          <input
            type="text"
            {...register("channelNiche")}
            className="bg-transparent border-b-2 border-white/20 focus:border-[#287bd2] outline-none px-2 py-1 min-w-[300px] w-auto transition-all"
            placeholder="your niche / content type"
          />
        </label>
        
        <div className="space-y-4">
          <p className="text-3xl font-display">Most videos are</p>
          <div className="space-y-3">
            {videoLengths.map((length) => (
              <label
                key={length.value}
                className="flex items-center space-x-3 p-4 rounded-lg border border-white/10 hover:border-[#287bd2]/50 transition-colors cursor-pointer group"
              >
                <input
                  type="radio"
                  {...register("videoLength")}
                  value={length.value}
                  className="w-4 h-4 border-2 border-white/20 bg-transparent checked:border-[#287bd2] checked:bg-[#287bd2] transition-colors"
                />
                <span className="text-lg text-white/70 group-hover:text-white transition-colors">
                  {length.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
      
      <button
        onClick={() => isValid && nextStep()}
        disabled={!isValid}
        className={`px-8 py-3 rounded-full text-white font-medium flex items-center gap-2 transition-colors ${
          isValid ? "bg-[#287bd2] hover:bg-[#287bd2]/90 cursor-pointer" : "bg-[#287bd2]/50 cursor-not-allowed"
        }`}
      >
        Continue <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}