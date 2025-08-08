import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MagicalCardProps {
  children: ReactNode;
  className?: string;
}

export const MagicalCard = ({ children, className = "" }: MagicalCardProps) => {
  return (
    <motion.div
      className={`
        relative p-6 bg-gradient-to-br from-card to-parchment-aged 
        border-2 border-magical-gold/40 rounded-lg shadow-mystical
        ${className}
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        boxShadow: "var(--shadow-magical)",
        scale: 1.02 
      }}
    >
      {/* Ornate corner decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-magical-gold/60" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-magical-gold/60" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-magical-gold/60" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-magical-gold/60" />
      
      {/* Magical glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-magical opacity-0 rounded-lg pointer-events-none"
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};