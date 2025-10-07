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

export interface ServicePageData {
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  metaDescription: string;
  ctaContent: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    variant: "default" | "detailed";
  };
}
