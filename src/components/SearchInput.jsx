// React functional component for a search input
// Purpose: Search bar for filtering reports by name
import React from 'react';

export function SearchInput({ value, onChange, placeholder = 'Search report by name...' }) {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white w-full max-w-xs shadow-sm">
      <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2"/></svg>
      <input
        type="text"
        className="w-full outline-none bg-transparent text-[15px] text-gray-700 placeholder-gray-400"
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        style={{fontFamily:'Segoe UI, Arial, sans-serif'}}
      />
    </div>
  );
}
