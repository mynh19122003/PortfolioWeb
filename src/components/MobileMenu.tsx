"use client";

import { useState } from "react";

interface MobileMenuProps {
  sections: string[];
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export default function MobileMenu({ sections, activeSection, onSectionClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (section: string) => {
    onSectionClick(section);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-xl"
      >
        {isOpen ? "✕" : "☰"}
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
          <div className="py-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`block w-full text-left px-6 py-3 capitalize transition-colors ${
                  activeSection === section
                    ? "text-purple-400 bg-purple-900/20"
                    : "text-gray-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
