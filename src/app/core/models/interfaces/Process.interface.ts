export interface ProcessStepData {
  id: string;
  step: number;
  title: string;
  description: string;
  featured?: boolean;
}

export interface ProcessData {
  title: string;
  subtitle: string;
  steps: ProcessStepData[];
}
