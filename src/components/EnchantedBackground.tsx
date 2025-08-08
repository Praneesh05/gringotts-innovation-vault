import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const EnchantedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  const MysticalParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 20,
            scale: 0
          }}
          animate={{
            y: -20,
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            x: Math.random() * window.innerWidth
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeOut"
          }}
          style={{
            filter: 'drop-shadow(0 0 4px hsl(30 100% 70% / 0.8))'
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Ambient lighting overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(30 100% 70% / 0.1) 0%, transparent 200px),
            radial-gradient(circle at 20% 20%, hsl(30 100% 70% / 0.05) 0%, transparent 300px),
            radial-gradient(circle at 80% 80%, hsl(30 100% 70% / 0.05) 0%, transparent 300px)
          `
        }}
      />


      {/* Mystical particles */}
      <MysticalParticles />

      {/* Atmospheric shadows */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10" />
    </div>
  );
};