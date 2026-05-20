export type PhotoCategory = 'wedding' | 'portrait' | 'model' | 'corporate' | 'events' | 'family' | 'products';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PhotoCategory;
  date: string;
  imageUrl: string;
  relatedImages?: string[];
  description?: string;
  featured?: boolean;
}

export interface ServiceDetail {
  id: string;
  title: string;
  category: PhotoCategory;
  description: string;
  shortDescription: string;
  bullets: string[];
  imageUrl: string;
}

export interface PricePackage {
  id: string;
  name: string;
  price: number;
  description: string;
  duration: string;
  photosCount: string;
  locationsCount: string;
  bullets: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  quote: string;
  rating?: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SkillItem {
  name: string;
  level: number; // For clean visualization (optional)
}

export interface StudioStats {
  experienceYears: number;
  projectsCompleted: number;
  happyClients: number;
  awardsWon: number;
}

export interface BookingFormInput {
  name: string;
  email: string;
  phone: string;
  serviceType: PhotoCategory;
  selectedPackage: string;
  eventDate: string;
  message: string;
  customLocation?: string;
}
