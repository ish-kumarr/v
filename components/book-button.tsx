"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function BookButton() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/book');
  };
  
  return (
    <a 
      href="/book"
      onClick={handleClick}
      className={cn(
        "book-now-button relative inline-flex items-center justify-center px-8 py-3",
        "rounded-full backdrop-blur-sm",
        "transition-all duration-300 ease-out",
        isHovered ? "px-10" : "px-8"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative text-white flex items-center">
        Book Now
        <svg 
          className={cn(
            "ml-2 h-5 w-5 transition-transform duration-300",
            isHovered ? "translate-x-1" : ""
          )} 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </a>
  );
}