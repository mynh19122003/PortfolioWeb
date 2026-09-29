"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prevProgress + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 mb-8 pulse-glow">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">MD</span>
          </div>
        </div>
        <div className="w-64 h-2 bg-slate-800 rounded-full mx-auto mb-4">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300"
            style={{ width: \`\${progress}%\` }}
          ></div>
        </div>
        <p className="text-gray-400">Loading Portfolio...</p>
      </div>
    </div>
  );
}
