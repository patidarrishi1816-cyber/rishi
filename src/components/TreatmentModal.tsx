import { useEffect } from 'react';
import type { TreatmentProgram } from '../data/clinicData';

interface TreatmentModalProps {
  program: TreatmentProgram | null;
  onClose: () => void;
  onBookProgram: (painArea: string) => void;
}

export function TreatmentModal({ program, onClose, onBookProgram }: TreatmentModalProps) {
  useEffect(() => {
    if (!program) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/50 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="treatment-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-surface-container-lowest rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">{program.icon}</span>
            </div>
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                {program.category}
              </span>
              <h3
                id="treatment-modal-title"
                className="font-headline-md text-headline-md text-on-surface font-bold"
              >
                {program.title}
              </h3>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close treatment details"
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center justify-center transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {program.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {program.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-surface-container-low rounded-xl p-4 space-y-2.5">
          <h4 className="font-label-lg text-label-lg text-primary font-semibold flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">clinical_notes</span>
            4-Phase Clinical Recovery Protocol
          </h4>
          <ul className="space-y-2">
            {program.protocolSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
                <span className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-on-surface-variant">
          <div className="bg-surface-container rounded-lg p-3">
            <span className="font-label-sm text-label-sm text-primary font-semibold block">
              Session Duration
            </span>
            <span className="font-body-sm text-body-sm text-on-surface font-medium">
              {program.duration} ({program.modalitySummary})
            </span>
          </div>
          <div className="bg-surface-container rounded-lg p-3">
            <span className="font-label-sm text-label-sm text-secondary font-semibold block">
              Portable Home Visit Kit
            </span>
            <span className="font-body-sm text-body-sm text-on-surface font-medium">
              {program.homeVisitEquipment}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={() => onBookProgram(program.mappedPainArea)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-secondary transition-all"
          >
            <span className="material-symbols-outlined text-lg">calendar_month</span>
            <span>Book Consultation for This Program</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 bg-surface-container text-on-surface font-label-lg text-label-lg rounded-lg hover:bg-surface-container-high transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
