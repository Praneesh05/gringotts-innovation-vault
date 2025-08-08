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

  const Chandelier = ({ left, top, delay = 0 }: { left: string; top: string; delay?: number }) => (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left, top }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 1 }}
    >
      {/* Chandelier chain */}
      <div className="w-px h-16 bg-gradient-to-b from-yellow-600/40 to-yellow-700/60 mx-auto animate-chain-swing" />
      
      {/* Main chandelier body */}
      <motion.div
        className="relative w-24 h-20"
        animate={{ 
          rotate: [0, 0.5, 0, -0.5, 0],
          y: [0, -2, 0, -1, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Chandelier frame */}
        <div className="absolute inset-0 border-2 border-yellow-600/60 rounded-full bg-gradient-to-b from-yellow-800/20 to-yellow-900/40" />
        
        {/* Candles around the chandelier */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => {
          const x = Math.cos((angle * Math.PI) / 180) * 35;
          const y = Math.sin((angle * Math.PI) / 180) * 15;
          
          return (
            <div
              key={index}
              className="absolute w-1 h-6"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Candle */}
              <div className="w-1 h-4 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-sm" />
              
              {/* Flame */}
              <motion.div
                className="w-2 h-3 bg-gradient-radial from-yellow-300 via-orange-400 to-red-500 rounded-full -mt-1 ml-0.5"
                animate={{
                  scale: [1, 1.1, 0.9, 1.05, 1],
                  opacity: [0.9, 1, 0.8, 0.95, 0.9]
                }}
                transition={{
                  duration: 2 + (index * 0.2),
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  filter: 'drop-shadow(0 0 8px hsl(30 100% 70% / 0.8))',
                  boxShadow: '0 0 10px hsl(30 100% 70% / 0.6)'
                }}
              />
              
              {/* Wax drip */}
              <motion.div
                className="w-0.5 bg-gradient-to-b from-yellow-100 to-transparent ml-0.5"
                animate={{ height: ['0px', '8px', '0px'] }}
                transition={{
                  duration: 5 + (index * 0.5),
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </div>
          );
        })}
        
        {/* Central candle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-8 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-sm" />
          <motion.div
            className="w-3 h-4 bg-gradient-radial from-yellow-300 via-orange-400 to-red-500 rounded-full -mt-2 ml-0.5"
            animate={{
              scale: [1, 1.2, 0.8, 1.1, 1],
              opacity: [0.9, 1, 0.7, 0.95, 0.9]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              filter: 'drop-shadow(0 0 12px hsl(30 100% 70% / 1))',
              boxShadow: '0 0 15px hsl(30 100% 70% / 0.8)'
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );

  const FloatingCandle = ({ left, top, delay = 0 }: { left: string; top: string; delay?: number }) => (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left, top }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8 }}
    >
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, 1, -1, 0]
        }}
        transition={{ 
          duration: 3 + delay,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Candle holder */}
        <div className="w-8 h-3 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-full mb-1" />
        
        {/* Candle */}
        <div className="w-3 h-12 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-sm mx-auto" />
        
        {/* Flame */}
        <motion.div
          className="w-4 h-5 bg-gradient-radial from-yellow-300 via-orange-400 to-red-500 rounded-full mx-auto -mt-2"
          animate={{
            scale: [1, 1.15, 0.85, 1.05, 1],
            opacity: [0.9, 1, 0.75, 0.95, 0.9]
          }}
          transition={{
            duration: 2 + delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: 'drop-shadow(0 0 10px hsl(30 100% 70% / 0.8))',
            boxShadow: '0 0 12px hsl(30 100% 70% / 0.6)'
          }}
        />
        
        {/* Light circle */}
        <div 
          className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full opacity-20 pointer-events-none animate-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(30 100% 70% / 0.3) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </motion.div>
    </motion.div>
  );

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

      {/* Chandeliers */}
      <Chandelier left="15%" top="5%" delay={0.5} />
      <Chandelier left="75%" top="8%" delay={1.2} />
      <Chandelier left="45%" top="3%" delay={2} />

      {/* Floating candles */}
      <FloatingCandle left="10%" top="25%" delay={0.8} />
      <FloatingCandle left="85%" top="35%" delay={1.5} />
      <FloatingCandle left="25%" top="60%" delay={2.2} />
      <FloatingCandle left="70%" top="70%" delay={0.3} />
      <FloatingCandle left="90%" top="15%" delay={1.8} />
      <FloatingCandle left="5%" top="80%" delay={1} />

      {/* Mystical particles */}
      <MysticalParticles />

      {/* Atmospheric shadows */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10" />
    </div>
  );
};