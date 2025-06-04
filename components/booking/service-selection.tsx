import { motion } from "framer-motion";
import { services } from "./services-data";
import { containerVariants } from "./animations";

interface ServiceSelectionProps {
  name: string;
  onServiceSelect: (serviceId: string) => void;
}

export default function ServiceSelection({ name, onServiceSelect }: ServiceSelectionProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-12 w-full px-4 sm:px-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl sm:text-6xl font-display text-white">
          Hello, {name}!
        </h2>
        <p className="text-lg sm:text-xl text-white/70">What can I help you with today?</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            style={{
              '--highlight-color': service.highlightColor
            } as React.CSSProperties}
            className={`
              relative p-6 sm:p-8 rounded-2xl transition-all duration-300 
              ${service.comingSoon 
                ? 'cursor-not-allowed opacity-50' 
                : 'cursor-pointer hover:scale-[1.02] hover:-translate-y-1'
              }
              bg-gradient-to-br ${service.gradient}
              backdrop-blur-sm
              border border-white/10
              group
              overflow-hidden
              before:absolute before:inset-0 
              before:bg-transparent
              before:transition-colors 
              before:duration-300
              ${!service.comingSoon && 'hover:before:bg-[var(--highlight-color)]'}
              after:absolute after:inset-0 
              after:rounded-2xl after:border-2 
              after:border-transparent 
              after:transition-colors 
              after:duration-300
              ${!service.comingSoon && 'hover:after:border-[var(--highlight-color)]'}
            `}
            onClick={() => !service.comingSoon && onServiceSelect(service.id)}
          >
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-display mb-2 flex items-center gap-2">
                {service.title}
                {service.comingSoon && (
                  <span className="text-sm font-normal text-white/50 border border-white/20 rounded-full px-2 py-0.5">
                    Coming Soon
                  </span>
                )}
              </h3>
              <p className="text-white/70">{service.description}</p>
            </div>
            {service.icon}
            
            {/* Glow effect */}
            <div 
              className="absolute inset-0 bg-transparent transition-colors duration-300"
              style={{
                background: `radial-gradient(circle at 50% 50%, transparent 50%, ${service.highlightColor} 150%)`
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}