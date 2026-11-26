export interface TreatmentProgram {
  id: string;
  icon: string;
  category: string;
  title: string;
  description: string;
  tagsLabel: string;
  tags: string[];
  duration: string;
  modalitySummary: string;
  mappedPainArea: string;
  protocolSteps: string[];
  homeVisitEquipment: string;
}

export interface PatientTestimonial {
  id: string;
  patientName: string;
  locality: string;
  age: number;
  condition: string;
  category: 'Spine & Sciatica' | 'Knee & Joint' | 'Post-Surgery & Home Visit';
  sessions: string;
  quote: string;
  verifiedDate: string;
}

export const CLINIC_INFO = {
  name: 'Udaipur Physio & Healthcare',
  tagline: 'Advanced Spine & Joint Rehabilitation',
  doctorName: 'Dr. Durgesh',
  doctorCredentials: 'BPT, MPT (Musculoskeletal & Orthopedics)',
  doctorTitle: 'Chief Physiotherapist',
  phoneDisplay: '+91 9571787210',
  phoneHref: 'tel:+919571787210',
  whatsappNumber: '919571787210',
  email: 'durgeshpatidar123456789@gmail.com',
  shortLocation: 'Shobhagpura, Udaipur (Raj.)',
  fullAddress: 'Near Sukhadia Circle / Saheli Nagar Main Road, Shobhagpura, Udaipur, Rajasthan 313001',
  opdHoursTopBar: 'Mon-Sun: 9:00 AM - 8:00 PM  By Appointment',
  googleMapsUrl: 'https://maps.google.com/?q=Sukhadia+Circle+Udaipur',
  images: {
    headerLogo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjFE4eiKJadknGz5Lo0SL24K_xNgwmwz6tyYdR2CxEPp4VSJZow2MvkJyvj9NaBmGartiHaw6ccmxvYycrL6BJJrwkhlbmTkdXWWIk5Yej1kL8BHLuv6b9stiCO_STa4M1X9qUvl2B_cjW_k4CsL2Nsa0znomkrNKp5C4Ei2tga779INB5RrZ4Po5HVzMng3cEtr6hvI8UsfkcWYXt6ic5G5C7hKSefoQHibqyDtqlZzcOQTml2N1SPA',
    footerLogo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCe2A3ExLBrlsdgmIv5nLpSzxG_M1jvRfAqFzPrf-jFp6T5BVJDBMEpJvq0bAO3RPinyzUnn_5dsf46o3MKhgcVUtAgt5XhyJlhWgNkglxWRctbur0mouOMczd5TxQ2oanZm3-UdeIU1TGks4rLWCrDwKiQhvaOHYXbqYlZzP1mrjDTCFe002m6v9nKxFfQStfyJpdzmeZvlHTY6_3ZvlPlqrYPIBX4eZzhr8utBCPoU0MBdBJJMSUQxg',
    miniAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLyyYamswIFVzcleKaPJ3aA4sOv0Xl_XbdeAKfDas5URPno31wvbJa2ywbWiLIqXPgDo_zBa9fmIgd198_q1u5v_sbPIn2in0XrBYgDFmODgrtPMx9QkzeyU53NBpahd3q6ycN-7x9IwTz40SmegC6emqTpoU9H0S495bZBZStZqier0Vn-QplVJuDCmXYNMK-S8rYtRPAFXGangHn41r78wCZjsRrU5t2RGW2PdKS',
    doctorPortrait:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLyyYamswIFVzcleKaPJ3aA4sOv0Xl_XbdeAKfDas5URPno31wvbJa2ywbWiLIqXPgDo_zBa9fmIgd198_q1u5v_sbPIn2in0XrBYgDFmODgrtPMx9QkzeyU53NBpahd3q6ycN-7x9IwTz40SmegC6emqTpoU9H0S495bZBZStZqier0Vn-QplVJuDCmXYNMK-S8rYtRPAFXGangHn41r78wCZjsRrU5t2RGW2PdKS',
    udaipurMap:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBk0fzeAGkoZTO1YPdrwt2FmP-wVHb_X629qP-U9vv0WWtE1yGId215SLHa91ujfOsmmfv7vBlZabZa8NVyZ7hDzs89kDf9jyhmgwIjbq6qXTPntuSneGKZWJcp1nE84LrG0KVPTxa7Y5gtuHttA_QId1sBL1sQmDsHqmTTJKxpYLpfFtPG5cf3F2LHo8iW0iIAYioBMP0DuOilinIY5FJceoGBvwt8rdeOFfz1eJDk',
  },
};

export const SPECIALIZED_PROGRAMS: TreatmentProgram[] = [
  {
    id: 'orthopedic-spine',
    icon: 'personal_injury',
    category: 'Spine & Discs',
    title: 'Orthopedic & Spine Rehabilitation',
    description:
      'Targeted decompression and spinal posture realignment for disc prolapse, lumbar lordosis correction, radiating pain, and chronic tension.',
    tagsLabel: 'Common Conditions:',
    tags: ['Cervical Spondylosis', 'Slip Disc / PIVD', 'Sciatica Nerve', 'Lower Back Pain'],
    duration: '45-60 mins',
    modalitySummary: 'Traction + Manual Therapy',
    mappedPainArea: 'Lower Back & Spine',
    protocolSteps: [
      'Comprehensive neurological & orthopedic spinal root-cause assessment',
      'Mechanical or manual cervical/lumbar decompression to relieve nerve root pressure',
      'Maitland & Mulligan joint mobilization paired with Interferential Therapy (IFT)',
      'Core stabilization and ergonomic posture retraining to prevent recurrence',
    ],
    homeVisitEquipment: 'Portable IFT/TENS unit, cervical traction kit & lumbar stabilization bands',
  },
  {
    id: 'joint-knee',
    icon: 'accessibility_new',
    category: 'Joint Mobility',
    title: 'Joint & Knee Pain Therapy',
    description:
      'Non-surgical synovial joint rejuvenation, meniscus decompression, and quadriceps-hamstring kinematic balance restoration.',
    tagsLabel: 'Common Conditions:',
    tags: ['Knee Osteoarthritis', 'Frozen Shoulder', 'Rotator Cuff Injury', 'Patellar Tendonitis'],
    duration: '40-50 mins',
    modalitySummary: 'Laser + IFT Modality',
    mappedPainArea: 'Knee & Joint',
    protocolSteps: [
      'Gait, joint line tenderness, and range-of-motion goniometric screening',
      'Therapeutic ultrasound & deep-tissue IFT to reduce synovial inflammation',
      'Capsular stretching and pain-free joint glide mobilization',
      'Progressive closed-chain strengthening for knee & shoulder stability',
    ],
    homeVisitEquipment: 'Portable Ultrasound, IFT electrotherapy & progressive resistance bands',
  },
  {
    id: 'sports-manual',
    icon: 'sports_gymnastics',
    category: 'Sports & Athletes',
    title: 'Sports Injury & Manual Therapy',
    description:
      'Rapid muscle activation, soft tissue adhesions release, and functional movement re-patterning for fast athletic return.',
    tagsLabel: 'Therapeutic Techniques:',
    tags: ['Dry Needling', 'Myofascial Cupping', 'Kinesio Taping', 'Ligament Sprains'],
    duration: '45-60 mins',
    modalitySummary: 'Advanced Manual Protocol',
    mappedPainArea: 'Sports Injury',
    protocolSteps: [
      'Biomechanical kinetic chain screening to isolate overload patterns',
      'Trigger-point dry needling & myofascial decompression cupping',
      'Kinesio taping for dynamic joint support and swelling drainage',
      'Sport-specific agility, eccentric loading, and return-to-play drills',
    ],
    homeVisitEquipment: 'Sterile dry needling kit, myofascial cups & therapeutic Kinesio tape',
  },
  {
    id: 'neuro-rehab',
    icon: 'neurology',
    category: 'Neuro Rehabilitation',
    title: 'Neurological Physiotherapy',
    description:
      'Neuro-plasticity stimulation, balance retraining, and muscle spasticity management using PNF techniques and gait re-education.',
    tagsLabel: 'Specialized Care:',
    tags: ['Stroke / Hemiplegia', "Bell's / Facial Palsy", "Parkinson's Mobility", 'Neuropathy Gait'],
    duration: '60 mins',
    modalitySummary: 'PNF & Neuromuscular Repatterning',
    mappedPainArea: 'Stroke / Neurological',
    protocolSteps: [
      'Motor control, balance scale, and sensory-motor functional baseline check',
      'Proprioceptive Neuromuscular Facilitation (PNF) & electrical muscle stimulation',
      'Task-oriented sit-to-stand, weight-shifting, and assisted gait training',
      'Caregiver training for safe daily transfers and home mobility exercises',
    ],
    homeVisitEquipment: 'Neuromuscular Electrical Stimulator (NMES) & balance retraining aids',
  },
  {
    id: 'post-surgical',
    icon: 'healing',
    category: 'Post-Operative',
    title: 'Post-Surgical & Fracture Rehab',
    description:
      'Step-by-step phased protocol to break scar tissue, restore full range of motion, and prevent muscle atrophy following orthopedic surgery.',
    tagsLabel: 'Surgical Post-Care:',
    tags: ['Total Knee Replacement (TKR)', 'Hip Replacement (THR)', 'Post-Cast Stiffness', 'ACL Reconstruction'],
    duration: '45-60 mins',
    modalitySummary: 'Phased Range-of-Motion Plan',
    mappedPainArea: 'Post-Surgery Rehab',
    protocolSteps: [
      'Coordination with your orthopedic surgeon’s post-operative weight-bearing protocol',
      'Edema control, gentle patellar mobilization, and scar tissue release',
      'Structured flexion/extension range-of-motion milestones week by week',
      'Confidence-building stair climbing and independent walking restoration',
    ],
    homeVisitEquipment: 'Portable muscle stimulator, cryotherapy support & goniometer tracking',
  },
  {
    id: 'ergonomic-geriatric',
    icon: 'elderly',
    category: 'Active Aging & Work',
    title: 'Ergonomic & Geriatric Care',
    description:
      'Safe independence maintenance for senior family members and postural correction therapies for desk-bound corporate workers.',
    tagsLabel: 'Focus Areas:',
    tags: ['Fall Prevention Balance', 'Osteoporosis Care', 'Tech Neck / Repetitive Strain', 'Home Visit Support'],
    duration: '45 mins',
    modalitySummary: 'Custom Home & Clinic Plans',
    mappedPainArea: 'General Pain / Other',
    protocolSteps: [
      'Home fall-hazard or workstation ergonomic posture audit',
      'Gentle joint lubrication mobility and anti-stiffness stretching',
      'Low-impact bone-density and vestibular balance exercises',
      'Sustainable 10-minute daily posture & mobility routine',
    ],
    homeVisitEquipment: 'Portable TENS, posture alignment tools & senior balance training kits',
  },
];

export const PAIN_AREA_OPTIONS = [
  { value: 'Lower Back & Spine', label: 'Lower Back & Spine (Sciatica / Slip Disc)' },
  { value: 'Neck & Cervical', label: 'Neck & Cervical Spondylosis' },
  { value: 'Knee & Joint', label: 'Knee Osteoarthritis & Joint Pain' },
  { value: 'Shoulder / Frozen Shoulder', label: 'Frozen Shoulder / Rotator Cuff' },
  { value: 'Sports Injury', label: 'Sports Injury / Muscle Tear / Sprain' },
  { value: 'Post-Surgery Rehab', label: 'Post-Surgical Rehab (TKR / Hip / Fracture)' },
  { value: 'Stroke / Neurological', label: 'Stroke / Paralysis / Neurological Care' },
  { value: 'General Pain / Other', label: 'General Chronic Pain / Posture Strain' },
];

export const PAIN_DURATION_OPTIONS = [
  { value: 'Acute (<2 wks)', label: '< 2 Weeks' },
  { value: 'Sub-acute (1-3 mos)', label: '1-3 Months' },
  { value: 'Chronic (>3 mos)', label: '> 3 Months' },
];

export const TIME_SHIFT_OPTIONS = [
  { value: 'Morning (9:30 AM - 1:00 PM)', label: 'Morning (9:30 - 1:00)' },
  { value: 'Evening (4:30 PM - 8:00 PM)', label: 'Evening (4:30 - 8:00)' },
];

export const CLINIC_METRICS = [
  {
    value: '98%',
    title: 'Clinical Recovery Rate',
    subtitle: 'Measurable mobility gain in 5 sessions',
  },
  {
    value: '15+',
    title: 'Advanced Modalities',
    subtitle: 'Laser, Traction, IFT, Ultrasound, Dry Needling',
  },
  {
    value: '5,000+',
    title: 'Treated Patients',
    subtitle: 'Serving Lake City Udaipur and Mewar',
  },
  {
    value: '100%',
    title: 'Non-Invasive Protocols',
    subtitle: 'Zero unnecessary injection dependency',
  },
];

export const PATIENT_TESTIMONIALS: PatientTestimonial[] = [
  {
    id: 'rev-1',
    patientName: 'Rajendra Singh Rathore',
    locality: 'Hiran Magri Sector 4, Udaipur',
    age: 52,
    condition: 'L4-L5 Slip Disc & Sciatica',
    category: 'Spine & Sciatica',
    sessions: '10 Sessions',
    quote:
      'I could barely walk ten steps due to shooting sciatica pain down my left leg. Dr. Durgesh treated me at home with IFT and lumbar decompression—within two weeks I returned to my morning walks without surgery.',
    verifiedDate: 'Recovered Patient',
  },
  {
    id: 'rev-2',
    patientName: 'Sunita Devi Kothari',
    locality: 'Fatehpura, Udaipur',
    age: 64,
    condition: 'Total Knee Replacement (TKR) Rehab',
    category: 'Post-Surgery & Home Visit',
    sessions: '15 Home Visits',
    quote:
      'After my knee replacement surgery, travelling to a clinic was impossible. Dr. Durgesh brought all rehabilitation modalities to our home in Fatehpura and helped me achieve 120-degree knee bending smoothly.',
    verifiedDate: 'Home Visit Rehab',
  },
  {
    id: 'rev-3',
    patientName: 'Ankit Maheshwari',
    locality: 'Shobhagpura, Udaipur',
    age: 34,
    condition: 'Cervical Spondylosis & Frozen Shoulder',
    category: 'Knee & Joint',
    sessions: '7 Sessions',
    quote:
      'Long IT work hours left my neck and right shoulder completely stiff. One-on-one manual mobilization, dry needling, and ergonomic posture coaching cleared the pain completely.',
    verifiedDate: 'Verified Outcome',
  },
];

export const HOME_VISIT_LOCALITIES = [
  'Sukhadia Circle',
  'Fatehpura',
  'Panchwati',
  'Saheli Nagar',
  'Hiran Magri (Sectors 3–14)',
  'Shobhagpura',
  'Bhuwana',
  'Madhuban',
];
