import type { PatientTestimonial } from '../data/clinicData';

export interface BookingFormInput {
  fullName: string;
  phone: string;
  age: string;
  gender: string;
  painArea: string;
  painDuration: string;
  locationType: string;
  appointmentDate: string;
  timeShift: string;
  symptoms: string;
}

export interface BookingSubmission extends BookingFormInput {
  id: string;
  submittedAt: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof BookingFormInput, string>>;
}

export type ReviewCategory =
  | 'All Reviews'
  | 'Spine & Sciatica'
  | 'Knee & Joint'
  | 'Post-Surgery & Home Visit';

const STORAGE_KEY = 'udaipur_physio_confirmed_booking_v1';

export function getTomorrowDateString(now: Date = new Date()): string {
  const tomorrow = new Date(now.getTime());
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yyyy = tomorrow.getFullYear();
  const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const dd = String(tomorrow.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function extractPhoneDigits(phone: string): string {
  return phone.replace(/\D/g, '');
}

export function validateBookingForm(
  input: BookingFormInput,
  minDate: string
): ValidationResult {
  const errors: Partial<Record<keyof BookingFormInput, string>> = {};

  if (!input.fullName.trim() || input.fullName.trim().length < 2) {
    errors.fullName = 'Please enter the patient full name (at least 2 characters).';
  }

  const digits = extractPhoneDigits(input.phone);
  if (digits.length < 10 || digits.length > 13) {
    errors.phone = 'Please enter a valid 10-digit mobile / WhatsApp number.';
  }

  if (input.age.trim() !== '') {
    const parsedAge = Number(input.age);
    if (!Number.isInteger(parsedAge) || parsedAge < 5 || parsedAge > 100) {
      errors.age = 'Age must be between 5 and 100 years.';
    }
  }

  if (!input.painArea.trim()) {
    errors.painArea = 'Please select the primary pain area.';
  }

  if (!input.appointmentDate.trim()) {
    errors.appointmentDate = 'Please select a preferred appointment date.';
  } else if (minDate && input.appointmentDate < minDate) {
    errors.appointmentDate = `Appointment date must be on or after ${minDate}.`;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildWhatsAppBookingUrl(
  booking: BookingFormInput,
  whatsappNumber: string = '919571787210'
): string {
  const lines = [
    `Hello Dr. Durgesh, I would like to confirm a Physiotherapy appointment:`,
    `Patient Name: ${booking.fullName.trim()}`,
    `Mobile: ${booking.phone.trim()}`,
    booking.age.trim() ? `Age/Gender: ${booking.age.trim()} / ${booking.gender}` : `Gender: ${booking.gender}`,
    `Pain Area: ${booking.painArea}`,
    `Duration: ${booking.painDuration}`,
    `Mode: ${booking.locationType}`,
    `Preferred Date: ${booking.appointmentDate}`,
    `Preferred Shift: ${booking.timeShift}`,
    booking.symptoms.trim() ? `Symptoms: ${booking.symptoms.trim()}` : '',
  ].filter(Boolean);

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function filterTestimonials(
  testimonials: PatientTestimonial[],
  category: ReviewCategory
): PatientTestimonial[] {
  if (category === 'All Reviews') {
    return testimonials;
  }
  return testimonials.filter((item) => item.category === category);
}

export function saveConfirmedBooking(booking: BookingSubmission): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(booking));
    }
  } catch {
    // Ignore storage quota or private-mode errors
  }
}

export function loadConfirmedBooking(): BookingSubmission | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as BookingSubmission;
      if (parsed && parsed.fullName && parsed.phone && parsed.painArea && parsed.appointmentDate) {
        return parsed;
      }
    }
  } catch {
    return null;
  }
  return null;
}

export function clearConfirmedBooking(): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Ignore
  }
}
