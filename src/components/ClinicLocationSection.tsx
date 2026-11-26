import { CLINIC_INFO } from '../data/clinicData';

export function ClinicLocationSection() {
  return (
    <section className="w-full py-16 lg:py-24 px-gutter-mobile lg:px-margin bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Info & Timings */}
          <div className="lg:col-span-5 bg-surface-container rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md">
                <span className="material-symbols-outlined text-sm">pin_drop</span>
                <span>Central Udaipur Location</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface font-bold">
                Visit Udaipur Physio &amp; Healthcare
              </h3>
              <div className="space-y-3 pt-2 font-body-md text-body-md text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                    location_on
                  </span>
                  <div>
                    <strong className="text-on-surface font-semibold block">Clinic Address:</strong>
                    <span>{CLINIC_INFO.fullAddress}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                    schedule
                  </span>
                  <div>
                    <strong className="text-on-surface font-semibold block">
                      OPD Consultation Hours:
                    </strong>
                    <p>
                      <span className="font-semibold text-on-surface">Monday – Saturday:</span> 9:00
                      AM – 1:00 PM &amp; 4:30 PM – 8:30 PM
                    </p>
                    <p>
                      <span className="font-semibold text-on-surface">Sunday:</span> 10:00 AM – 1:00
                      PM (Prior Appointment Only)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">call</span>
                  <div>
                    <strong className="text-on-surface font-semibold block">
                      Direct Telephone / Emergency Line:
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
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-secondary transition-all"
                href={CLINIC_INFO.googleMapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base">directions</span>
                <span>Get Google Directions</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-surface-container-lowest text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container-high transition-all"
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base text-secondary">chat</span>
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Location Map Card */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div
              aria-label="Map of Udaipur Physio OPD near Sukhadia Circle, Udaipur"
              className="w-full h-80 lg:h-full min-h-[340px] bg-cover bg-center relative"
              role="img"
              style={{ backgroundImage: `url("${CLINIC_INFO.images.udaipurMap}")` }}
            >
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-inverse-surface/90 text-inverse-on-surface backdrop-blur-md rounded-xl p-4 shadow-lg max-w-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-full bg-secondary animate-ping" />
                  <span className="font-headline-sm text-headline-sm font-semibold text-inverse-on-surface">
                    Udaipur Physio OPD
                  </span>
                </div>
                <p className="font-label-sm text-label-sm text-surface-container-high leading-snug">
                  Easily accessible from Fatehpura, Panchwati, Saheli Nagar, and Shobhagpura 100
                  Feet Road. Dedicated parking available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
