import { useState } from 'react';
import {
  CLINIC_INFO,
  CLINIC_METRICS,
  HOME_VISIT_LOCALITIES,
  PATIENT_TESTIMONIALS,
} from '../data/clinicData';
import { filterTestimonials, type ReviewCategory } from '../utils/booking';
import type { NavSectionId } from './Header';

interface MetricsAndReviewsSectionProps {
  onNavigate: (sectionId: NavSectionId) => void;
}

const REVIEW_CATEGORIES: ReviewCategory[] = [
  'All Reviews',
  'Spine & Sciatica',
  'Knee & Joint',
  'Post-Surgery & Home Visit',
];

export function MetricsAndReviewsSection({ onNavigate }: MetricsAndReviewsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ReviewCategory>('All Reviews');
  const filteredReviews = filterTestimonials(PATIENT_TESTIMONIALS, selectedCategory);

  return (
    <>
      {/* Clinic Metrics & Recovery Stats Banner */}
      <section className="w-full py-12 px-gutter-mobile lg:px-margin bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {CLINIC_METRICS.map((metric) => (
            <div key={metric.title} className="space-y-1">
              <p className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl font-bold tracking-tight">
                {metric.value}
              </p>
              <p className="font-label-lg text-label-lg text-primary-fixed">{metric.title}</p>
              <p className="font-label-sm text-label-sm text-primary-fixed-dim">{metric.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Patient Reviews & Home Physiotherapy Service Coverage in Udaipur */}
      <section className="w-full py-16 lg:py-24 px-gutter-mobile lg:px-margin bg-surface-container-low">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Patient Testimonials & Outcomes */}
          <div id="patient-reviews" className="scroll-mt-28 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span>Verified Patient Outcomes in Udaipur</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface font-bold tracking-tight">
                  Why Udaipur Trusts Dr. Durgesh
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Real recovery milestones from patients across Shobhagpura, Fatehpura, and Hiran
                  Magri treated with evidence-based non-surgical care.
                </p>
              </div>

              {/* Filter Chips */}
              <div
                aria-label="Filter patient reviews by condition"
                className="flex flex-wrap gap-2"
                role="group"
              >
                {REVIEW_CATEGORIES.map((category) => {
                  const active = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSelectedCategory(category)}
                      className={
                        active
                          ? 'px-3.5 py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-colors'
                          : 'px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors'
                      }
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredReviews.map((review) => (
                <article
                  key={review.id}
                  className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between gap-5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-xs">check_circle</span>
                        {review.verifiedDate}
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        {review.sessions}
                      </span>
                    </div>

                    <div className="flex items-center gap-0.5 text-tertiary-container" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined material-symbols-filled text-base"
                        >
                          star
                        </span>
                      ))}
                    </div>

                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/30 space-y-1">
                    <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {review.patientName}
                    </p>
                    <p className="font-label-sm text-label-sm text-secondary font-medium">
                      {review.condition}
                    </p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-primary">
                        location_on
                      </span>
                      {review.locality}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Home Physiotherapy Service Coverage in Udaipur */}
          <div id="home-visit-areas" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 bg-surface-container rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md">
                  <span className="material-symbols-outlined text-sm">home_health</span>
                  <span>Doorstep Clinical Care</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface font-bold">
                  Home Physiotherapy Service Coverage in Udaipur
                </h3>
                <div className="space-y-3 pt-2 font-body-md text-body-md text-on-surface-variant">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                      pin_drop
                    </span>
                    <div>
                      <strong className="text-on-surface font-semibold block">
                        Localities Covered Across Udaipur:
                      </strong>
                      <span>{HOME_VISIT_LOCALITIES.join(', ')}, and surrounding areas.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                      medical_services
                    </span>
                    <div>
                      <strong className="text-on-surface font-semibold block">
                        Portable Modalities Brought to Your Home:
                      </strong>
                      <p>
                        Equipped with portable electrotherapy (IFT, TENS), ultrasound therapy,
                        muscle stimulators, traction kits, and exercise rehab tools.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                      schedule
                    </span>
                    <div>
                      <strong className="text-on-surface font-semibold block">
                        Home Visit Timing Slots:
                      </strong>
                      <p>
                        <span className="font-semibold text-on-surface">Monday – Saturday:</span>{' '}
                        8:30 AM – 7:30 PM (Pre-booked slots)
                      </p>
                      <p>
                        <span className="font-semibold text-on-surface">Sunday:</span> 9:00 AM –
                        2:00 PM (Emergency &amp; Priority Rehab)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                      call
                    </span>
                    <div>
                      <strong className="text-on-surface font-semibold block">
                        Direct Telephone &amp; WhatsApp Booking:
                      </strong>
                      <a
                        className="text-primary font-bold hover:underline"
                        href={CLINIC_INFO.phoneHref}
                      >
                        {CLINIC_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="#booking-section"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('booking-section');
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-secondary transition-all"
                >
                  <span className="material-symbols-outlined text-base">calendar_month</span>
                  <span>Book Doorstep Visit</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-surface-container-lowest text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container-high transition-all"
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-base text-secondary">chat</span>
                  <span>WhatsApp Request</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div
                aria-label="Map showing home physiotherapy coverage across Udaipur"
                className="w-full h-80 lg:h-full min-h-[340px] bg-cover bg-center relative"
                role="img"
                style={{ backgroundImage: `url("${CLINIC_INFO.images.udaipurMap}")` }}
              >
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-inverse-surface/90 text-inverse-on-surface backdrop-blur-md rounded-xl p-4 shadow-lg max-w-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-3 h-3 rounded-full bg-secondary animate-ping" />
                    <span className="font-headline-sm text-headline-sm font-semibold text-inverse-on-surface">
                      Full Udaipur Coverage
                    </span>
                  </div>
                  <p className="font-label-sm text-label-sm text-surface-container-high leading-snug">
                    Personalized one-on-one physiotherapy delivered comfortably at your doorstep in
                    any Udaipur neighbourhood. No travel or traffic required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
