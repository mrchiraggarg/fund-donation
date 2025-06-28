export interface Campaign {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  goal: number;
  raised: number;
  donors: number;
  daysLeft: number;
  organizer: string;
  location: string;
  createdAt: string;
  featured: boolean;
  tags: string[];
}

export interface Donation {
  id: string;
  campaignId: string;
  donorName: string;
  amount: number;
  message?: string;
  date: string;
  anonymous: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  campaignId?: string;
}

export interface FilterOptions {
  category: string;
  search: string;
  sortBy: 'newest' | 'oldest' | 'mostFunded' | 'leastFunded' | 'endingSoon';
  minAmount?: number;
  maxAmount?: number;
}

export type Theme = 'light' | 'dark';