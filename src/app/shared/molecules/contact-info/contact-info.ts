
import { Component, input } from '@angular/core';

export interface ContactInfoItem {
  icon: string;
  title: string;
  description: string;
  lines: string[];
}

@Component({
  selector: 'app-contact-info',
  imports: [],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss'
})
export class ContactInfo {
  title = input<string>('Contact Information');
  subtitle = input<string>('Fill out the form or reach out directly through any of the channels below.');
  contactItems = input<ContactInfoItem[]>([]);
}
