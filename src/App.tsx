import { useCallback, useEffect, useState } from 'react';
import { BookingSection } from './components/BookingSection';
import { ClinicLocationSection } from './components/ClinicLocationSection';
import { DoctorProfileSection } from './components/DoctorProfileSection';
import { Footer } from './components/Footer';
import { Header, type NavSectionId } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MetricsAndReviewsSection } from './components/MetricsAndReviewsSection';
import { TreatmentModal } from './components/TreatmentModal';
import { TreatmentsSection } from './components/TreatmentsSection';
import type { TreatmentProgram } from './data/clinicData';

const TRACKED_SECTIONS: NavSectionId[] = [
  'home',
  'specialized-treatments',
  'dr-durgesh-profile',
  'booking-section',
  'patient-reviews',
  'home-visit-areas',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSectionId>('home');
  const [selectedProgram, setSelectedProgram] = useState<TreatmentProgram | null>(null);
  const [preselectedPainArea, setPreselectedPainArea] = useState<string>('');

  const handleNavigate = useCallback((sectionId: NavSectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleBookFromModalOrGuide = useCallback(
    (painArea: string) => {
      setSelectedProgram(null);
      setPreselectedPainArea(painArea);
      handleNavigate('booking-section');
    },
    [handleNavigate]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id as NavSectionId;
            if (TRACKED_SECTIONS.includes(id)) {
              setActiveSection(id);
            }
          }
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0.05,
      }
    );

    for (const id of TRACKED_SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="w-full bg-background min-h-screen pt-[108px]">
        <div className="flex flex-col w-full">
          <HeroSection onNavigate={handleNavigate} />

          <TreatmentsSection
            onInquireSymptom={() => handleNavigate('booking-section')}
            onSelectProgram={setSelectedProgram}
          />

          <DoctorProfileSection />

          <BookingSection preselectedPainArea={preselectedPainArea} />

          <MetricsAndReviewsSection onNavigate={handleNavigate} />

          <ClinicLocationSection />
        </div>
      </main>

      <Footer
        onNavigate={handleNavigate}
        onSelectPainGuide={handleBookFromModalOrGuide}
      />

      <TreatmentModal
        program={selectedProgram}
        onBookProgram={handleBookFromModalOrGuide}
        onClose={() => setSelectedProgram(null)}
      />
    </div>
  );
}
