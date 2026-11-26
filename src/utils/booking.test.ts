import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getTomorrowDateString,
  validateBookingForm,
  buildWhatsAppBookingUrl,
  filterTestimonials,
  type BookingFormInput,
} from './booking';
import { PATIENT_TESTIMONIALS } from '../data/clinicData';

const baseInput: BookingFormInput = {
  fullName: 'Ramesh Chandra Sharma',
  phone: '+91 9829012345',
  age: '48',
  gender: 'Male',
  painArea: 'Lower Back & Spine',
  painDuration: 'Acute (<2 wks)',
  locationType: 'Home Visit',
  appointmentDate: '2026-11-27',
  timeShift: 'Morning (9:30 AM - 1:00 PM)',
  symptoms: 'Sharp pain when bending forward',
};

test('getTomorrowDateString computes next calendar day in YYYY-MM-DD', () => {
  const sample = new Date('2026-11-26T10:00:00Z');
  assert.equal(getTomorrowDateString(sample), '2026-11-27');

  const monthRoll = new Date('2026-11-30T10:00:00Z');
  assert.equal(getTomorrowDateString(monthRoll), '2026-12-01');
});

test('validateBookingForm passes with valid input', () => {
  const res = validateBookingForm(baseInput, '2026-11-27');
  assert.equal(res.valid, true);
  assert.deepEqual(res.errors, {});
});

test('validateBookingForm rejects missing name, short phone, missing pain area, and past date', () => {
  const invalid: BookingFormInput = {
    ...baseInput,
    fullName: 'A',
    phone: '12345',
    age: '3',
    painArea: '',
    appointmentDate: '2026-11-20',
  };
  const res = validateBookingForm(invalid, '2026-11-27');
  assert.equal(res.valid, false);
  assert.ok(res.errors.fullName);
  assert.ok(res.errors.phone);
  assert.ok(res.errors.age);
  assert.ok(res.errors.painArea);
  assert.ok(res.errors.appointmentDate);
});

test('buildWhatsAppBookingUrl encodes patient and slot metadata', () => {
  const url = buildWhatsAppBookingUrl(baseInput, '919571787210');
  assert.ok(url.startsWith('https://wa.me/919571787210?text='));
  const decoded = decodeURIComponent(url.split('text=')[1]);
  assert.ok(decoded.includes('Ramesh Chandra Sharma'));
  assert.ok(decoded.includes('Lower Back & Spine'));
  assert.ok(decoded.includes('2026-11-27'));
});

test('filterTestimonials filters accurately by category', () => {
  const all = filterTestimonials(PATIENT_TESTIMONIALS, 'All Reviews');
  assert.equal(all.length, PATIENT_TESTIMONIALS.length);

  const spine = filterTestimonials(PATIENT_TESTIMONIALS, 'Spine & Sciatica');
  assert.equal(spine.length, 1);
  assert.equal(spine[0].category, 'Spine & Sciatica');

  const homeVisit = filterTestimonials(PATIENT_TESTIMONIALS, 'Post-Surgery & Home Visit');
  assert.equal(homeVisit.length, 1);
});
