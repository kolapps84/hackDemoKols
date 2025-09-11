// React functional component for a subtle subtitle/description
// Purpose: Subtitle or description under section titles
import React from 'react';

export function Subtitle({ children }) {
  return (
    <p className="text-[15px] text-gray-500 mb-7" style={{fontFamily:'Segoe UI, Arial, sans-serif'}}>{children}</p>
  );
}
