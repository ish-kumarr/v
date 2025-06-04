"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { containerVariants } from "../animations";
import { FormData } from "../types";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

interface MusicFormProps {
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
  nextStep: () => void;
}

export default function MusicForm({ register, watch, nextStep }: MusicFormProps) {
  const trackType = watch("trackType");
  const visualType = watch("visualType");
  const isValid = trackType && visualType;
  
  const trackTypes = [
    { 
      value: "single", 
      label: "Single Track",
      description: "Perfect for music videos and promotional content"
    },
    { 
      value: "album", 
      label: "Full Album",
      description: "Cohesive visuals for your entire album"
    },
    { 
      value: "live", 
      label: "Live DJ Set",
      description: "Real-time visuals for your performance"
    },
    { 
      value: "vj", 
      label: "VJ Performance",
      description: "Custom visuals for live events"
    },
    { 
      value: "installation", 
      label: "Audio-Visual Installation",
      description: "Immersive experiences for venues"
    }
  ];

  const visualTypes = [
    { 
      value: "abstract", 
      label: "Abstract Visuals",
      description: "Experimental and artistic animations"
    },
    { 
      value: "lyrical", 
      label: "Lyrical Visuals",
      description: "Typography-focused visual effects"
    },
    { 
      value: "reactive", 
      label: "Live Audio-Reactive",
      description: "Visuals that respond to your music"
    },
    { 
      value: "generative", 
      label: "Generative Art",
      description: "AI-powered visual experiences"
    },
    { 
      value: "hybrid", 
      label: "Hybrid (Mixed Media)",
      description: "Combination of different styles"
    }
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
          <p className="text-3xl font-display">This is for a</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trackTypes.map((type) => (
              <label
                key={type.value}
                className={`
                  flex flex-col p-6 rounded-xl border transition-all duration-300 cursor-pointer
                  ${trackType === type.value 
                    ? "border-[#287bd2] bg-[#287bd2]/10" 
                    : "border-white/10 hover:border-[#287bd2]/20"}
                `}
              >
                <input
                  type="radio"
                  {...register("trackType")}
                  value={type.value}
                  className="absolute opacity-0"
                />
                <span className="text-xl font-medium mb-2">{type.label}</span>
                <span className="text-sm text-white/70">{type.description}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-3xl font-display">I want</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visualTypes.map((type) => (
              <label
                key={type.value}
                className={`
                  flex flex-col p-6 rounded-xl border transition-all duration-300 cursor-pointer
                  ${visualType === type.value 
                    ? "border-[#287bd2] bg-[#287bd2]/10" 
                    : "border-white/10 hover:border-[#287bd2]/20"}
                `}
              >
                <input
                  type="radio"
                  {...register("visualType")}
                  value={type.value}
                  className="absolute opacity-0"
                />
                <span className="text-xl font-medium mb-2">{type.label}</span>
                <span className="text-sm text-white/70">{type.description}</span>
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