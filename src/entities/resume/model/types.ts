export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  focus: string;
}

export interface WorkPreferences {
  location: string;
  format: string;
  timezone: string;
}

export interface Education {
  institution: string;
  institutionShort: string;
  institutionType: string;
  specialty: string;
  specialtyCode: string;
  specialtyDescription: string;
  degree: string;
  degreeBadge: string;
  graduationYear: string;
  status: string;
  faculty: string;
}

export interface Language {
  name: string;
  level: string;
  description: string;
}

export interface Course {
  title: string;
  organization: string;
  certificateUrl: string;
}
