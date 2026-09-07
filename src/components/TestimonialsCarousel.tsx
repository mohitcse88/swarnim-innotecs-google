import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/contentData';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <div
      id="testimonials-carousel-container"
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-[#f8fafc] rounded-3xl border border-slate-200 p-6 sm:p-10 md:p-12 relative overflow-hidden transition-all">
        {/* Subtle decorative quote */}
        <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 text-blue-500/10 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center">
          {/* Student Profile Bento Tile */}
          <div className="flex items-center md:flex-col md:items-center text-left md:text-center shrink-0 gap-4">
            <div className="relative">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-blue-600 shadow-xs"
              />
              <span className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-1 shadow">
                <CheckCircle className="w-3 h-3" />
              </span>
            </div>
            <div>
              <h4 className="font-bold text-[#0f172a] text-base sm:text-lg leading-tight">
                {current.name}
              </h4>
              <p className="text-xs font-semibold text-blue-600 mt-0.5">
                {current.role}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {current.collegeOrCompany}
              </p>
              <div className="mt-2 flex items-center gap-1 md:justify-center">
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                  {current.mode} Cohort
                </span>
              </div>
            </div>
          </div>

          {/* Quote Body */}
          <div className="flex-1 space-y-3.5">
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-slate-500">
                Course: <span className="text-[#0f172a]">{current.courseTaken}</span>
              </span>
            </div>

            <h5 className="text-base sm:text-lg font-extrabold text-[#0f172a] leading-snug">
              "{current.highlight}"
            </h5>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic">
              "{current.quote}"
            </p>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                id={`carousel-dot-${idx}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-blue-600'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              id="carousel-prev-btn"
              onClick={handlePrev}
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer shadow-2xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="carousel-next-btn"
              onClick={handleNext}
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer shadow-2xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
