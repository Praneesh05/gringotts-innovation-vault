import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FlipbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pages: {
    title: string;
    content: string;
  }[];
}

export const FlipbookModal = ({ isOpen, onClose, title, pages }: FlipbookModalProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-magical-navy-deep/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            className="relative bg-parchment rounded-lg shadow-mystical max-w-4xl mx-4 max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-magical-gold/30">
              <h2 className="text-2xl font-magical text-magical-navy">{title}</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-magical-navy hover:bg-magical-gold/10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Book pages */}
            <div className="relative h-96 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  className="absolute inset-0 p-8"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="h-full bg-gradient-to-br from-parchment to-parchment-aged rounded-lg p-6 shadow-inner border border-magical-gold/20">
                    <h3 className="text-xl font-magical text-magical-gold mb-4">
                      {pages[currentPage]?.title}
                    </h3>
                    <div className="text-foreground leading-relaxed">
                      {pages[currentPage]?.content.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-3">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Page turn effect overlay */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-magical-gold/10 to-transparent pointer-events-none" />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-6 border-t border-magical-gold/30">
              <Button
                variant="outline"
                onClick={prevPage}
                disabled={currentPage === 0}
                className="border-magical-gold text-magical-navy hover:bg-magical-gold/10"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <span className="text-magical-navy font-medium">
                Page {currentPage + 1} of {pages.length}
              </span>
              
              <Button
                variant="outline"
                onClick={nextPage}
                disabled={currentPage === pages.length - 1}
                className="border-magical-gold text-magical-navy hover:bg-magical-gold/10"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            {/* Magical sparkle effects */}
            <div className="absolute top-4 right-4 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-magical-gold rounded-full"
                  style={{
                    left: `${i * 8}px`,
                    top: `${i * 8}px`
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};