import { CLINIC_INFO } from '../data/clinicData';
import type { NavSectionId } from './Header';

interface HeroSectionProps {
  onNavigate: (sectionId: NavSectionId) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <>
      {/* Top Triage Strip */}
      <section className="w-full bg-surface-container-high text-on-surface py-3 px-gutter-mobile lg:px-margin shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary shadow-sm shrink-0">
              <span className="material-symbols-outlined text-base">emergency_home</span>
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
              Dealing with acute back pain, neck stiffness, knee pain, or post-surgery mobility issues?{' '}
              <span className="text-primary font-semibold">
                Personalized Home Physiotherapy Visits Delivered Across All Localities of Udaipur.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#booking-section"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('booking-section');
              }}
              className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary bg-secondary-container px-2.5 py-1 rounded-full hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-sm">check_circle</span> Same-Day Slots Open
            </a>
            <a
              className="font-label-lg text-label-lg text-primary hover:text-secondary flex items-center gap-1 font-semibold whitespace-nowrap"
              href={CLINIC_INFO.phoneHref}
            >
              <span className="material-symbols-outlined text-base">call</span> {CLINIC_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section
        id="home"
        className="scroll-mt-28 relative w-full py-12 lg:py-20 px-gutter-mobile lg:px-margin overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface"
      >
        {/* Ambient decorative blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
          {/* Left Column: Copy & Authority */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md shadow-sm">
              <span className="material-symbols-outlined material-symbols-filled text-sm">
                medical_services
              </span>
              <span>Premier Physical Therapy &amp; Spine Rehabilitation Center</span>
            </div>

            <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface tracking-tight leading-tight">
              Restore Movement, <br className="hidden sm:inline" />
              <span className="text-primary">Reclaim Your Life</span> Pain-Free.
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Advanced Evidence-Based Physiotherapy &amp; Rehabilitation in Udaipur. Compassionate,
              personalized 1-on-1 therapeutic care led by{' '}
              <strong className="text-on-surface font-semibold">Dr. Durgesh (BPT, MPT)</strong> without
              unnecessary medications or surgery.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#booking-section"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('booking-section');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-md hover:bg-secondary transition-all transform active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">calendar_month</span>
                <span>Book Doctor Consultation</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-container-lowest text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container-high transition-all"
                href={CLINIC_INFO.phoneHref}
              >
                <span className="material-symbols-outlined text-lg text-primary">call</span>
                <span>Call Now: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6">
              <div className="bg-surface-container-lowest rounded-lg p-3.5 shadow-sm flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-lg">history_edu</span>
                  <span className="font-headline-sm text-headline-sm font-bold">05+</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  Years Clinical Excellence
                </span>
              </div>
              <div className="bg-surface-container-lowest rounded-lg p-3.5 shadow-sm flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-lg">sentiment_very_satisfied</span>
                  <span className="font-headline-sm text-headline-sm font-bold">5,000+</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  Recovered in Udaipur
                </span>
              </div>
              <div className="bg-surface-container-lowest rounded-lg p-3.5 shadow-sm flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-lg">verified</span>
                  <span className="font-headline-sm text-headline-sm font-bold">MPT</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  Spine &amp; Joint Specialist
                </span>
              </div>
              <div className="bg-surface-container-lowest rounded-lg p-3.5 shadow-sm flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-tertiary">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                  <span className="font-headline-sm text-headline-sm font-bold">Zero</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  Waiting Line Priority
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Hero Portrait Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md bg-surface-container-lowest rounded-2xl p-4 shadow-xl">
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-secondary-container/40 rounded-full blur-xl pointer-events-none" />
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-surface-container shadow-inner">
                <img
                  src={CLINIC_INFO.images.doctorPortrait}
                  alt="Dr. Durgesh (BPT, MPT)"
                  className="w-full h-full object-cover object-[center_15%]"
                />

                {/* Doctor Overlay Tag */}
                <div className="absolute bottom-3 left-3 right-3 bg-inverse-surface/85 backdrop-blur-md rounded-lg p-3 text-inverse-on-surface flex items-center justify-between shadow-lg">
                  <div>
                    <p className="font-headline-sm text-headline-sm text-inverse-on-surface font-semibold leading-tight">
                      {CLINIC_INFO.doctorName}
                    </p>
                    <p className="font-label-sm text-label-sm text-primary-fixed-dim">
                      {CLINIC_INFO.doctorCredentials}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm shrink-0">
                    <span className="material-symbols-outlined text-xs">verified</span> Certified
                  </span>
                </div>
              </div>

              {/* Bottom Micro Details */}
              <div className="mt-4 pt-3 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                  <span className="font-label-md text-label-md text-on-surface">
                    Home Visit Consultations Across Udaipur
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-primary font-medium shrink-0">
                  Doorstep Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
