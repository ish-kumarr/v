"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setErrorMessage("Please enter your email address");
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <div className="w-full max-w-md mx-auto fade-in px-4">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 sm:p-8 text-center">
          <div className="success-checkmark">
            <div className="check-icon"></div>
          </div>
          <h3 className="text-lg sm:text-xl font-medium mt-4 mb-2 text-white">Thank You!</h3>
          <p className="text-gray-300 mb-4">You've been added to our waiting list.</p>
          <button
            onClick={resetForm}
            className="text-sm text-[#287bd2] hover:text-[#287bd2]/80 transition-colors"
          >
            Subscribe another email
          </button>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="w-full max-w-md mx-auto fade-in px-4">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 sm:p-8 text-center">
          <div className="error-x">
            <div className="x-icon"></div>
          </div>
          <h3 className="text-lg sm:text-xl font-medium mt-4 mb-2 text-white">Oops!</h3>
          <p className="text-gray-300 mb-4">{errorMessage}</p>
          <button
            onClick={resetForm}
            className="text-sm text-[#287bd2] hover:text-[#287bd2]/80 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto fade-in delay-200 px-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-2">
        <div className="relative flex-grow">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={cn(
              "w-full px-4 py-3 bg-black/30 backdrop-blur-sm border rounded-lg focus:outline-none focus:ring-2 transition-all",
              "text-white placeholder-gray-400",
              status === "submitting" ? "border-gray-500 opacity-70" : "border-gray-700 hover:border-gray-500"
            )}
            disabled={status === "submitting"}
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "px-6 py-3 rounded-lg font-medium transition-all w-full sm:w-auto",
            status === "submitting"
              ? "bg-[#287bd2]/50 text-gray-300 cursor-wait"
              : "bg-[#287bd2] hover:bg-[#287bd2]/80 text-white"
          )}
        >
          {status === "submitting" ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing
            </span>
          ) : (
            "Join the list"
          )}
        </button>
      </form>
    </div>
  );
}