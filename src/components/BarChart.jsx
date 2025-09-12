import React from "react";

/**
 * BarChart component for horizontal bar charts with multiple bars.
 * Props:
 *   - data: Array<{ label: string, value: number, max: number, color: string, bgColor: string, valueLabel?: string }>
 *   - height: number (px, default 16)
 *   - className: string
 */
const BarChart = ({ data, height = 16, className = "" }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {data.map((bar, i) => {
        const percent = Math.max(0, Math.min(100, (bar.value / bar.max) * 100));
        return (
          <div key={bar.label}>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>{bar.label}</span>
              <span>{bar.valueLabel || bar.value}</span>
            </div>
            <div className="w-full rounded-full" style={{ background: bar.bgColor, height }}>
              <div
                className="rounded-full transition-all"
                style={{
                  width: percent + "%",
                  background: bar.color,
                  height,
                  minWidth: 4,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BarChart;
