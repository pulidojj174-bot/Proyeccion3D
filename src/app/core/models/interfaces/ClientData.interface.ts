export interface ClientData {
  id: string;
  name: string;
  logo: string;
  alt: string;
  website?: string;
}

export interface ClientsSectionData {
  title: string;
  subtitle?: string;
  clients: ClientData[];
}
