import React from "react";

/**
 * InfoCard component for displaying a stat card with title, value, subtitle, and research note.
 * Props:
 *   - title: string
 *   - value: string | number
 *   - subtitle: string
 *   - research: string
 *   - icon?: ReactNode
 *   - colorClass?: string (for value)
 *   - className?: string
 */
const InfoCard = ({ title, value, subtitle, research, icon, colorClass = "text-blue-700", className = "" }) => (
  <div className={`bg-white rounded-xl shadow p-6 flex flex-col ${className}`}>
    <div className="flex items-center mb-2 gap-2">
      {icon && <span>{icon}</span>}
      <span className="font-medium">{title}</span>
    </div>
    <div className={`text-2xl font-bold ${colorClass} mb-1`}>{value}</div>
    <div className="text-xs text-gray-500 mb-4">{subtitle}</div>
    <div className="bg-gray-50 rounded p-3 text-xs text-gray-700 flex-1">
      <span className="font-semibold">What the research says</span><br />
      {research}
    </div>
  </div>
);

export default InfoCard;
