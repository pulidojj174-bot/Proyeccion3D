import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SocialLinks } from '../social-links/social-links';

@Component({
  selector: 'app-footer-brand',
  imports: [SocialLinks, NgOptimizedImage],
  templateUrl: './footer-brand.html',
  styleUrl: './footer-brand.scss'
})
export class FooterBrand {
  @Input() title: string = 'Proyección 3D S.A.S. BIC';
  @Input() description: string = '';
  @Input() logo: string = 'assets/images/logos/P3D.png'; // ✅ Agregar logo
  @Input() logoAlt: string = 'Logo Proyección 3D';
  @Input() showLogo: boolean = true;
  @Input() logoWidth: number = 60;
  @Input() logoHeight: number = 60;
}
