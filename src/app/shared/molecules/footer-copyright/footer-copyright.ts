import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterLink } from '../../../core/models/interfaces/FooterLink.interface';

@Component({
  selector: 'app-footer-copyright',
  imports: [RouterLink],
  templateUrl: './footer-copyright.html',
  styleUrl: './footer-copyright.scss'
})
export class FooterCopyright {
  @Input() legalLinks: FooterLink[] = [];

  currentYear = new Date().getFullYear();
}
