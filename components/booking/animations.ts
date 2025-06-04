export const containerVariants = {
  hidden: { 
    opacity: 0,
    y: 40,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0,
    y: -40,
    filter: "blur(10px)",
    transition: {
      duration: 0.5
    }
  }
};