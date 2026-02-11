import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterLink } from '../../../core/models/interfaces/FooterLink.interface';

@Component({
  selector: 'app-footer-section',
  imports: [RouterLink],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterSection {
  title = input('');
  links = input<FooterLink[]>([]);
}
