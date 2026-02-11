
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface AboutHeroButton {
  label: string;
  path: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

@Component({
  selector: 'app-section-hero',
  imports: [RouterModule],
  templateUrl: './section-hero.html',
  styleUrl: './section-hero.scss'
})
export class SectionHero {
  title = input.required<string>();
  description = input.required<string>();
  image = input.required<string>();
  imageAlt = input<string>();
  button = input<AboutHeroButton>();
  backgroundColor = input<string>('#f8fafc');
}
