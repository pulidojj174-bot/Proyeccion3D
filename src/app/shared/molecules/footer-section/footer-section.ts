import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterLink } from '../../../core/models/interfaces/FooterLink.interface';

@Component({
  selector: 'app-footer-section',
  imports: [RouterLink],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.scss'
})
export class FooterSection {
  @Input() title: string = '';
  @Input() links: FooterLink[] = [];
}
