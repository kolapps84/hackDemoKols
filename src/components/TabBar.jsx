// React functional component for the tab bar
// Purpose: Tab navigation for filtering reports
import React from 'react';

const tabs = [
  { label: 'All reports', icon: 'list' },
  { label: 'My reports', icon: 'user' },
  { label: 'Shared with me', icon: 'shared' },
  { label: 'Viva Insights reports', icon: 'dropdown' },
];

export function TabBar({ onTabChange, activeTab = 0 }) {
  return (
    <div className="flex gap-2 mt-2 mb-4">
      {tabs.map((tab, idx) => (
        <button
          key={tab.label}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-[15px] font-semibold transition border shadow-sm
            ${activeTab === idx
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'}
          `}
          onClick={() => onTabChange && onTabChange(idx)}
          aria-current={activeTab === idx ? 'page' : undefined}
        >
          {/* Tab icons */}
          {tab.icon === 'list' && (
            <svg width="18" height="18" fill="none" viewBox="0 0 18 18" className="text-gray-400"><rect x="3" y="5" width="12" height="2" rx="1" fill="currentColor"/><rect x="3" y="9" width="12" height="2" rx="1" fill="currentColor"/></svg>
          )}
          {tab.icon === 'user' && (
            <svg width="18" height="18" fill="none" viewBox="0 0 18 18" className="text-gray-400"><circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 15c0-2.5 3-4 6-4s6 1.5 6 4" stroke="currentColor" strokeWidth="1.5"/></svg>
          )}
          {tab.icon === 'shared' && (
            <svg width="18" height="18" fill="none" viewBox="0 0 18 18" className="text-gray-400"><circle cx="6" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 8l3-2M8 10l3 2" stroke="currentColor" strokeWidth="1.5"/></svg>
          )}
          {tab.label}
          {tab.icon === 'dropdown' && (
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="ml-1 text-gray-400"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          )}
        </button>
      ))}
      <button className="ml-2 px-3 py-2 rounded-full bg-indigo-600 text-white text-[18px] font-bold shadow hover:bg-indigo-700 transition flex items-center justify-center" aria-label="Add new report">
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="9" y="4" width="2" height="12" rx="1" fill="currentColor"/><rect x="4" y="9" width="12" height="2" rx="1" fill="currentColor"/></svg>
      </button>
    </div>
  );
}
