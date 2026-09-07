import React from 'react';
import { GraduationCap, BookOpen, Layers, Building2 } from 'lucide-react';
import { STATS } from '../data/contentData';

export const StatsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-blue-600" />;
      default:
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="stats-bar-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            id={`stat-bento-tile-${index}`}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                {getIcon(stat.icon)}
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                Verified
              </span>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {stat.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
