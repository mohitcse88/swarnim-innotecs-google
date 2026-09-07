import React, { useState } from 'react';
import { CheckCircle2, Send, Loader2, Sparkles } from 'lucide-react';
import { submitLeadToBackend } from '../utils/leadStorage';
import { LearningMode } from '../types';

interface LeadFormProps {
  idPrefix?: string;
  source: 'home_hero' | 'home_bottom' | 'course_detail' | 'course_card' | 'colleges_schools' | 'contact_page' | 'header_modal';
  defaultCourse?: string;
  isInstitutionForm?: boolean;
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  idPrefix = 'form',
  source,
  defaultCourse = '',
  isInstitutionForm = false,
  onSuccess,
  title,
  subtitle,
  compact = false,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [courseInterest, setCourseInterest] = useState(defaultCourse);
  const [preferredMode, setPreferredMode] = useState<LearningMode | 'Any'>('Any');
  const [institutionType, setInstitutionType] = useState<'College' | 'School'>('College');
  const [institutionName, setInstitutionName] = useState('');
  const [designation, setDesignation] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage('Please fill in your name, email, and phone number.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await submitLeadToBackend({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        source,
        courseInterest: courseInterest || undefined,
        preferredMode: isInstitutionForm ? undefined : preferredMode,
        institutionType: isInstitutionForm ? institutionType : undefined,
        institutionName: isInstitutionForm ? institutionName.trim() : undefined,
        designation: isInstitutionForm ? designation.trim() : undefined,
        message: message.trim() || undefined,
      });

      if (response.success) {
        setSubmittedLeadId(response.leadId);
        if (onSuccess) onSuccess();
      }
    } catch {
      setErrorMessage('Unable to connect to lead service. Please try again or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedLeadId(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setInstitutionName('');
  };

  if (submittedLeadId) {
    return (
      <div
        id={`${idPrefix}-success-message`}
        className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 text-center animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">
          Enquiry Received Successfully!
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Thank you, <strong className="text-slate-900">{fullName}</strong>. Our senior technical counsellor will call or WhatsApp you shortly.
        </p>
        <div className="inline-block bg-white border border-emerald-200 px-4 py-2 rounded-xl text-xs font-mono text-emerald-800 font-bold mb-6 shadow-xs">
          Reference ID: {submittedLeadId}
        </div>
        <div>
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 underline cursor-pointer"
          >
            Submit another enquiry or change details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id={`${idPrefix}-lead-form`}
      onSubmit={handleSubmit}
      className={`bg-white rounded-3xl border border-slate-200 shadow-sm ${
        compact ? 'p-5 sm:p-6' : 'p-6 sm:p-8'
      }`}
    >
      {(title || subtitle) && (
        <div className="mb-5">
          {title && (
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
              <span>{title}</span>
            </h3>
          )}
          {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>}
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 p-3 text-xs bg-red-50 text-red-700 border border-red-200 rounded-xl">
          {errorMessage}
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor={`${idPrefix}-name`}
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
          >
            {isInstitutionForm ? 'Representative Name *' : 'Full Name *'}
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            required
            placeholder={isInstitutionForm ? 'e.g. Dr. Rajesh Sharma' : 'e.g. Rahul Verma'}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label
              htmlFor={`${idPrefix}-phone`}
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
            >
              Phone / WhatsApp *
            </label>
            <input
              id={`${idPrefix}-phone`}
              type="tel"
              required
              placeholder="+91 98765 XXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-email`}
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
            >
              Email Address *
            </label>
            <input
              id={`${idPrefix}-email`}
              type="email"
              required
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Specific fields for Institutional Partnership */}
        {isInstitutionForm ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label
                  htmlFor={`${idPrefix}-inst-type`}
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                >
                  I'm reaching out as: *
                </label>
                <select
                  id={`${idPrefix}-inst-type`}
                  value={institutionType}
                  onChange={(e) => setInstitutionType(e.target.value as 'College' | 'School')}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="College">College / Engineering Institute</option>
                  <option value="School">School / K-12 STEM Academy</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor={`${idPrefix}-designation`}
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                >
                  Your Designation
                </label>
                <input
                  id={`${idPrefix}-designation`}
                  type="text"
                  placeholder="e.g. HOD CSE, Principal, TPO Head"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor={`${idPrefix}-inst-name`}
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
              >
                Institution / University Name *
              </label>
              <input
                id={`${idPrefix}-inst-name`}
                type="text"
                required
                placeholder="e.g. Delhi Technical Campus / St. Xavier's International"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        ) : (
          /* Student / Course specific options */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label
                htmlFor={`${idPrefix}-course`}
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
              >
                Course Interest
              </label>
              <select
                id={`${idPrefix}-course`}
                value={courseInterest}
                onChange={(e) => setCourseInterest(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Choose a Track (or Discuss with Mentor)</option>
                <option value="Full Stack Web Development (MERN & Next.js)">Full Stack Web Dev (MERN & Next.js)</option>
                <option value="Mobile App Development (Flutter & React Native)">Mobile App Dev (Flutter & React Native)</option>
                <option value="DevOps & Cloud Engineering (Docker, K8s, AWS)">DevOps & Cloud Engineering</option>
                <option value="Cyber Security & Ethical Hacking">Cyber Security & Ethical Hacking</option>
                <option value="Data Science & Analytics with Python/SQL">Data Science & Analytics</option>
                <option value="AI & Machine Learning Bootcamp">AI & Machine Learning Bootcamp</option>
                <option value="IoT & Smart Embedded Systems">IoT & Smart Embedded Systems</option>
                <option value="Robotics Engineering & Autonomous Systems">Robotics Engineering</option>
                <option value="Programming Languages (C, C++, Java, Python, JS)">Programming Languages (C/C++/Java/Python)</option>
              </select>
            </div>

            <div>
              <label
                htmlFor={`${idPrefix}-mode`}
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
              >
                Preferred Mode
              </label>
              <select
                id={`${idPrefix}-mode`}
                value={preferredMode}
                onChange={(e) => setPreferredMode(e.target.value as LearningMode | 'Any')}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Any">Either (Online or In-person Lab)</option>
                <option value="Online">Online Live Cohort</option>
                <option value="Offline">Offline Physical Lab (Noida / Pune)</option>
                <option value="Hybrid">Hybrid (Online + Weekend Labs)</option>
              </select>
            </div>
          </div>
        )}

        {/* Message / Requirement note */}
        <div>
          <label
            htmlFor={`${idPrefix}-message`}
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
          >
            {isInstitutionForm ? 'Batch Size / Proposed Dates / Specific Needs' : 'Any specific goal or question?'}
          </label>
          <textarea
            id={`${idPrefix}-message`}
            rows={2}
            placeholder={
              isInstitutionForm
                ? 'e.g. Planning a 4-week winter workshop for 120 CS students in IoT and Fullstack.'
                : 'e.g. Looking for weekend batch or preparing for campus placements next month.'
            }
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </div>

        <button
          id={`${idPrefix}-submit-btn`}
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 active:scale-[0.99] transition-all disabled:opacity-60 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Details...</span>
            </>
          ) : (
            <>
              <span>{isInstitutionForm ? 'Request Institutional Proposal' : 'Get Free Syllabus & Fee Details'}</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-slate-400 leading-tight">
          🔒 100% privacy protected. No spam. Direct call from an academic mentor.
        </p>
      </div>
    </form>
  );
};
