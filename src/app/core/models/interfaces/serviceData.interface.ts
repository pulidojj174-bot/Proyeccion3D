export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
  features: string[];
  imagePosition?: 'left' | 'right';
  featured?: boolean;
}
