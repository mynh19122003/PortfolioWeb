"use client";

import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export default function AnimatedCounter({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const countElement = countRef.current;
    if (!countElement) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOut);
      
      countElement.textContent = currentValue.toString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, suffix]);

  return <span ref={countRef}>0{suffix}</span>;
}
