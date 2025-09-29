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
  date: string;
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
