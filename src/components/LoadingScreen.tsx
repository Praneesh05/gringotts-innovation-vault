import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import magicalBookImage from '@/assets/magical-book.jpg';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [stage, setStage] = useState<'floating' | 'opening' | 'showing' | 'closing'>('floating');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('opening'), 1000);
    const timer2 = setTimeout(() => setStage('showing'), 2000);
    const timer3 = setTimeout(() => setStage('closing'), 4000);
    const timer4 = setTimeout(() => onComplete(), 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  const MagicalParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-magical-gold rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 20,
            scale: 0 
          }}
          animate={{ 
            y: -20,
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 50%),
            radial-gradient(circle at 70% 60%, rgba(45, 55, 120, 0.2) 0%, transparent 50%)
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Candlelight flicker effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-magical-gold/5 to-transparent animate-candleflicker" />
        
        <MagicalParticles />

        <div className="relative">
          {/* Magical Book */}
          <motion.div
            className="relative"
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ 
              y: stage === 'floating' ? [-5, 5, -5] : 0,
              opacity: 1,
              scale: stage === 'opening' ? 1.1 : 1,
              rotateY: stage === 'opening' ? -15 : 0
            }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.5 },
              rotateY: { duration: 0.8 }
            }}
          >
            <img 
              src={magicalBookImage} 
              alt="Magical Book"
              className="w-64 h-64 object-cover drop-shadow-glow"
            />
            
            {/* Golden glow effect */}
            <div className="absolute inset-0 bg-gradient-magical opacity-20 rounded-lg animate-glow-pulse" />
          </motion.div>

          {/* Book Pages Content */}
          <AnimatePresence>
            {(stage === 'showing' || stage === 'closing') && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center bg-parchment/90 p-8 rounded-lg border-2 border-magical-gold/30 backdrop-blur-sm">
                  <motion.h1
                    className="text-4xl font-magical text-magical-gold mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    🪙 Gringotts
                  </motion.h1>
                  <motion.h2
                    className="text-2xl font-magical text-magical-navy"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Innovation Vault
                  </motion.h2>
                  <motion.p
                    className="text-sm text-muted-foreground mt-2 italic"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Where Genius Dares and Magic Decides
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sparkle effects */}
          {stage === 'opening' && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-magical-gold-glow rounded-full"
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${30 + (i % 3) * 20}%`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};