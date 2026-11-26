import { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';

export type NavSectionId =
  | 'home'
  | 'specialized-treatments'
  | 'dr-durgesh-profile'
  | 'patient-reviews'
  | 'home-visit-areas'
  | 'booking-section';

interface HeaderProps {
  activeSection: NavSectionId;
  onNavigate: (sectionId: NavSectionId) => void;
}

const NAV_ITEMS: { id: NavSectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'specialized-treatments', label: 'Specialized Treatments' },
  { id: 'dr-durgesh-profile', label: 'Dr. Durgesh Profile' },
  { id: 'patient-reviews', label: 'Patient Reviews' },
  { id: 'home-visit-areas', label: 'Home Visit Areas' },
];

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (sectionId: NavSectionId) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top Utility Bar */}
      <div className="bg-primary text-on-primary py-1.5 sm:py-space-xs px-gutter-mobile lg:px-margin text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-space-md min-w-0">
            <span className="flex items-center gap-1 font-label-md text-[11px] sm:text-label-md whitespace-nowrap">
              <span className="material-symbols-outlined text-sm leading-none">location_on</span>
              {CLINIC_INFO.shortLocation}
            </span>
            <span className="hidden md:inline text-primary-fixed-dim">|</span>
            <span className="hidden md:flex items-center gap-1 font-label-md text-label-md whitespace-nowrap">
              <span className="material-symbols-outlined text-sm leading-none">schedule</span>
              {CLINIC_INFO.opdHoursTopBar}
            </span>
          </div>
          <div className="flex items-center gap-space-md shrink-0">
            <a
              className="flex items-center gap-1 font-label-md text-[11px] sm:text-label-md text-primary-fixed hover:text-on-primary transition-colors whitespace-nowrap"
              href={CLINIC_INFO.phoneHref}
            >
              <span className="material-symbols-outlined text-sm leading-none">call</span>
              <span className="hidden sm:inline">Urgent Helpline:</span>
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="h-20 max-w-7xl mx-auto px-gutter-mobile lg:px-margin flex items-center justify-between gap-3">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex items-center gap-2.5 sm:gap-3 shrink-0"
        >
          <img
            alt="Udaipur Physio and Healthcare Logo"
            className="w-auto object-contain h-10 sm:h-12 shrink-0"
            src={CLINIC_INFO.images.headerLogo}
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-[15px] sm:text-[18px] text-primary font-semibold tracking-tight leading-tight whitespace-nowrap">
              {CLINIC_INFO.name}
            </span>
            <span className="font-label-sm text-[9px] sm:text-[10px] text-on-surface-variant tracking-wider uppercase whitespace-nowrap">
              {CLINIC_INFO.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={
                  isActive
                    ? 'px-3 py-2 transition-colors bg-primary-container text-on-primary font-label-lg text-[13px] 2xl:text-label-lg rounded-lg whitespace-nowrap'
                    : 'px-3 py-2 font-label-lg text-[13px] 2xl:text-label-lg text-on-surface-variant hover:text-on-surface transition-colors rounded-lg whitespace-nowrap'
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#booking-section"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('booking-section');
            }}
            className="hidden sm:inline-flex items-center justify-center px-3.5 py-2.5 bg-primary-container text-on-primary font-label-lg text-[13px] 2xl:text-label-lg rounded-lg shadow-sm hover:bg-secondary transition-all whitespace-nowrap"
          >
            Book Appointment
          </a>
          <div className="hidden sm:flex items-center gap-2 pl-1">
            <img
              alt="Dr. Durgesh"
              className="w-10 h-10 rounded-full object-cover object-[center_15%] shrink-0 border border-outline-variant/40"
              src={CLINIC_INFO.images.miniAvatar}
            />
            <div className="hidden lg:flex flex-col text-left">
              <span className="font-label-md text-label-md text-on-surface leading-tight whitespace-nowrap">
                {CLINIC_INFO.doctorName}
              </span>
              <span className="font-label-sm text-label-sm text-secondary leading-none whitespace-nowrap">
                {CLINIC_INFO.doctorTitle}
              </span>
            </div>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="xl:hidden bg-surface-container-lowest border-t border-outline-variant/30 px-gutter-mobile lg:px-margin py-4 shadow-lg"
        >
          <div className="max-w-7xl mx-auto flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className={
                    isActive
                      ? 'px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg'
                      : 'px-4 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-lg text-label-lg transition-colors'
                  }
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#booking-section"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('booking-section');
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-secondary transition-all"
            >
              <span className="material-symbols-outlined text-base">calendar_month</span>
              <span>Book Appointment</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
