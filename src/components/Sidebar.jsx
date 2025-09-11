// React functional component for the sidebar navigation
// Purpose: Vertical navigation with sections and icons
import React from 'react';

const navItems = [
  { label: 'Copilot dashboard', icon: 'dashboard', active: false },
  { label: 'Reports', icon: 'reports', active: true },
];

const settingsItems = [
  { label: 'Delegation', icon: 'delegation' },
];

const resourcesItems = [
  { label: 'Contact admin', icon: 'contact' },
];



export function Sidebar() {
  return (
    <aside className="w-64 bg-[#f7f7f8] border-r border-gray-200 h-full min-h-screen flex flex-col px-2 pt-4 pb-6 shadow-sm">
      <nav className="flex-1 flex flex-col">
        <ul className="space-y-1 mb-7">
          {navItems.map((item) => (
            <li key={item.label}>
              <button className={`w-full flex items-center gap-3 text-left px-4 py-2 rounded-lg group relative
                ${item.active
                  ? 'bg-white font-semibold text-gray-900 shadow-sm before:absolute before:-left-2 before:top-1 before:bottom-1 before:w-1 before:rounded-full before:bg-indigo-600'
                  : 'text-gray-700 hover:bg-gray-100'}
                text-[16px] transition`}
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  {item.icon === 'dashboard' && (
                    <svg width="22" height="22" fill="none" viewBox="0 0 22 22" className="text-gray-400"><rect x="3" y="3" width="6" height="6" rx="2" fill="currentColor"/><rect x="13" y="3" width="6" height="4" rx="2" fill="currentColor"/><rect x="3" y="13" width="4" height="6" rx="2" fill="currentColor"/><rect x="9" y="13" width="10" height="6" rx="2" fill="currentColor"/></svg>
                  )}
                  {item.icon === 'reports' && (
                    <svg width="22" height="22" fill="none" viewBox="0 0 22 22" className={item.active ? 'text-indigo-600' : 'text-gray-400'}><rect x="4" y="4" width="14" height="14" rx="3" fill="currentColor"/><rect x="7" y="7" width="8" height="2" rx="1" fill="#fff"/><rect x="7" y="11" width="5" height="2" rx="1" fill="#fff"/></svg>
                  )}
                </span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mb-2 px-4 text-xs font-semibold text-gray-400 tracking-wide">Settings</div>
        <ul className="mb-7">
          {settingsItems.map((item) => (
            <li key={item.label}>
              <button className="w-full flex items-center gap-3 text-left px-4 py-2 rounded-lg text-[16px] text-gray-700 hover:bg-gray-100 transition">
                <span className="w-6 h-6 flex items-center justify-center">
                  {/* Delegation icon */}
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22" className="text-gray-400"><circle cx="7" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="15" cy="7" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="15" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="M10 10l3-2M10 12l3 2" stroke="currentColor" strokeWidth="1.5"/></svg>
                </span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mb-2 px-4 text-xs font-semibold text-gray-400 tracking-wide">Resources</div>
        <ul>
          {resourcesItems.map((item) => (
            <li key={item.label}>
              <button className="w-full flex items-center gap-3 text-left px-4 py-2 rounded-lg text-[16px] text-gray-700 hover:bg-gray-100 transition">
                <span className="w-6 h-6 flex items-center justify-center">
                  {/* Contact admin icon */}
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22" className="text-gray-400"><rect x="3" y="5" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5"/></svg>
                </span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
