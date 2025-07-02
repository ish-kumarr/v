"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import BookingForm from "@/components/booking-form";

export const metadata = {
  title: 'Ish Kumar - Visuals and Designs | Book Now - Pre-Opening Offers',
  description: 'Book professional video editing and VFX services by Ish Kumar. Enjoy exclusive pre-opening offers and secure your spot today.',
  openGraph: {
    title: 'Ish Kumar - Visuals and Designs | Book Now - Pre-Opening Offers',
    description: 'Book professional video editing and VFX services by Ish Kumar. Enjoy exclusive pre-opening offers and secure your spot today.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Ish Kumar - Visuals and Designs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ish Kumar - Visuals and Designs | Book Now - Pre-Opening Offers',
    description: 'Book professional video editing and VFX services by Ish Kumar. Enjoy exclusive pre-opening offers and secure your spot today.',
    images: ['/logo.png'],
  },
};

export default function BookPage() {
  const router = useRouter();

  return (
    <main className="gradient-background min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-8 md:px-16">
      <div className="w-full max-w-4xl mx-auto flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <button
            className="text-white/70 hover:text-white flex items-center gap-2 transition-colors"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="w-4 h-4" />
            Back home
          </button>
        </motion.div>
        <BookingForm />
      </div>
    </main>
  );
}
