export type Page = 'home' | 'courses' | 'colleges-schools' | 'about' | 'contact';

export type CourseCategory =
  | 'web-dev'
  | 'app-dev'
  | 'devops'
  | 'cyber-security'
  | 'data-science'
  | 'ai-ml'
  | 'iot'
  | 'robotics'
  | 'programming-languages';

export type LearningMode = 'Online' | 'Offline' | 'Hybrid';
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export interface PracticalProject {
  title: string;
  description: string;
  techStack: string[];
  deliverable: string;
  iconName?: string;
}

export interface SyllabusModule {
  moduleNumber: number;
  title: string;
  duration: string;
  topics: string[];
  handsOnTask: string;
}

export interface CourseInstructor {
  name: string;
  role: string;
  experience: string;
  bio: string;
  avatar: string;
  credentials: string[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: CourseCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  modes: LearningMode[];
  duration: string; // e.g., "8 Weeks (60 hrs)"
  level: SkillLevel;
  batchSchedule: string;
  certification: string;
  featured?: boolean;
  practicalProjects: PracticalProject[];
  syllabus: SyllabusModule[];
  instructor: CourseInstructor;
  faqs: CourseFAQ[];
  prerequisites: string;
  whoShouldJoin: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  collegeOrCompany: string;
  avatar: string;
  courseTaken: string;
  mode: LearningMode;
  rating: number;
  quote: string;
  highlight: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  bio: string;
  avatar: string;
  skills: string[];
}

export interface LeadSubmission {
  id: string;
  submittedAt: string;
  fullName: string;
  email: string;
  phone: string;
  source: 'home_hero' | 'home_bottom' | 'course_detail' | 'course_card' | 'colleges_schools' | 'contact_page' | 'header_modal';
  courseInterest?: string;
  preferredMode?: LearningMode | 'Any';
  institutionType?: 'College' | 'School' | 'Individual';
  institutionName?: string;
  designation?: string;
  city?: string;
  message?: string;
}
