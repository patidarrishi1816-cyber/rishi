import { SPECIALIZED_PROGRAMS, type TreatmentProgram } from '../data/clinicData';

interface TreatmentsSectionProps {
  onSelectProgram: (program: TreatmentProgram) => void;
  onInquireSymptom: () => void;
}

export function TreatmentsSection({
  onSelectProgram,
  onInquireSymptom,
}: TreatmentsSectionProps) {
  return (
    <section
      id="specialized-treatments"
      className="scroll-mt-28 w-full py-16 lg:py-24 px-gutter-mobile lg:px-margin bg-surface"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined text-sm">reorder</span>
              <span>Targeted Clinical Specializations</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface tracking-tight">
              Specialized Physiotherapy Programs
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every musculoskeletal injury has a unique biochemical and biomechanical footprint. We combine
              electrotherapy, mechanical traction, hands-on joint mobilization, and targeted kinetic rehab.
            </p>
          </div>
          <a
            href="#booking-section"
            onClick={(e) => {
              e.preventDefault();
              onInquireSymptom();
            }}
            className="inline-flex items-center gap-1.5 font-label-lg text-label-lg text-primary hover:text-secondary shrink-0"
          >
            <span>Inquire regarding your symptom</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALIZED_PROGRAMS.map((program) => (
            <article
              key={program.id}
              className="bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-2xl">{program.icon}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectProgram(program)}
                    aria-label={`View protocol for ${program.title}`}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary transition-colors"
                  >
                    <span>Protocol</span>
                    <span className="material-symbols-outlined text-xs">arrow_outward</span>
                  </button>
                </div>

                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    {program.category}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">
                    {program.title}
                  </h3>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {program.description}
                </p>

                <div className="pt-2">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold block mb-1.5">
                    {program.tagsLabel}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectProgram(program)}
                className="mt-6 pt-4 bg-surface-container-low -mx-6 -mb-6 px-6 py-3 rounded-b-xl flex items-center justify-between text-on-surface-variant hover:bg-surface-container transition-colors text-left"
              >
                <span className="font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span> {program.duration}
                </span>
                <span className="font-label-sm text-label-sm font-medium text-primary">
                  {program.modalitySummary}
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
