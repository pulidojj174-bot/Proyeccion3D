
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface AboutHeroButton {
  label: string;
  path: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface CompanyLogo {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

@Component({
  selector: 'app-section-hero',
  imports: [RouterModule],
  templateUrl: './section-hero.html',
  styleUrl: './section-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionHero {
  title = input.required<string>();
  description = input.required<string>();
  image = input.required<string>();
  imageAlt = input<string>();
  button = input<AboutHeroButton>();
  backgroundColor = input<string>('#f8fafc');
  companies = input<CompanyLogo[]>([]);
}
