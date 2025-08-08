import { motion } from 'framer-motion';
import { useState } from 'react';
import { Book } from 'lucide-react';
import { FlipbookModal } from './FlipbookModal';

interface InteractiveBookProps {
  title: string;
  description: string;
  pages: {
    title: string;
    content: string;
  }[];
  color?: 'gold' | 'navy';
}

export const InteractiveBook = ({ 
  title, 
  description, 
  pages, 
  color = 'gold' 
}: InteractiveBookProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const colorClasses = {
    gold: 'from-magical-gold to-magical-gold-glow border-magical-gold',
    navy: 'from-magical-navy to-magical-navy-deep border-magical-navy'
  };

  return (
    <>
      <motion.div
        className="group cursor-pointer"
        whileHover={{ scale: 1.05, rotateY: 5 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsModalOpen(true)}
      >
        <div 
          className={`
            relative h-48 w-36 mx-auto
            bg-gradient-to-br ${colorClasses[color]}
            border-2 rounded-lg shadow-mystical
            transform-gpu perspective-1000
            group-hover:shadow-magical
            transition-all duration-300
          `}
        >
          {/* Book spine effect */}
          <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-black/20 to-black/40 rounded-l-lg" />
          
          {/* Book cover design */}
          <div className="p-4 h-full flex flex-col justify-between">
            <div className="text-center">
              <Book className="w-8 h-8 mx-auto mb-2 text-parchment" />
              <h3 className="text-sm font-magical text-parchment leading-tight">
                {title}
              </h3>
            </div>
            
            <div className="text-center">
              <div className="w-full h-px bg-parchment/30 mb-2" />
              <p className="text-xs text-parchment/80 leading-tight">
                {description}
              </p>
            </div>
          </div>

          {/* Magical glow effect */}
          <motion.div
            className="absolute inset-0 bg-magical-gold/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ opacity: [0, 0.2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Floating sparkles */}
          <div className="absolute inset-0 pointer-events-none group-hover:block hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-parchment rounded-full"
                style={{
                  left: `${20 + (i * 20)}%`,
                  top: `${20 + (i % 2) * 60}%`
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity
                }}
              />
            ))}
          </div>
        </div>

        {/* Book title below */}
        <motion.h4
          className="text-center mt-4 font-magical text-magical-navy"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {title}
        </motion.h4>
      </motion.div>

      <FlipbookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        pages={pages}
      />
    </>
  );
};