import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalDetails } from "../Details";

function LoadingScreen({ onComplete }) {
  const [loading, setLoading] = useState(true);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            setTimeout(() => {
              onCompleteRef.current?.();
            }, 1000); // give time for exit animation
          }, 400); // slight pause at 100%
          return 100;
        }
        // Random increment between 5-15
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0F0F1A] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Split Screen Exit Effects */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-[#151525] z-0"
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          />
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-[#151525] z-0"
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          />

          <div className="z-10 flex flex-col items-center">
            {/* Cinematic Name Reveal */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold font-secondary tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800"
              >
                {personalDetails.name || "Portfolio"}
              </motion.h1>
            </div>
            
            {/* Creative Progress Bar */}
            <div className="w-64 h-[2px] bg-slate-800 rounded-full overflow-hidden relative mt-4">
              <motion.div
                className="absolute top-0 left-0 h-full bg-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            
            {/* Progress Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-slate-400 font-primary font-light text-sm tracking-widest"
            >
              {progress}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
