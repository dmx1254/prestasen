"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";
let interval: any;

type Word = {
  id: string;
  word: string;
  color: string;
};

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: Word[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState<Word>(words[0]);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    let i = 0;
    interval = setInterval(() => {
      i++;
      if (i === words.length) {
        i = 0;
      }
      const word = words[i];
      setCurrentWord(word);
    }, duration);

    return () => {
      clearInterval(interval);
    };
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          `z-10 inline-block relative text-left dark:text-neutral-100 px-2`,
          className
        )}
        key={currentWord.word}
        style={{
          color: currentWord.color,
        }}
      >
        {currentWord.word.split("").map((letter, index) => (
          <motion.span
            key={currentWord.word + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
