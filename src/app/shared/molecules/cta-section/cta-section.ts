import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

export interface CTAButton {
  label: string;
  path: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

@Component({
  selector: 'app-cta-section',
  imports: [RouterModule, ButtonModule],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CTASection {
  title = input.required<string>();
  description = input.required<string>();
  backgroundImage = input<string>();
  button = input<CTAButton>();
  highlightedWord = input<string>();
  overlay = input(true);
}
