import { useEffect, useState } from 'react';
import {
  CLINIC_INFO,
  PAIN_AREA_OPTIONS,
  PAIN_DURATION_OPTIONS,
  TIME_SHIFT_OPTIONS,
} from '../data/clinicData';
import {
  buildWhatsAppBookingUrl,
  clearConfirmedBooking,
  getTomorrowDateString,
  loadConfirmedBooking,
  saveConfirmedBooking,
  validateBookingForm,
  type BookingFormInput,
  type BookingSubmission,
} from '../utils/booking';

interface BookingSectionProps {
  preselectedPainArea: string;
}

export function BookingSection({ preselectedPainArea }: BookingSectionProps) {
  const minDate = getTomorrowDateString();

  const [formState, setFormState] = useState<BookingFormInput>({
    fullName: '',
    phone: '',
    age: '',
    gender: 'Male',
    painArea: preselectedPainArea || '',
    painDuration: PAIN_DURATION_OPTIONS[0].value,
    locationType: 'Home Visit',
    appointmentDate: minDate,
    timeShift: TIME_SHIFT_OPTIONS[0].value,
    symptoms: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormInput, string>>>({});
  const [confirmedBooking, setConfirmedBooking] = useState<BookingSubmission | null>(() =>
    loadConfirmedBooking()
  );

  useEffect(() => {
    if (preselectedPainArea) {
      setFormState((prev) => ({
        ...prev,
        painArea: preselectedPainArea,
      }));
      setErrors((prev) => ({ ...prev, painArea: undefined }));
    }
  }, [preselectedPainArea]);

  const updateField = <K extends keyof BookingFormInput>(field: K, value: BookingFormInput[K]) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formState, minDate);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const submission: BookingSubmission = {
      ...formState,
      fullName: formState.fullName.trim(),
      phone: formState.phone.trim(),
      symptoms: formState.symptoms.trim(),
      id: `UPH-${Date.now().toString().slice(-6)}`,
      submittedAt: new Date().toISOString(),
    };

    saveConfirmedBooking(submission);
    setConfirmedBooking(submission);
    setErrors({});
  };

  const handleResetBooking = () => {
    clearConfirmedBooking();
    setConfirmedBooking(null);
    setFormState({
      fullName: '',
      phone: '',
      age: '',
      gender: 'Male',
      painArea: '',
      painDuration: PAIN_DURATION_OPTIONS[0].value,
      locationType: 'Home Visit',
      appointmentDate: minDate,
      timeShift: TIME_SHIFT_OPTIONS[0].value,
      symptoms: '',
    });
    setErrors({});
  };

  return (
    <section
      id="booking-section"
      className="scroll-mt-28 w-full py-16 lg:py-24 px-gutter-mobile lg:px-margin bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Context & Reassurances */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined text-sm">event_available</span>
              <span>Fast-Track Scheduling</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface font-bold tracking-tight">
              Book Your Appointment Directly with Dr. Durgesh
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Choose your preferred time, describe your pain condition, and get an instant
              confirmation. We operate on strict time slots so you never endure long hospital waiting
              rooms.
            </p>

            {/* Reassurance Badges */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5 p-3.5 bg-surface-container rounded-xl">
                <span className="material-symbols-outlined text-secondary text-2xl mt-0.5">
                  verified_user
                </span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Zero Registration Fee
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Pay only for your clinical consultation and hands-on session. No hidden clinic
                    surcharges.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-surface-container rounded-xl">
                <span className="material-symbols-outlined text-secondary text-2xl mt-0.5">
                  update
                </span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Flexible Rescheduling
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Need to modify your appointment? Call or WhatsApp anytime with zero cancellation
                    penalty.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-surface-container rounded-xl">
                <span className="material-symbols-outlined text-secondary text-2xl mt-0.5">
                  accessible
                </span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Wheelchair &amp; Senior Friendly
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Ground-level accessible clinic entrance with dedicated assistance for post-surgery
                    patients.
                  </p>
                </div>
              </div>
            </div>

            {/* Home Visit Alert */}
            <div className="p-4 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed space-y-1.5">
              <div className="flex items-center gap-2 font-headline-sm text-headline-sm font-semibold">
                <span className="material-symbols-outlined text-lg">house</span>
                <span>Home Physiotherapy Across Udaipur</span>
              </div>
              <p className="font-body-sm text-body-sm opacity-90">
                Bed-bound or post-surgery? We send qualified physiotherapists equipped with portable
                modalities right to your home in Udaipur.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-md">
            <form className="space-y-5" id="appointmentForm" noValidate onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Patient Name */}
                <div className="space-y-1.5">
                  <label
                    className="block font-label-md text-label-md text-on-surface font-semibold"
                    htmlFor="fullName"
                  >
                    Patient Full Name <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-outline text-lg">
                      person
                    </span>
                    <input
                      aria-invalid={Boolean(errors.fullName)}
                      className={`w-full pl-10 pr-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border ${
                        errors.fullName ? 'border-error' : 'border-outline-variant/50'
                      }`}
                      id="fullName"
                      placeholder="e.g. Ramesh Chandra Sharma"
                      required
                      type="text"
                      value={formState.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="font-label-sm text-label-sm text-error" role="alert">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label
                    className="block font-label-md text-label-md text-on-surface font-semibold"
                    htmlFor="phone"
                  >
                    Mobile Number (WhatsApp) <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-outline text-lg">
                      call
                    </span>
                    <input
                      aria-invalid={Boolean(errors.phone)}
                      className={`w-full pl-10 pr-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border ${
                        errors.phone ? 'border-error' : 'border-outline-variant/50'
                      }`}
                      id="phone"
                      placeholder="+91 "
                      required
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                    />
                  </div>
                  {errors.phone && (
                    <p className="font-label-sm text-label-sm text-error" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Age & Gender */}
                <div className="space-y-1.5">
                  <label
                    className="block font-label-md text-label-md text-on-surface font-semibold"
                    htmlFor="age"
                  >
                    Patient Age &amp; Gender
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      aria-invalid={Boolean(errors.age)}
                      className={`w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border ${
                        errors.age ? 'border-error' : 'border-outline-variant/50'
                      }`}
                      id="age"
                      max="100"
                      min="5"
                      placeholder="Age (e.g. 45)"
                      type="number"
                      value={formState.age}
                      onChange={(e) => updateField('age', e.target.value)}
                    />
                    <select
                      aria-label="Patient Gender"
                      className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/50"
                      id="gender"
                      value={formState.gender}
                      onChange={(e) => updateField('gender', e.target.value)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {errors.age && (
                    <p className="font-label-sm text-label-sm text-error" role="alert">
                      {errors.age}
                    </p>
                  )}
                </div>

                {/* Primary Pain Area */}
                <div className="space-y-1.5">
                  <label
                    className="block font-label-md text-label-md text-on-surface font-semibold"
                    htmlFor="painArea"
                  >
                    Primary Pain Area <span className="text-error">*</span>
                  </label>
                  <select
                    aria-invalid={Boolean(errors.painArea)}
                    className={`w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border ${
                      errors.painArea ? 'border-error' : 'border-outline-variant/50'
                    }`}
                    id="painArea"
                    required
                    value={formState.painArea}
                    onChange={(e) => updateField('painArea', e.target.value)}
                  >
                    <option disabled value="">
                      Select Symptom / Area
                    </option>
                    {PAIN_AREA_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.painArea && (
                    <p className="font-label-sm text-label-sm text-error" role="alert">
                      {errors.painArea}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Pain Duration */}
                <div className="space-y-1.5">
                  <span className="block font-label-md text-label-md text-on-surface font-semibold">
                    Pain Duration
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {PAIN_DURATION_OPTIONS.map((option) => (
                      <label key={option.value} className="cursor-pointer">
                        <input
                          checked={formState.painDuration === option.value}
                          className="peer sr-only"
                          name="painDuration"
                          type="radio"
                          value={option.value}
                          onChange={() => updateField('painDuration', option.value)}
                        />
                        <div className="p-2 rounded-lg bg-surface-container text-center font-label-sm text-label-sm peer-checked:bg-primary peer-checked:text-on-primary transition-all">
                          {option.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Consultation Location */}
                <div className="space-y-1.5">
                  <span className="block font-label-md text-label-md text-on-surface font-semibold">
                    Consultation Location
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="cursor-pointer col-span-2">
                      <input
                        checked={formState.locationType === 'Home Visit'}
                        className="peer sr-only"
                        name="locationType"
                        type="radio"
                        value="Home Visit"
                        onChange={() => updateField('locationType', 'Home Visit')}
                      />
                      <div className="p-2.5 rounded-lg bg-surface-container text-center font-label-md text-label-md peer-checked:bg-secondary peer-checked:text-on-secondary transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-base">home</span> Home Visit
                        across Udaipur (Doorstep Care)
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Date & Preferred Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    className="block font-label-md text-label-md text-on-surface font-semibold"
                    htmlFor="appointmentDate"
                  >
                    Preferred Date <span className="text-error">*</span>
                  </label>
                  <input
                    aria-invalid={Boolean(errors.appointmentDate)}
                    className={`w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border ${
                      errors.appointmentDate ? 'border-error' : 'border-outline-variant/50'
                    }`}
                    id="appointmentDate"
                    min={minDate}
                    required
                    type="date"
                    value={formState.appointmentDate}
                    onChange={(e) => updateField('appointmentDate', e.target.value)}
                  />
                  {errors.appointmentDate && (
                    <p className="font-label-sm text-label-sm text-error" role="alert">
                      {errors.appointmentDate}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <span className="block font-label-md text-label-md text-on-surface font-semibold">
                    Preferred Time Shift
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {TIME_SHIFT_OPTIONS.map((shift) => (
                      <label key={shift.value} className="cursor-pointer">
                        <input
                          checked={formState.timeShift === shift.value}
                          className="peer sr-only"
                          name="timeShift"
                          type="radio"
                          value={shift.value}
                          onChange={() => updateField('timeShift', shift.value)}
                        />
                        <div className="p-2.5 rounded-lg bg-surface-container text-center font-label-sm text-label-sm peer-checked:bg-primary-container peer-checked:text-on-primary transition-all">
                          {shift.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Brief Symptom Description */}
              <div className="space-y-1.5">
                <label
                  className="block font-label-md text-label-md text-on-surface font-semibold"
                  htmlFor="symptoms"
                >
                  Brief Description of Pain or Mobility Problem
                </label>
                <textarea
                  className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm resize-none border border-outline-variant/50"
                  id="symptoms"
                  placeholder="e.g. Sharp pain when bending forward, tingling in left leg, knee stiffness in morning..."
                  rows={2}
                  value={formState.symptoms}
                  onChange={(e) => updateField('symptoms', e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  className="w-full py-3.5 px-6 rounded-lg bg-primary-container text-on-primary font-headline-sm text-headline-sm font-semibold hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                  <span>Confirm Appointment Request</span>
                </button>
                <p className="text-center font-label-sm text-label-sm text-on-surface-variant mt-2.5">
                  Instant confirmation via WhatsApp &amp; SMS reminder will be dispatched to your
                  phone number.
                </p>
              </div>
            </form>

            {/* Interactive Confirmation Card */}
            {confirmedBooking && (
              <div
                aria-live="polite"
                className="mt-6 p-5 bg-secondary-container text-on-secondary-container rounded-xl shadow-md"
                id="bookingConfirmationCard"
              >
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-3xl shrink-0">
                    task_alt
                  </span>
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-secondary-container">
                        Consultation Request Confirmed!
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-semibold">
                        Ref: {confirmedBooking.id}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm leading-relaxed" id="confirmationDetails">
                      Thank you, <strong>{confirmedBooking.fullName}</strong>! Your request for{' '}
                      <strong>{confirmedBooking.painArea}</strong> consultation on{' '}
                      <strong>{confirmedBooking.appointmentDate}</strong> ({confirmedBooking.timeShift}
                      ) has been recorded for Dr. Durgesh. We will confirm via SMS &amp; WhatsApp
                      to <strong>{confirmedBooking.phone}</strong>.
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold hover:opacity-95 transition-opacity"
                        href={buildWhatsAppBookingUrl(
                          confirmedBooking,
                          CLINIC_INFO.whatsappNumber
                        )}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-sm">chat</span>
                        <span>Send via WhatsApp Now</span>
                      </a>
                      <a
                        className="inline-flex items-center gap-1 font-label-md text-label-md font-semibold text-secondary hover:underline"
                        href={CLINIC_INFO.phoneHref}
                      >
                        <span className="material-symbols-outlined text-sm">call</span> Urgent query?
                        Call Dr. Durgesh directly
                      </a>
                      <button
                        type="button"
                        onClick={handleResetBooking}
                        className="ml-auto font-label-sm text-label-sm text-on-secondary-container underline hover:opacity-80"
                      >
                        Book another slot
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
