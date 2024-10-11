"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TextWriter = ({
  phrases,
  cursor,
}: {
  phrases: string[];
  cursor: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // Pause de 2 secondes
      return () => clearTimeout(pauseTimeout);
    }

    if (
      !isDeleting &&
      currentCharacterIndex < phrases[currentPhraseIndex].length
    ) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(
          (prevText) =>
            prevText + phrases[currentPhraseIndex][currentCharacterIndex]
        );
        setCurrentCharacterIndex((prevIndex) => prevIndex + 1);
      }, 100); // Vitesse de la machine à écrire
      return () => clearTimeout(typingTimeout);
    }

    if (isDeleting && currentCharacterIndex > 0) {
      const deletingTimeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText.slice(0, -1));
        setCurrentCharacterIndex((prevIndex) => prevIndex - 1);
      }, 50); // Vitesse de suppression
      return () => clearTimeout(deletingTimeout);
    }

    if (currentCharacterIndex === phrases[currentPhraseIndex].length) {
      setIsPaused(true);
    }

    if (isDeleting && currentCharacterIndex === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }
  }, [
    currentCharacterIndex,
    isDeleting,
    isPaused,
    phrases,
    currentPhraseIndex,
  ]);

  return (
    <div style={{ display: "inline-block" }}>
      <span>{displayedText}</span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-gray-400 text-base"
      >
        {cursor}
      </motion.span>
    </div>
  );
};

export default TextWriter;
