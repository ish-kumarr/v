"use client";

import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const quotes = [
  "Born to Edit, Trained by Chaos",
  "Every Frame Has Purpose",
  "Storytelling with an Attitude",
  "Deadlines Fear Me",
  "Creating Waves, Not Trends",
  "Never Offbeat. Always Off Limits",
  "Make Them Watch Twice",
  "This Ain't Just VFX, It's War",
  "Syncing Dreams to Timelines",
  "Art Direction That Slaps",
  "Where Audio Meets Acid Visuals",
  "One-Man Fucking Studio",
  "No Presets, No Apologies",
  "Editing Under Influence (Of Art)",
  "Timing So Tight, It Hurts",
  "Your Music, My Madness",
  "You Bring Chaos. I Bring Structure.",
  "High on Story, Drunk on Transitions",
  "Visual Overdose, Handle With Care",
  "Low Budget, High Fucking Energy",
  "Timeline-Fu Master Since 2019",
  "Beats Meet Blades Here",
  "Screaming Text, Whispered Emotions",
  "A Timeline Full of Secrets",
  "This Cut? Not Legal in Some Countries",
  "Cinematic With a Side of Psychosis",
  "Rendered to Perfection",
  "Your Brand Deserves Better",
  "Turning Audio into Aesthetic Violence",
  "Cut by Cut, Frame by Fucking Frame",
  "I Edit While You Sleep",
  "Built in Midnight Sessions",
  "Every Project is Personal",
  "Moodboard Addict",
  "Your Vision, Reimagined",
  "I Don't Follow Trends. I End Them.",
  "Made for the Scroll-Stopping Moments",
  "Raw, Real, Ruthless",
  "Feedback Friendly, Bullshit Proof",
  "Where Deadlines Become Dead Art",
  "Dark Mode Only",
  "When Clean Meets Chaos",
  "Trust Me, I've Rendered Worse",
  "VFX Designed to Make You Moan",
  "Audio Fucked Me Up, So I Edited It",
  "Don't Watch This Alone",
  "Designed to Haunt Reels",
  "Layers on Layers on Purpose",
  "Your Story, But Sexier",
  "Born in Timelines, Raised in Deadlines",
  "More Transitions Than Emotions",
  "What You Need, But Make It Fucking Pretty",
  "Let the Visuals Do the Talking"
];

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    setMounted(true);
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    const quoteInterval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 2000);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearInterval(quoteInterval);
      clearTimeout(timer);
    };
  }, []);

  // Don't render anything until mounted on client
  if (!mounted) return null;

  // Don't render if not loading
  if (!loading) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 bg-black flex items-center justify-center",
        "transition-all duration-1000",
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="text-center px-4">
        <div className="relative w-24 h-24 mb-8 mx-auto">
          <div className="absolute inset-0 border-2 border-[#287bd2]/20 rounded-full"></div>
          <div className="absolute inset-0 border-2 border-[#287bd2] rounded-full animate-[spin_1s_linear_infinite] border-t-transparent"></div>
        </div>
        <p className="text-white/70 font-display tracking-wider text-sm md:text-base transition-all duration-500">
          {currentQuote}
        </p>
      </div>
    </div>
  );
}