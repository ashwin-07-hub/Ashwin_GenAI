export interface Doctor {
  id: string;
  name: string;
  title: string;
  department: string;
  departmentId: string;
  credentials: string;
  education: string;
  experienceYears: number;
  languages: string[];
  rating: number;
  reviewsCount: number;
  acceptingNewPatients: boolean;
  nextAvailable: string;
  gender: 'Female' | 'Male';
  imageUrl: string;
  bio: string;
  specialties: string[];
  location: string;
}

export interface Department {
  id: string;
  name: string;
  tagline: string;
  description: string;
  headOfDepartment: string;
  annualSurgeries: string;
  highlightTech: string;
  procedures: string[];
  floor: string;
  phoneExtension: string;
  iconName: string;
}

export interface EmergencyStatus {
  department: string;
  currentWaitMinutes: number;
  traumaLevel: string;
  occupancyPercent: number;
  availableBeds: number;
  status: 'Normal' | 'Moderate' | 'High Flow';
}

export interface TestResult {
  id: string;
  testName: string;
  date: string;
  doctor: string;
  status: 'Normal' | 'Follow-up Recommended';
  summary: string;
  department: string;
}

export interface Prescription {
  id: string;
  medicine: string;
  dosage: string;
  prescribedBy: string;
  refillsRemaining: number;
  pharmacy: string;
  expiryDate: string;
}

export const EMERGENCY_STATUSES: EmergencyStatus[] = [
  {
    department: 'Adult Level 1 Trauma Center',
    currentWaitMinutes: 9,
    traumaLevel: 'Comprehensive Level 1',
    occupancyPercent: 68,
    availableBeds: 14,
    status: 'Normal',
  },
  {
    department: 'Pediatric Emergency Department',
    currentWaitMinutes: 4,
    traumaLevel: 'Dedicated Pediatric Specialty',
    occupancyPercent: 54,
    availableBeds: 11,
    status: 'Normal',
  },
  {
    department: 'Urgent Care & Fast Track Walk-in',
    currentWaitMinutes: 12,
    traumaLevel: 'Minor Acute Care',
    occupancyPercent: 72,
    availableBeds: 8,
    status: 'Moderate',
  },
  {
    department: 'Comprehensive Stroke & Cardiac Resuscitation',
    currentWaitMinutes: 0,
    traumaLevel: 'Immediate Code STEMI / Stroke Rapid Response',
    occupancyPercent: 60,
    availableBeds: 6,
    status: 'Normal',
  },
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiovascular Institute',
    tagline: 'Nationally acclaimed heart & vascular care',
    description: 'Specialized cardiac catheterization laboratories, minimally invasive valve repair (TAVR), structural heart disease programs, and comprehensive cardiac electrophysiology.',
    headOfDepartment: 'Dr. Marcus Vance, MD, FACC',
    annualSurgeries: '3,800+ cardiac interventions annually',
    highlightTech: 'Dual-Source 256-Slice Cardiac CT & Hybrid Cath Suites',
    procedures: ['Transcatheter Aortic Valve Replacement (TAVR)', 'Coronary Angioplasty & Stenting', 'Arrhythmia Ablation', 'Heart Failure Management'],
    floor: 'Pavilion A, Floors 3–4',
    phoneExtension: 'Ext. 4100',
    iconName: 'HeartPulse',
  },
  {
    id: 'oncology',
    name: 'Comprehensive Cancer Center',
    tagline: 'Precision therapies and multidisciplinary tumor boards',
    description: 'NCI-aligned oncology center offering cutting-edge immunotherapy, targeted biologic therapies, robotic surgical oncology, and patient-centered survivorship care.',
    headOfDepartment: 'Dr. Sarah Lin-Chen, MD, PhD',
    annualSurgeries: '2,400+ targeted treatment plans',
    highlightTech: 'TrueBeam Varian Linear Accelerator & Stereotactic Radiosurgery',
    procedures: ['Targeted Immunotherapy', 'Robotic Minimally Invasive Tumor Resection', 'CAR-T Cell Therapy Support', 'Genetic Profiling & Oncology Screening'],
    floor: 'Hope Pavilion, Floors 1–3',
    phoneExtension: 'Ext. 5200',
    iconName: 'ShieldAlert',
  },
  {
    id: 'neuroscience',
    name: 'Neurological Sciences & Spine',
    tagline: 'Advanced stroke response and neurosurgical precision',
    description: '24/7 Comprehensive Stroke Center equipped with intraoperative biplane neuro-angiography, neurocritical care ICU, and functional neurosurgery for movement disorders.',
    headOfDepartment: 'Dr. David A. Sterling, MD, FAANS',
    annualSurgeries: '1,950+ cranial and spine surgeries',
    highlightTech: 'Intraoperative 3T MRI & StealthStation Neuro-Navigation',
    procedures: ['Endovascular Thrombectomy for Acute Stroke', 'Minimally Invasive Spine Decompression', 'Deep Brain Stimulation (DBS)', 'Complex Epilepsy Monitoring'],
    floor: 'Neuro Tower, 5th Floor',
    phoneExtension: 'Ext. 4800',
    iconName: 'Brain',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedic & Joint Reconstruction',
    tagline: 'Restoring mobility with robotic joint replacement',
    description: 'Comprehensive musculoskeletal care from sports medicine arthroscopy to computer-assisted hip and knee arthroplasty with rapid-recovery rehabilitation pathways.',
    headOfDepartment: 'Dr. Robert Hensley, MD, FAAOS',
    annualSurgeries: '4,200+ joint and reconstructive procedures',
    highlightTech: 'Mako Robotic-Arm Assisted Joint Replacement System',
    procedures: ['Total & Partial Robotic Knee Replacement', 'Anterior Approach Total Hip Arthroplasty', 'Rotator Cuff & Shoulder Arthroscopy', 'Spine Fusion & Disc Preservation'],
    floor: 'Sports & Mobility Center, 2nd Floor',
    phoneExtension: 'Ext. 3300',
    iconName: 'Bone',
  },
  {
    id: 'pediatrics',
    name: 'Children’s Health & Neonatal Care',
    tagline: 'Specialized, compassionate medicine tailored for infants and youth',
    description: 'Level IV Neonatal Intensive Care Unit (NICU), pediatric emergency department, pediatric subspecialty clinics, and dedicated child-life psychological specialists.',
    headOfDepartment: 'Dr. Elena Rostova, MD, FAAP',
    annualSurgeries: '1,600+ pediatric outpatient & inpatient interventions',
    highlightTech: 'Family-Integrated Single-Family NICU Suites & Pediatric ECMO',
    procedures: ['Neonatal Critical Care & Resuscitation', 'Pediatric Pulmonology & Allergy', 'Pediatric Orthopedics & Scoliosis Care', 'Well-Child Preventive Developmental Medicine'],
    floor: 'St. Claire Children’s Wing, Floors 1–2',
    phoneExtension: 'Ext. 6100',
    iconName: 'Baby',
  },
  {
    id: 'surgery',
    name: 'Institute for Robotic & Minimally Invasive Surgery',
    tagline: 'Micro-precision incisions for faster healing and reduced pain',
    description: 'State-of-the-art surgical suites featuring the latest robotic platforms for general, bariatric, urologic, thoracic, and gynecologic surgeries with same-day discharge protocols.',
    headOfDepartment: 'Dr. Jonathan Blake, MD, FACS',
    annualSurgeries: '5,500+ minimally invasive surgeries performed',
    highlightTech: 'Da Vinci Xi 4th-Gen Quad-Arm Robotic System',
    procedures: ['Robotic Hernia & Gastrointestinal Surgery', 'Robotic Prostatectomy & Partial Nephrectomy', 'Minimally Invasive Thoracic Lobectomy', 'Advanced Laparoscopic Gynecologic Surgery'],
    floor: 'Central Surgical Pavilion, 4th Floor',
    phoneExtension: 'Ext. 7200',
    iconName: 'Stethoscope',
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-sarah-lin-chen',
    name: 'Dr. Sarah Lin-Chen',
    title: 'Chief of Medical Oncology',
    department: 'Comprehensive Cancer Center',
    departmentId: 'oncology',
    credentials: 'MD, PhD (Harvard Medical School), Board Certified',
    education: 'Harvard Medical School · Dana-Farber Fellowship · Johns Hopkins Residency',
    experienceYears: 18,
    languages: ['English', 'Mandarin'],
    rating: 4.96,
    reviewsCount: 312,
    acceptingNewPatients: true,
    nextAvailable: 'Tomorrow at 10:30 AM',
    gender: 'Female',
    imageUrl: '',
    bio: 'Internationally recognized medical oncologist specializing in novel immunotherapy protocols, molecular genetics, and targeted therapies for complex oncologic cases.',
    specialties: ['Precision Immunotherapy', 'Breast Oncology', 'Thoracic Oncology', 'Biomarker Directed Therapies'],
    location: 'Hope Pavilion, Suite 320',
  },
  {
    id: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance',
    title: 'Director of Interventional Cardiology',
    department: 'Cardiovascular Institute',
    departmentId: 'cardiology',
    credentials: 'MD, FACC, FSCAI (Columbia University)',
    education: 'Columbia University Vagelos P&S · Stanford Interventional Cardiology Fellowship',
    experienceYears: 22,
    languages: ['English', 'Spanish'],
    rating: 4.98,
    reviewsCount: 448,
    acceptingNewPatients: true,
    nextAvailable: 'Thursday at 2:00 PM',
    gender: 'Male',
    imageUrl: '',
    bio: 'Pioneer in transcatheter cardiac valve therapies, complex coronary angioplasty, and preventative cardiovascular health with over two decades of clinical leadership.',
    specialties: ['TAVR & Mitral Clip Procedures', 'Coronary Stenting', 'Peripheral Arterial Disease', 'Preventative Cardiology'],
    location: 'Pavilion A, Suite 410',
  },
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova',
    title: 'Director of Neonatal & Pediatric Medicine',
    department: 'Children’s Health & Neonatal Care',
    departmentId: 'pediatrics',
    credentials: 'MD, FAAP (Johns Hopkins University)',
    education: 'Johns Hopkins School of Medicine · Children’s Hospital of Philadelphia Residency',
    experienceYears: 15,
    languages: ['English', 'Russian', 'French'],
    rating: 4.97,
    reviewsCount: 389,
    acceptingNewPatients: true,
    nextAvailable: 'Tomorrow at 1:15 PM',
    gender: 'Female',
    imageUrl: '',
    bio: 'Dedicated pediatrician and neonatologist committed to compassionate, family-centered medical care for premature newborns and developing young patients.',
    specialties: ['Neonatal Intensive Care', 'Pediatric Pulmonology', 'Childhood Developmental Health', 'Infant Nutrition'],
    location: 'Children’s Wing, Suite 105',
  },
  {
    id: 'dr-david-sterling',
    name: 'Dr. David A. Sterling',
    title: 'Chair of Neurosurgery & Spine Institute',
    department: 'Neurological Sciences & Spine',
    departmentId: 'neuroscience',
    credentials: 'MD, FAANS (UCSF School of Medicine)',
    education: 'UCSF School of Medicine · Mayo Clinic Neurosurgical Residency',
    experienceYears: 20,
    languages: ['English'],
    rating: 4.95,
    reviewsCount: 275,
    acceptingNewPatients: true,
    nextAvailable: 'Wednesday at 9:00 AM',
    gender: 'Male',
    imageUrl: '',
    bio: 'Specialist in minimally invasive spine reconstruction, cranial micro-neurosurgery, and acute stroke intervention using stereotactic intraoperative guidance.',
    specialties: ['Minimally Invasive Spine Surgery', 'Cerebrovascular Surgery', 'Brain Tumor Resection', 'Trigeminal Neuralgia'],
    location: 'Neuro Tower, Suite 502',
  },
  {
    id: 'dr-amara-okafor',
    name: 'Dr. Amara Okafor',
    title: 'Senior Obstetrician & Gynecologic Surgeon',
    department: 'Women & Infants Health',
    departmentId: 'surgery',
    credentials: 'MD, FACOG (University of Pennsylvania)',
    education: 'Perelman School of Medicine · Brigham and Women’s Hospital Residency',
    experienceYears: 14,
    languages: ['English', 'Igbo'],
    rating: 4.99,
    reviewsCount: 520,
    acceptingNewPatients: true,
    nextAvailable: 'Today at 3:45 PM',
    gender: 'Female',
    imageUrl: '',
    bio: 'Passionate about comprehensive reproductive health, high-risk maternal-fetal medicine, and minimally invasive robotic gynecologic surgery.',
    specialties: ['High-Risk Pregnancy Care', 'Minimally Invasive Hysterectomy', 'Endometriosis Management', 'Pelvic Reconstruction'],
    location: 'Women’s Health Pavilion, Suite 210',
  },
  {
    id: 'dr-robert-hensley',
    name: 'Dr. Robert Hensley',
    title: 'Chief of Adult Joint Reconstruction',
    department: 'Orthopedic & Joint Reconstruction',
    departmentId: 'orthopedics',
    credentials: 'MD, FAAOS (Northwestern University)',
    education: 'Northwestern Feinberg School of Medicine · Hospital for Special Surgery Fellowship',
    experienceYears: 19,
    languages: ['English', 'German'],
    rating: 4.94,
    reviewsCount: 360,
    acceptingNewPatients: true,
    nextAvailable: 'Friday at 11:00 AM',
    gender: 'Male',
    imageUrl: '',
    bio: 'Expert in robotic-arm assisted total knee and anterior hip replacement with an emphasis on same-day mobility and accelerated physical recovery programs.',
    specialties: ['Mako Robotic Hip & Knee Arthroplasty', 'Revision Joint Replacement', 'Sports Arthroscopy', 'Cartilage Restoration'],
    location: 'Sports & Mobility Center, Suite 204',
  },
  {
    id: 'dr-jonathan-blake',
    name: 'Dr. Jonathan Blake',
    title: 'Director of Robotic Surgical Services',
    department: 'Institute for Robotic & Minimally Invasive Surgery',
    departmentId: 'surgery',
    credentials: 'MD, FACS (Yale School of Medicine)',
    education: 'Yale School of Medicine · Cleveland Clinic Advanced Minimally Invasive Fellowship',
    experienceYears: 17,
    languages: ['English'],
    rating: 4.93,
    reviewsCount: 290,
    acceptingNewPatients: true,
    nextAvailable: 'Next Monday at 10:00 AM',
    gender: 'Male',
    imageUrl: '',
    bio: 'Master robotic surgeon proctor who has trained hundreds of surgeons worldwide on the Da Vinci platform, optimizing patient outcomes and reducing hospital stay.',
    specialties: ['Robotic Gastrointestinal Surgery', 'Robotic Hernia Repair', 'Foregut & Reflux Surgery', 'Complex Abdominal Wall'],
    location: 'Central Surgical Pavilion, Suite 401',
  },
  {
    id: 'dr-priya-patel',
    name: 'Dr. Priya Patel',
    title: 'Emergency Medicine & Trauma Specialist',
    department: 'Emergency & Urgent Care',
    departmentId: 'cardiology',
    credentials: 'MD, FACEP (Duke University School of Medicine)',
    education: 'Duke University School of Medicine · Emory University Emergency Medicine',
    experienceYears: 12,
    languages: ['English', 'Hindi', 'Gujarati'],
    rating: 4.97,
    reviewsCount: 410,
    acceptingNewPatients: true,
    nextAvailable: 'Immediate / On Duty Today',
    gender: 'Female',
    imageUrl: '',
    bio: 'Board-certified emergency physician directing rapid resuscitation protocols, acute trauma stabilization, and disaster preparedness initiatives at Meridian.',
    specialties: ['Acute Resuscitation', 'Point-of-Care Ultrasound (POCUS)', 'Mass Casualty Triage', 'Cardiovascular Emergencies'],
    location: 'Level 1 Trauma Center, Emergency Ground Floor',
  },
];

export const PATIENT_PORTAL_MOCK_RESULTS: TestResult[] = [
  {
    id: 'TR-9021',
    testName: 'Comprehensive Metabolic & Lipid Panel',
    date: 'October 2, 2026',
    doctor: 'Dr. Marcus Vance',
    status: 'Normal',
    summary: 'All electrolytes, glucose (92 mg/dL), and kidney markers within optimal clinical parameters. HDL cholesterol 58 mg/dL (excellent).',
    department: 'Cardiovascular Institute',
  },
  {
    id: 'TR-8944',
    testName: 'Contrast 3T Brain & Cervical Spine MRI',
    date: 'September 24, 2026',
    doctor: 'Dr. David A. Sterling',
    status: 'Normal',
    summary: 'No acute intracranial pathology, hemorrhage, or mass effect detected. Unremarkable cervical disc alignment with clean neural foramina.',
    department: 'Neurological Sciences',
  },
  {
    id: 'TR-8812',
    testName: 'Post-Op Knee Functional Mobility Screening',
    date: 'September 12, 2026',
    doctor: 'Dr. Robert Hensley',
    status: 'Follow-up Recommended',
    summary: 'Range of motion 0° to 125°. Quad activation strong. Recommended 2 additional physical therapy sessions for final lateral stabilization.',
    department: 'Orthopedic Reconstruction',
  },
];

export const PATIENT_PORTAL_MOCK_PRESCRIPTIONS: Prescription[] = [
  {
    id: 'RX-44109',
    medicine: 'Atorvastatin Calcium',
    dosage: '20 mg · Once daily in the evening',
    prescribedBy: 'Dr. Marcus Vance',
    refillsRemaining: 3,
    pharmacy: 'Meridian Hospital Outpatient Pharmacy (Ground Floor)',
    expiryDate: 'March 2027',
  },
  {
    id: 'RX-31902',
    medicine: 'Lisinopril',
    dosage: '10 mg · Once daily in the morning',
    prescribedBy: 'Dr. Marcus Vance',
    refillsRemaining: 2,
    pharmacy: 'Meridian Hospital Outpatient Pharmacy (Ground Floor)',
    expiryDate: 'January 2027',
  },
  {
    id: 'RX-22910',
    medicine: 'Meloxicam',
    dosage: '7.5 mg · As needed for post-activity joint inflammation',
    prescribedBy: 'Dr. Robert Hensley',
    refillsRemaining: 1,
    pharmacy: 'CVS Pharmacy #4120 - 4th Avenue Branch',
    expiryDate: 'November 2026',
  },
];

export const ACCEPTED_INSURANCES = [
  'Aetna Health (HMO/PPO/POS)',
  'Blue Cross Blue Shield (Highmark, Horizon, Empire)',
  'Cigna HealthCare & Great-West',
  'Medicare & Medicare Advantage Plans',
  'UnitedHealthcare & Oxford Health',
  'Humana ChoiceCare',
  'TRICARE & Veteran Community Care',
  'Medicaid Managed Care Plans',
  'Kaiser Permanente (Affiliate Referral Network)',
];

export const SYMPTOM_TRIAGE_GUIDE = [
  {
    category: 'Immediate Emergency (Call 911 / Go to Level 1 ER)',
    symptoms: [
      'Crushing chest pressure radiating to jaw, neck, or left arm',
      'Sudden facial droop, arm weakness, or slurred speech (Stroke / F.A.S.T.)',
      'Severe unmanageable shortness of breath or blue lips',
      'Uncontrolled arterial bleeding or major traumatic wound',
      'Sudden severe loss of consciousness or head injury with vomiting',
    ],
    recommendedSetting: 'Level 1 Trauma Emergency Department',
    estimatedWait: '0–5 Minutes (Immediate Triage)',
    actionType: 'emergency',
  },
  {
    category: 'Urgent Care (Walk-in Today)',
    symptoms: [
      'Suspected bone fractures without skin penetration',
      'Moderate cuts requiring stitches or closure',
      'Persistent high fever unresponsive to standard antipyretics',
      'Acute urinary tract infection or severe ear pain',
      'Sprains, minor burns, or sudden severe asthma flare-ups',
    ],
    recommendedSetting: 'Meridian Urgent Care & Fast Track Center',
    estimatedWait: '10–20 Minutes',
    actionType: 'urgent_care',
  },
  {
    category: 'Specialist Consultation (Schedule This Week)',
    symptoms: [
      'Chronic back, knee, or hip joint stiffness impairing mobility',
      'Second opinion for cardiac, oncology, or surgical diagnosis',
      'Ongoing gastrointestinal disturbances or acid reflux',
      'Non-emergency neurological symptoms or recurring migraines',
    ],
    recommendedSetting: 'Outpatient Specialty Clinic',
    estimatedWait: 'Next Business Day Booking',
    actionType: 'specialist',
  },
  {
    category: 'Telehealth & Virtual Care (Connect within 15 mins)',
    symptoms: [
      'Mild cold, flu, seasonal allergies, or sinus congestion',
      'Skin rash evaluation or routine medication renewals',
      'Post-procedure follow-up check-ins and lab test reviews',
      'Travel health immunizations and preventive lifestyle counseling',
    ],
    recommendedSetting: 'Meridian Virtual Care Telehealth',
    estimatedWait: 'On Demand (5–15 mins)',
    actionType: 'telehealth',
  },
];
