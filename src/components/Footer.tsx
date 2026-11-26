import { CLINIC_INFO } from '../data/clinicData';
import type { NavSectionId } from './Header';

interface FooterProps {
  onNavigate: (sectionId: NavSectionId) => void;
  onSelectPainGuide: (painArea: string) => void;
}

const PAIN_GUIDES = [
  { label: 'Chronic Lower Back Pain', painArea: 'Lower Back & Spine' },
  { label: 'Cervical Spondylosis & Neck Stiffness', painArea: 'Neck & Cervical' },
  { label: 'Knee Osteoarthritis Rehabilitation', painArea: 'Knee & Joint' },
  { label: 'Sciatica Nerve Relief Therapy', painArea: 'Lower Back & Spine' },
  { label: 'Post-Fracture Joint Mobilization', painArea: 'Post-Surgery Rehab' },
];

export function Footer({ onNavigate, onSelectPainGuide }: FooterProps) {
  return (
    <>
      <footer className="w-full bg-surface-container-low mt-space-xl pb-24 xl:pb-0">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
            {/* Brand Column */}
            <div className="space-y-space-md">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 p-1.5 bg-surface-container-lowest rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-outline-variant/30">
                  <img
                    alt="Udaipur Physio and Healthcare Logo"
                    className="w-full h-full object-contain"
                    src={CLINIC_INFO.images.footerLogo}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight leading-tight">
                    {CLINIC_INFO.name}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Advanced Rehabilitation Clinic
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Leading physiotherapy and musculoskeletal rehabilitation center serving Udaipur with
                evidence-based physical therapy, spine decompression, post-surgical recovery, and
                sports biomechanics.
              </p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full">
                  <span className="material-symbols-outlined text-xs leading-none">verified</span>
                  Certified PT Council
                </span>
              </div>
            </div>

            {/* Pain & Symptom Guides */}
            <div className="space-y-space-md">
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Pain &amp; Symptom Guides
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
                {PAIN_GUIDES.map((guide) => (
                  <li key={guide.label}>
                    <a
                      href="#booking-section"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectPainGuide(guide.painArea);
                      }}
                      className="hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm leading-none">
                        arrow_right
                      </span>
                      {guide.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links & Timings */}
            <div className="space-y-space-md">
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Quick Links &amp; Timings
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a
                    href="#dr-durgesh-profile"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('dr-durgesh-profile');
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    Meet Dr. Durgesh
                  </a>
                </li>
                <li>
                  <a
                    href="#patient-reviews"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('patient-reviews');
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    Patient Testimonials &amp; Outcomes
                  </a>
                </li>
                <li>
                  <a
                    href="#home-visit-areas"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('home-visit-areas');
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    Home Visit Service Coverage
                  </a>
                </li>
                <li>
                  <a
                    href="#booking-section"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('booking-section');
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    Online Appointment Scheduling
                  </a>
                </li>
              </ul>
              <div className="pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <p className="font-label-lg text-label-lg text-on-surface">OPD Hours:</p>
                <p>Mon - Sat: 9:00 AM – 8:00 PM</p>
                <p>Sunday: By Prior Appointment</p>
              </div>
            </div>

            {/* Home Visit Service Areas */}
            <div className="space-y-space-md">
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Home Visit Service Areas
              </h4>
              <div className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <p className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-base leading-none text-primary mt-0.5">
                    home_pin
                  </span>
                  <span>
                    Doorstep physiotherapy visits across Sukhadia Circle, Fatehpura, Panchwati,
                    Hiran Magri, Shobhagpura, Bhuwana &amp; all Udaipur localities.
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base leading-none text-primary">
                    phone_in_talk
                  </span>
                  <a
                    className="hover:text-primary font-label-lg text-label-lg text-on-surface"
                    href={CLINIC_INFO.phoneHref}
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </p>
              </div>
              <div className="pt-space-xs flex flex-col gap-space-sm">
                <a
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary text-on-secondary font-label-lg text-label-lg rounded-lg hover:bg-secondary-container hover:text-on-secondary-container transition-all"
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-base leading-none">chat</span>
                  WhatsApp Home Booking
                </a>
                <a
                  href="#booking-section"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('booking-section');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-tertiary-container text-on-tertiary font-label-lg text-label-lg rounded-lg hover:opacity-95 transition-all"
                >
                  <span className="material-symbols-outlined text-base leading-none">
                    calendar_month
                  </span>
                  Request Doorstep Slot
                </a>
              </div>
            </div>
          </div>

          <div className="mt-space-xl pt-space-lg text-center font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant/20">
            <p>
              © 2025 Udaipur Physio and Healthcare Clinic. Dr. Durgesh. All rights reserved. Trusted
              clinical physiotherapy across Lake City Udaipur.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Quick Action Bar */}
      <div className="xl:hidden fixed bottom-4 left-4 right-4 z-40 bg-inverse-surface text-inverse-on-surface rounded-xl p-3 shadow-2xl flex items-center justify-between gap-3">
        <a
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg font-semibold shadow-sm"
          href={CLINIC_INFO.phoneHref}
        >
          <span className="material-symbols-outlined text-base text-primary">call</span> Call Dr.
          Durgesh
        </a>
        <a
          href="#booking-section"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('booking-section');
          }}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-primary text-on-primary font-label-md text-label-md rounded-lg font-semibold shadow-sm"
        >
          <span className="material-symbols-outlined text-base">calendar_month</span> Book Slot
        </a>
      </div>
    </>
  );
}
