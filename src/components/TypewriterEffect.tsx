"use client";

import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export default function TypewriterEffect({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000 
}: TypewriterEffectProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fullText = texts[currentIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  );
}
