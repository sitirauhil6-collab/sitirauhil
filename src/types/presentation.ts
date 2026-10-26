export interface SlideContent {
  id: string;
  slideNumber: number;
  category: 'opening' | 'profile' | 'alumni' | 'faculty' | 'pathway' | 'exam' | 'pusiba' | 'cost' | 'life' | 'roadshow' | 'roadmap' | 'faq' | 'closing';
  title: string;
  arabicTitle?: string;
  subtitle: string;
  summary: string;
  bulletPoints: string[];
  keyHighlight?: {
    label: string;
    value: string;
    description: string;
  };
  cards?: {
    title: string;
    tag?: string;
    description: string;
    details?: string[];
  }[];
  steps?: {
    number: string;
    title: string;
    description: string;
  }[];
  speakerNotes: {
    durationMinutes: number;
    talkingPoints: string[];
    santriEmphasis: string;
    anecdoteOrTip?: string;
  };
  imagePath?: string;
}

export interface PesantrenInfo {
  id: string;
  name: string;
  location: string;
  district: string;
  island: 'Lombok' | 'Sumbawa';
  typicalCohortSize: number;
}

export interface QuizQuestion {
  id: number;
  category: 'Nahwu' | 'Shorof' | 'Tahfidz' | 'Fahmul Maqru' | 'Wawasan Wasathiyah';
  question: string;
  arabicText?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FaqItem {
  id: string;
  question: string;
  category: 'Ijazah & Muadalah' | 'Bahasa Arab' | 'Biaya & Beasiswa' | 'Santriwati' | 'Kehidupan Mesir';
  answer: string;
  sourceNote?: string;
}
