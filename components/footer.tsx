import { Mail, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { 
      name: "Instagram", 
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />, 
      href: "#" 
    },
    { 
      name: "Twitter", 
      icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />, 
      href: "#" 
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, 
      href: "#" 
    }
  ];

  return (
    <footer className="w-full pt-8 sm:pt-12 pb-4 sm:pb-6 mt-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm">
        <div className="flex items-center mb-4 md:mb-0">
          <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          <a 
            href="mailto:info@vfx.ishkumar.com" 
            className="hover:text-[#287bd2] transition-colors"
          >
            info@vfx.ishkumar.com
          </a>
        </div>
        
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="p-1.5 sm:p-2 rounded-full hover:bg-[#287bd2]/10 hover:text-[#287bd2] transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}