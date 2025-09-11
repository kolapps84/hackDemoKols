// React functional component for a report card
// Purpose: Card displaying report info, avatar, and action button
import React from 'react';

export function ReportCard({
  title,
  author,
  updated,
  description,
  icon,
  onView,
  avatarUrl,
  savedBy,
  className = '',
}) {
  return (
    <div className={`bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col w-full relative group transition hover:shadow-lg ${className}`} style={{minWidth:0}}>
      <div className="flex items-start gap-3 mb-2">
        <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-indigo-100 to-indigo-300 rounded-lg">
          {icon || (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#E0E7FF"/><path d="M7 12h10M12 7v10" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/></svg>
          )}
        </span>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-[15px] text-gray-900 leading-tight truncate" title={title}>{title}</div>
          <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
            {author && <span className="truncate max-w-[80px]">{author}</span>}
            {updated && <span className="mx-1">•</span>}
            {updated && <span>{updated}</span>}
          </div>
        </div>
        {/* 3-dot menu icon */}
        <button className="p-1 rounded hover:bg-gray-100 text-gray-400 absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition" aria-label="More options">
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="4" r="1.2" fill="currentColor"/><circle cx="10" cy="10" r="1.2" fill="currentColor"/><circle cx="10" cy="16" r="1.2" fill="currentColor"/></svg>
        </button>
      </div>
      <div className="text-[13px] text-gray-600 min-h-[36px] mb-3 line-clamp-2">{description}</div>
      <button
        className="mt-auto bg-white border border-gray-300 rounded-lg px-4 py-2 text-[15px] font-semibold text-gray-800 hover:bg-indigo-50 hover:border-indigo-300 transition shadow-sm"
        onClick={onView}
        aria-label={`View report: ${title}`}
      >
        View report
      </button>
    </div>
  );
}
