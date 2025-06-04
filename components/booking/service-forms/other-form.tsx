import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { containerVariants } from "../animations";
import { FormData } from "../types";
import { UseFormRegister } from "react-hook-form";

interface OtherFormProps {
  register: UseFormRegister<FormData>;
  nextStep: () => void;
}

export default function OtherForm({ register, nextStep }: OtherFormProps) {
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
          Tell me about your project
          <textarea
            {...register("projectDescription")}
            className="mt-4 w-full bg-transparent border-b-2 border-white/20 focus:border-[#287bd2] outline-none px-2 py-1 transition-colors resize-none"
            rows={3}
            placeholder="Describe your vision..."
          />
        </label>
      </div>
      <button
        onClick={nextStep}
        className="px-8 py-3 bg-[#287bd2] rounded-full text-white font-medium flex items-center gap-2 hover:bg-[#287bd2]/90 transition-colors"
      >
        Continue <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}