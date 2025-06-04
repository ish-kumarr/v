import { Film, Instagram, Palette, Globe, Megaphone } from "lucide-react";
import { Service } from "./types";

export const services: Service[] = [
  {
    id: "youtube",
    title: "YouTube Channel",
    description: "Professional video editing for content creators",
    gradient: "from-purple-500/20 to-blue-500/20",
    highlightColor: "rgba(147, 51, 234, 0.3)", // purple-500
    icon: <Film className="w-24 h-24 absolute right-4 bottom-4 opacity-10" />
  },
  {
    id: "reels",
    title: "Reels & Shorts",
    description: "Engaging short-form vertical content",
    gradient: "from-pink-500/20 to-purple-500/20",
    highlightColor: "rgba(236, 72, 153, 0.3)", // pink-500
    icon: <Instagram className="w-24 h-24 absolute right-4 bottom-4 opacity-10" />
  },
  {
    id: "other",
    title: "Custom Project",
    description: "Unique creative collaborations",
    gradient: "from-orange-500/20 to-red-500/20",
    highlightColor: "rgba(249, 115, 22, 0.3)", // orange-500
    icon: <Palette className="w-24 h-24 absolute right-4 bottom-4 opacity-10" />
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Coming Soon - Professional web presence for creators",
    gradient: "from-gray-500/10 to-gray-600/10",
    highlightColor: "rgba(107, 114, 128, 0.3)", // gray-500
    icon: <Globe className="w-24 h-24 absolute right-4 bottom-4 opacity-10" />,
    comingSoon: true
  },
  {
    id: "reach",
    title: "Public Reach",
    description: "Coming Soon - Audience growth & engagement strategies",
    gradient: "from-gray-500/10 to-gray-600/10",
    highlightColor: "rgba(107, 114, 128, 0.3)", // gray-500
    icon: <Megaphone className="w-24 h-24 absolute right-4 bottom-4 opacity-10" />,
    comingSoon: true
  }
];