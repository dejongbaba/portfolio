export type ThemeMode = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  image: string;
  description?: string;
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

export interface NavLink {
  id: string;
  title: string;
  path: string;
}
 