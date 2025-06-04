import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { containerVariants } from "../animations";
import { FormData } from "../types";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

interface OtherFormProps {
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
  nextStep: () => void;
}

export default function OtherForm({ register, watch, nextStep }: OtherFormProps) {
  const projectDescription = watch("projectDescription");
  const isValid = projectDescription && projectDescription.length > 0;

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
