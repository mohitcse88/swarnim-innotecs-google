import React from 'react';
import { Clock, BarChart, ArrowRight, Hammer } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelectCourse: (course: Course) => void;
  onQuickEnquire: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onSelectCourse,
  onQuickEnquire,
}) => {
  return (
    <div
      id={`course-card-${course.id}`}
      className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group overflow-hidden"
    >
      <div className="p-6">
        {/* Badges bar */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
            {course.categoryLabel}
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {course.modes.map((mode) => (
              <span
                key={mode}
                className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                  mode === 'Offline'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : mode === 'Online'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'bg-purple-50 text-purple-700 border border-purple-200'
                }`}
              >
                {mode}
              </span>
            ))}
          </div>
        </div>

        {/* Title & Tagline */}
        <h3
          onClick={() => onSelectCourse(course)}
          className="text-lg font-extrabold text-[#0f172a] group-hover:text-blue-600 transition-colors cursor-pointer leading-snug"
        >
          {course.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
          {course.tagline}
        </p>

        {/* Quick Specs */}
        <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>{course.level}</span>
          </div>
        </div>

        {/* Prominent Practical Projects Teaser (Bento Sub-tile) */}
        <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1">
            <Hammer className="w-3.5 h-3.5 text-blue-600" />
            <span>Key Project ({course.practicalProjects.length} Lab Builds):</span>
          </div>
          <p className="text-slate-600 line-clamp-1 italic font-mono text-[11px]">
            "{course.practicalProjects[0]?.title}"
          </p>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-4 sm:px-6 bg-slate-50/80 border-t border-slate-100 flex items-center gap-2">
        <button
          id={`view-details-${course.id}`}
          onClick={() => onSelectCourse(course)}
          className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>View Syllabus</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <button
          id={`enquire-btn-${course.id}`}
          onClick={() => onQuickEnquire(course)}
          className="py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs shadow-blue-500/20 transition-colors cursor-pointer"
        >
          Enquire
        </button>
      </div>
    </div>
  );
};
