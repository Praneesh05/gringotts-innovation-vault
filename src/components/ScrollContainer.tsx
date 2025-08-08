import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import scrollOpenImage from '@/assets/scroll-open.jpg';

interface ScrollContainerProps {
  children: ReactNode;
  className?: string;
}

export const ScrollContainer = ({ children, className = "" }: ScrollContainerProps) => {
  return (
    <motion.div
      className={`relative p-8 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background scroll image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95 rounded-lg"
        style={{ backgroundImage: `url(${scrollOpenImage})` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-parchment/60 rounded-lg" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {children}
      </div>
      
      {/* Decorative border */}
      <div className="absolute inset-0 border-2 border-magical-gold/30 rounded-lg pointer-events-none" />
    </motion.div>
  );
};