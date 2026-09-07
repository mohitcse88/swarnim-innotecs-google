import { LeadSubmission } from '../types';

const LEADS_STORAGE_KEY = 'swarnim_inotecs_leads_v1';

export async function submitLeadToBackend(leadData: Omit<LeadSubmission, 'id' | 'submittedAt'>): Promise<{ success: boolean; leadId: string; message: string }> {
  // Simulate network latency for authentic feel
  await new Promise((resolve) => setTimeout(resolve, 600));

  const leadId = `SWI-${Date.now().toString().slice(-6)}`;
  const newLead: LeadSubmission = {
    ...leadData,
    id: leadId,
    submittedAt: new Date().toISOString(),
  };

  try {
    const existing = getStoredLeads();
    const updated = [newLead, ...existing];
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // ignore storage quota errors in private browsing
  }

  return {
    success: true,
    leadId,
    message: 'Thank you! Your enquiry has been received. Our academic counsellor will call you within 2 hours.',
  };
}

export function getStoredLeads(): LeadSubmission[] {
  try {
    const data = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data) as LeadSubmission[];
  } catch {
    return [];
  }
}
