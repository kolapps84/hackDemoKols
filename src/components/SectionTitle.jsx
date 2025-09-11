// React functional component for a section title
// Purpose: Large heading for page sections
import React from 'react';

export function SectionTitle({ children }) {
  return (
    <h1 className="text-[28px] font-semibold text-gray-900 mb-1 leading-tight tracking-tight" style={{fontFamily:'Segoe UI, Arial, sans-serif'}}>{children}</h1>
  );
}
