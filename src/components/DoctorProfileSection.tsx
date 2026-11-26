import { CLINIC_INFO } from '../data/clinicData';

export function DoctorProfileSection() {
  return (
    <section
      id="dr-durgesh-profile"
      className="scroll-mt-28 w-full py-16 lg:py-24 px-gutter-mobile lg:px-margin bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-md">
                <img
                  alt="Dr. Durgesh Physiotherapist Udaipur"
                  className="w-full h-full object-cover object-[center_15%]"
                  src={CLINIC_INFO.images.doctorPortrait}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="px-3 py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded-full shadow-sm">
                    Chief Musculoskeletal Consultant
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2 w-full max-w-xs">
                <a
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-secondary transition-all shadow-sm"
                  href={CLINIC_INFO.phoneHref}
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  <span>Direct Call: {CLINIC_INFO.phoneDisplay}</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary-container text-on-secondary-container rounded-lg font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-all"
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>WhatsApp Instant Consult</span>
                </a>
              </div>
            </div>

            {/* Doctor Info Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                    Lead Practitioner
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Udaipur Physio and Healthcare
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface font-bold tracking-tight">
                  {CLINIC_INFO.doctorName}
                </h2>
                <p className="font-headline-sm text-headline-sm text-primary font-medium">
                  BPT, MPT (Master of Physiotherapy - Orthopedics &amp; Spine)
                </p>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                A seasoned physiotherapist with extensive clinical expertise across musculoskeletal
                rehabilitation, neuro-rehab, and advanced manual therapy techniques. Practicing in
                Udaipur to deliver holistic, patient-centered healing without unnecessary medications,
                prolonged rest, or invasive procedures. Dr. Durgesh has guided thousands of corporate
                executives, sports athletes, housewives, and senior citizens back to active, painless
                movement.
              </p>

              {/* Qualifications & Clinical Philosophy Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-surface-container rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-primary font-semibold font-label-lg text-label-lg">
                    <span className="material-symbols-outlined text-lg">school</span>
                    <span>Academic Qualifications</span>
                  </div>
                  <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-secondary">check</span>
                      <span>Bachelor of Physiotherapy (BPT)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-secondary">check</span>
                      <span>Master of Physiotherapy (MPT - Ortho)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-secondary">check</span>
                      <span>Certified Dry Needling &amp; Taping Specialist</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-surface-container rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-primary font-semibold font-label-lg text-label-lg">
                    <span className="material-symbols-outlined text-lg">psychology</span>
                    <span>Clinical Philosophy</span>
                  </div>
                  <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-secondary">check</span>
                      <span>Precise root-cause functional evaluation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-secondary">check</span>
                      <span>Individualized 1-on-1 therapeutic attention</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-secondary">check</span>
                      <span>Hands-on mobilization + preventive habits</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact info row */}
              <div className="pt-2 flex flex-wrap items-center gap-6 font-body-sm text-body-sm text-on-surface-variant">
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-base text-primary">phone</span>
                  <span>{CLINIC_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors break-all"
                >
                  <span className="material-symbols-outlined text-base text-primary">mail</span>
                  <span>{CLINIC_INFO.email}</span>
                </a>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-primary">location_on</span>
                  <span>Udaipur (Rajasthan)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
