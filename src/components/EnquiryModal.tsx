import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledCourse?: string;
  source?: 'home_hero' | 'home_bottom' | 'course_detail' | 'course_card' | 'colleges_schools' | 'contact_page' | 'header_modal';
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  prefilledCourse,
  source = 'header_modal',
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="enquiry-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f172a]/75 backdrop-blur-sm animate-in fade-in duration-150 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="enquiry-modal-content"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in zoom-in-95 duration-150"
      >
        {/* Top Header in Bento Slate */}
        <div className="bg-[#0f172a] text-white p-6 relative border-b border-slate-800">
          <button
            id="close-enquiry-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>Fast-Track Admission & Fee Details</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {prefilledCourse ? `Enquire for ${prefilledCourse}` : 'Enquire with Swarnim Inotecs'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
            Speak directly with an active engineering mentor. Receive syllabus breakdown, batch timings, and scholarship options.
          </p>
        </div>

        {/* Modal Body with LeadForm */}
        <div className="p-4 sm:p-6 bg-[#f8fafc]">
          <LeadForm
            idPrefix="modal"
            source={source}
            defaultCourse={prefilledCourse || ''}
            onSuccess={() => {}}
            compact={true}
          />
        </div>
      </div>
    </div>
  );
};
