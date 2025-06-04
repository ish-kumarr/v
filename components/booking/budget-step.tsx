import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { containerVariants } from "./animations";
import { FormData } from "./types";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

interface BudgetStepProps {
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
  nextStep: () => void;
}

export default function BudgetStep({ register, watch, nextStep }: BudgetStepProps) {
  const selectedBudget = watch("budget");
  const isValid = selectedBudget;

  const budgetRanges = [
    { value: "basic", range: "₹0 - ₹2,000", description: "Perfect for getting started" },
    { value: "standard", range: "₹2,000 - ₹5,000", description: "Most popular choice" },
    { value: "premium", range: "₹5,000 - ₹15,000", description: "For complex projects" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-12 w-full max-w-4xl mx-auto"
    >
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-display">What's your budget range?</h2>
        <p className="text-xl text-white/70">Select a range that matches your project scope</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {budgetRanges.map((range) => (
          <label
            key={range.value}
            className={`
              relative flex flex-col p-6 rounded-xl border transition-all duration-300 cursor-pointer
              ${selectedBudget === range.value 
                ? "border-[#287bd2] bg-[#287bd2]/10" 
                : "border-white/10 hover:border-[#287bd2]/20"}
            `}
          >
            <input
              type="radio"
              {...register("budget")}
              value={range.value}
              className="absolute opacity-0"
            />
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-2xl font-display text-[#287bd2]">{range.range}</p>
                <p className="text-sm text-white/50">{range.description}</p>
              </div>
            </div>
          </label>
        ))}
      </div>

      <p className="text-center text-lg text-white/70 italic">
        Don't worry about the exact numbers - we'll figure out the perfect plan on our call! 🎨
      </p>

      <div className="flex justify-center">
        <button
          onClick={() => isValid && nextStep()}
          disabled={!isValid}
          className={`px-8 py-3 rounded-full text-white font-medium flex items-center gap-2 transition-colors ${
            isValid ? "bg-[#287bd2] hover:bg-[#287bd2]/90 cursor-pointer" : "bg-[#287bd2]/50 cursor-not-allowed"
          }`}
        >
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}