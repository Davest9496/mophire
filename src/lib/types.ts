export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: number;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  role: string;
  location: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  className?: string;
}

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface PageHeroProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
}

export interface CTASectionProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  variant?: "default" | "detailed";
}

export interface TestimonialsProps {
  variant?: "with-bg" | "transparent";
  backgroundImage?: string;
}

export interface ServiceDetailProps {
  title: string;
  description: string;
  image: string;
  features?: string[];
}

export interface ServicePageData {
  slug: string;
  title: string;
  description: string;
  icon: string;
  image1: string;
  image2: string;
  image3: string;
  metaDescription: string;
  ctaContent: CTASectionProps;
  features?: string[];
}
export interface ServiceFeaturesProps {
  features: string[];
  image2: string;
  image3: string;
}
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  altText: string;
}

export interface ContactMessageForm {
  fullName: string;
  email: string;
  message: string;
}

export interface QuoteForm {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type ServiceType =
  | "end-of-tenancy"
  | "housekeeping"
  | "office-commercial"
  | "";
