
export type ThemeType = 'mobile' | 'wedding' | 'travel' | 'developer' | 'bakery';

export interface SocialLink {
  id: string;
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube' | 'website' | 'whatsapp';
  url: string;
}

export interface ContactButton {
  id: string;
  type: 'phone' | 'email' | 'whatsapp' | 'link' | 'map';
  label: string;
  value: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatarUrl?: string;
}

export interface BusinessHour {
  day: string;
  open: string;
  close: string;
  isClosed: boolean;
}

export interface AppSection {
  enabled: boolean;
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  iconUrl: string;
  installPwa: boolean;
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatarUrl: string;
}

export interface GoogleReviewsSection {
  enabled: boolean;
  businessUrl: string;
  reviews: GoogleReview[];
}

export interface SiteData {
  theme: ThemeType;
  profile: {
    name: string;
    title: string;
    location: string;
    avatarUrl: string;
    bannerUrl: string;
    bio: string;
  };
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  socials: SocialLink[];
  buttons: ContactButton[];
  services: ServiceItem[];
  testimonials: Testimonial[];
  gallery: string[];
  hours: BusinessHour[];
  appSection: AppSection;
  googleReviews: GoogleReviewsSection;
  settings: {
    showFloatingButton: boolean;
    showQrCode: boolean;
    allowSaveContact: boolean;
  };
}
