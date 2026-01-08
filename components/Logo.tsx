
import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8", isDark = false }) => {
  const primaryColor = isDark ? "#ffffff" : "#0f172a"; // Slate-900
  const accentColor = "#B8860B"; // Strategic Gold

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Shield / Path Shape */}
        <path
          d="M50 10C30 10 15 25 15 45V65C15 75 25 85 50 90C75 85 85 75 85 65V45C85 25 70 10 50 10Z"
          stroke={primaryColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Stylized Compass Needle / Upward Path */}
        <path
          d="M50 30L65 55H35L50 30Z"
          fill={accentColor}
        />
        <path
          d="M50 30V75"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Strategic Dots */}
        <circle cx="50" cy="50" r="3" fill={primaryColor} />
      </svg>
      <span className={`text-xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
        CyBar<span style={{ color: accentColor }}>Prep</span>
      </span>
    </div>
  );
};

export default Logo;
