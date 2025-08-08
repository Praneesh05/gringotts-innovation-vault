import { motion } from 'framer-motion';
import scrollClosedImage from '@/assets/scroll-closed.jpg';

interface RegistrationButtonProps {
  registrationLink: string;
}

export const RegistrationButton = ({ registrationLink }: RegistrationButtonProps) => {
  const handleClick = () => {
    window.open(registrationLink, '_blank');
  };

  return (
    <motion.div
      className="flex justify-center my-12"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.button
        onClick={handleClick}
        className="relative group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Scroll background */}
        <img 
          src={scrollClosedImage} 
          alt="Registration Scroll"
          className="w-64 h-32 object-cover filter drop-shadow-lg"
        />
        
        {/* Golden glow on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-magical opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300"
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Registration text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-magical-navy font-magical text-lg font-bold drop-shadow-sm">
            REGISTER NOW
          </span>
        </div>
        
        {/* Sparkle effects on hover */}
        <div className="absolute inset-0 pointer-events-none group-hover:block hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-magical-gold rounded-full"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i % 2) * 40}%`
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity
              }}
            />
          ))}
        </div>
      </motion.button>
    </motion.div>
  );
};