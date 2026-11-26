---
name: Serene Clinical
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf4'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dde9ff'
  surface-container-highest: '#d5e3fd'
  on-surface: '#0d1c2f'
  on-surface-variant: '#3f484c'
  inverse-surface: '#233144'
  inverse-on-surface: '#ebf1ff'
  outline: '#6f787d'
  outline-variant: '#bec8cd'
  surface-tint: '#006781'
  primary: '#005a71'
  on-primary: '#ffffff'
  primary-container: '#0e7490'
  on-primary-container: '#d3f1ff'
  inverse-primary: '#81d1f0'
  secondary: '#216963'
  on-secondary: '#ffffff'
  secondary-container: '#a8ece5'
  on-secondary-container: '#266d68'
  tertiary: '#7f4300'
  on-tertiary: '#ffffff'
  tertiary-container: '#a35700'
  on-tertiary-container: '#ffe8d9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b9eaff'
  primary-fixed-dim: '#81d1f0'
  on-primary-fixed: '#001f29'
  on-primary-fixed-variant: '#004d62'
  secondary-fixed: '#abefe8'
  secondary-fixed-dim: '#8fd3cc'
  on-secondary-fixed: '#00201e'
  on-secondary-fixed-variant: '#00504b'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f8f9ff'
  on-background: '#0d1c2f'
  surface-variant: '#d5e3fd'
typography:
  headline-xl:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-xl-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an atmosphere of clinical authority, restorative tranquility, and regional dignity for a premier physical therapy and musculoskeletal rehabilitation center. The interface balances high-precision medical competence with holistic hospitality, eliminating clinical anxiety through ordered clarity and tactile softness.

### Design Principles & Emotional Tone
- **Restorative Calm:** Surfaces feel breathable, cooling, and serene, reducing cognitive load and physical tension for patients seeking relief.
- **Empathetic Precision:** Layouts emphasize unambiguous diagnostic hierarchy, crystal-clear treatment roadmaps, and unmistakable appointment pathways.
- **Rooted Professionalism:** Modern medical ergonomics blended with warm, grounded poise that honors local community trust and multi-generational patient care.

### Aesthetic Direction
A modern minimalist framework enhanced by soft tonal surfaces, hairline precision dividers, and subtle ambient light. The UI rejects harsh stark-white clinic tropes in favor of soothing slate-tinted canvas backdrops, serene coastal and botanical teals, and purposeful coral-amber accents for time-sensitive triage and acute care bookings.

## Colors

The palette draws from deep mineral water and clinical botanicals, anchored by stable slate neutrals and a distinct, measured highlight color for urgent musculoskeletal care.

### Application Logic
- **Primary Teal (`#0E7490`):** Drives primary actions, key navigation selections, verification badges, and dominant therapeutic accents.
- **Secondary Deep Pine (`#115E59`):** Reserved for clinical headers, institutional anchors, specialty badges, and grounding contrast containers.
- **Tertiary Amber Coral (`#D97706`):** Dedicated exclusively to immediate intervention cues: same-day triage, emergency helpline callouts, and acute pain booking chips. Never used decoratively.
- **Canvas & Neutrals (`#F8FAFC`, `#F1F5F9`, `#334155`, `#0F172A`):** The default background uses cool, low-strain off-whites (`#F8FAFC`) with subtle slate-tinted card fills (`#F1F5F9` or `#FFFFFF`). Text rests in deep slate (`#0F172A` for headlines, `#334155` for high-legibility body copy).
- **Soft Mint Accent (`#CCFBF1`):** Applied as an ambient tinted background for success states, active recovery metrics, treatment milestones, and soft icon badges.

## Typography

Typography balances structural clarity and human warmth. **Outfit** lends crisp geometric sophistication to display titles, patient diagnosis summaries, and section headers without intimidating patients. **Plus Jakarta Sans** provides open letterforms, natural counters, and exceptional clarity for medical descriptions, rehabilitation schedules, and rehabilitation data tables across all viewport sizes.

## Layout & Spacing

The layout runs on a responsive 12-column fluid grid system across desktop and tablet viewports, adapting down to a 4-column system for mobile handsets.

### Layout Rules
- **Breakpoints:**
  - **Desktop (1024px+):** 12 columns, 1.5rem gutters, 2.5rem outer canvas margins. Maximum readable shell constrained to 1280px for clinical assessment flows.
  - **Tablet (640px–1023px):** 8 columns, 1rem gutters, 1.5rem margins. Stack secondary patient bio columns and horizontal slot selectors into 2-row modules.
  - **Mobile (<640px):** 4 columns, 1rem gutters, 1.25rem margins. Booking actions and critical contact bars fix to the lower viewport safe area.
- **Rhythm & Whitespace:** Generous vertical rhythm prevents visual overwhelm. Diagnostic categories, doctor profiles, and booking modules maintain ample breathing room using `space-xl` separations.

## Elevation & Depth

Visual hierarchy uses subtle atmospheric tonal separation and low-opacity ambient shadows rather than harsh drop shadows or artificial physical realism.

### Depth Strategies
- **Base Canvas:** Solid `#F8FAFC`, non-reflective.
- **Elevated Medical Cards:** Flat `#FFFFFF` fill supported by a ghost border (`1px solid #E2E8F0`) and an ambient, wide-blur shadow: `0 4px 20px -2px rgba(14, 116, 144, 0.05)`. The teal undertone keeps surfaces warm and clinical rather than muddy gray.
- **Interactive Hover & Overlay Modals:** Deepened ambient shadow: `0 12px 32px -4px rgba(15, 23, 42, 0.08)`, lifting cleanly off the screen to emphasize appointment selection dialogs, doctor credentials, and symptom trackers.
- **Floating Urgency Surfaces:** Urgent triage callouts utilize an amber-tinted boundary (`1px solid rgba(217, 119, 6, 0.25)`) coupled with a faint glow shadow: `0 4px 16px 0 rgba(217, 119, 6, 0.08)`.

## Shapes

The design system incorporates a Level 2 (`Rounded`) geometry. Standard interactive elements (buttons, inputs, select triggers) feature an 8px (`0.5rem`) border radius, while patient cards, practitioner spotlight blocks, and modal sheets carry a soft 16px (`1rem` / `rounded-lg`) curvature. Full pill radii (`9999px`) are reserved for diagnostic status chips, verified credential badges, and triage priority tags. This roundedness eliminates sharp clinical aggression while preserving architectural order.

## Components

### Buttons
- **Primary Action (Book Consultation / Confirm Treatment):** Solid `#0E7490` background, pure white text, 8px border-radius, font `label-lg`. Padding: `0.75rem 1.5rem`. Smooth hover transition to `#115E59`.
- **Secondary Action (Doctor Bio / Treatment Overview):** Pure white fill, 1px solid `#CBD5E1` border, text `#334155`. On hover: `#F1F5F9` background with `#0E7490` border.
- **Urgent Care / Acute Relief Button:** Solid `#D97706` background, white text, paired with an emergency icon indicator. Reserved for instant phone consultation or immediate triage booking.

### Chips & Badges
- **Clinical Verification Badges:** Soft mint fill (`#CCFBF1`), deep pine text (`#115E59`), fully rounded pill contour with a discreet verification checkmark icon.
- **Specialty Filter Chips:** Ghost border `#E2E8F0` on white fill; transitions to teal surface (`#0E7490`) and white text when selected.

### Cards
- **Doctor & Specialty Cards:** Surface `#FFFFFF`, 16px border-radius, 1px border `#E2E8F0`. Internal padding `space-lg`. Includes subtle top border highlight on focus/hover using `#0891B2`.
- **Symptom & Area Selection Cards:** Minimalist, icon-led layouts with low-contrast slate-50 backgrounds, changing to teal-tinted borders and soft mint backdrops upon user selection.

### Form Inputs & Date/Time Pickers
- **Text Inputs & Dropdowns:** 8px radius, white surface, 1px solid `#CBD5E1`. Placeholder `#94A3B8`. Focus state introduces a crisp 2px border `#0E7490` with zero harsh outer glow.
- **Slot Time Selectors:** Discrete grid buttons with 8px radius; disabled states use `#F1F5F9` with muted strike-through indicators; active slots feature `#0E7490` fill and white text.

### Medical Trust Elements
- **Accreditation Banners:** Horizontal full-width or inset card with muted slate typography, micro-logos of physical therapy councils, and clean divider rules (`#E2E8F0`).