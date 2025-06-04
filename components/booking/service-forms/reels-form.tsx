"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { containerVariants } from "../animations";
import { FormData } from "../types";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

interface ReelsFormProps {
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
  nextStep: () => void;
}

export default function ReelsForm({ register, watch, nextStep }: ReelsFormProps) {
  const reelPlatform = watch("reelPlatform");
  const reelCount = watch("reelCount");
  const isValid = reelPlatform && reelCount;

  const platforms = [
    { value: "instagram", label: "Instagram" },
    { value: "youtube", label: "YouTube Shorts" },
    { value: "both", label: "Both Platforms" }
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
        <div className="space-y-4">
          <p className="text-3xl font-display">These reels are for</p>
          <div className="space-y-3">
            {platforms.map((platform) => (
              <label
                key={platform.value}
                className={`
                  flex items-center space-x-3 p-4 rounded-lg border transition-all duration-300
                  ${reelPlatform === platform.value 
                    ? "border-[#287bd2] bg-[#287bd2]/10" 
                    : "border-white/10 hover:border-white/30"}
                  cursor-pointer group
                `}
              >
                <input
                  type="radio"
                  {...register("reelPlatform")}
                  value={platform.value}
                  className="w-4 h-4 border-2 border-white/20 bg-transparent checked:border-[#287bd2] checked:bg-[#287bd2] transition-colors"
                />
                <span className={`text-lg transition-colors ${
                  reelPlatform === platform.value ? "text-white" : "text-white/70"
                } group-hover:text-white`}>
                  {platform.label}
                </span>
              </label>
            ))}
          </div>
        </div>
        
        <label className="text-3xl font-display block">
          I need{" "}
          <input
            type="number"
            {...register("reelCount")}
            className="bg-transparent border-b-2 border-white/20 focus:border-[#287bd2] outline-none px-2 py-1 w-[120px] transition-colors"
            placeholder="number"
            min="1"
          />{" "}
          reels edited
        </label>
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