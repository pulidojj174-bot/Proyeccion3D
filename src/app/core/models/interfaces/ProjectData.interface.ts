export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  imageAlt: string;
  link: string;
  featured?: boolean;
}

export type ProjectCategory = 'all' | 'reverse-engineering' | 'fea' | 'industrial-design' | 'mechanical-design' | 'piping-engineering' | '3d-printing' | 'structural-engineering' | 'conceptual-engineering';

export interface ProjectTab {
  id: ProjectCategory;
  label: string;
  count?: number;
}

