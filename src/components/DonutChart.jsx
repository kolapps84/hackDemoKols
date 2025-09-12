import React from "react";

/**
 * DonutChart component for displaying a percentage as a donut.
 * Props:
 *   - percent: number (0-100)
 *   - size: number (px)
 *   - strokeWidth: number (px)
 *   - color: string (stroke color)
 *   - bgColor: string (background stroke color)
 *   - children: ReactNode (center content)
 */
const DonutChart = ({ percent = 0, size = 128, strokeWidth = 8, color = "#6366f1", bgColor = "#e5e7eb", children }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);
  return (
    <svg width={size} height={size} className="block" style={{ position: "relative" }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={bgColor}
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.5s" }}
      />
      {children && (
        <foreignObject x={size * 0.2} y={size * 0.32} width={size * 0.6} height={size * 0.36}>
          <div className="flex items-center justify-center w-full h-full">{children}</div>
        </foreignObject>
      )}
    </svg>
  );
};

export default DonutChart;
