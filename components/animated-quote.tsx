"use client";

import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const quotes = [
  "Crafting Visual Magic Since 2020",
  "Music Videos that Slap Harder than Life",
  "Lyrical Visuals for DJs Who Don't Settle",
  "Wedding Films with Cinematic Sauce",
  "Creative Direction that Hits Different",
  "Edits So Smooth, You'll Think It's VFX Foreplay",
  "Brand Reels That Actually Convert",
  "Films So Cinematic, Even Nolan's Nervous",
  "One Editor, Infinite Energy",
  "You Imagine. I Animate.",
  "Where Creativity Gets Dangerous",
  "Built for Artists, Not Algorithms",
  "VFX That Punches You in the Soul",
  "Designed to Drop Jaws",
  "Editing With a Vengeance",
  "High Frame Rate. Higher Standards.",
  "Editing That's Built Different™",
  "Creating for the Unapologetic",
  "Your Vision + My Madness = Magic",
  "The Visuals You Brag About",
  "For Creators Who Give a Damn",
  "Not Just Visuals — It's a Fucking Experience",
  "Experimental Visuals, For the Brave Only",
  "Every Frame a Banger"
];

export default function AnimatedQuote() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 h-8 overflow-hidden">
      <p 
        className={cn(
          "text-sm md:text-base text-white/70 text-center transition-all duration-500 font-display tracking-wide",
          isAnimating ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"
        )}
      >
        {currentQuote}
      </p>
    </div>
  );
}