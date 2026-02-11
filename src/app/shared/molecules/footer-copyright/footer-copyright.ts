import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterLink } from '../../../core/models/interfaces/FooterLink.interface';

@Component({
  selector: 'app-footer-copyright',
  imports: [RouterLink],
  templateUrl: './footer-copyright.html',
  styleUrl: './footer-copyright.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterCopyright {
  legalLinks = input<FooterLink[]>([]);

  currentYear = new Date().getFullYear();
}
