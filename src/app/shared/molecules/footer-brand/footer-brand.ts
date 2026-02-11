import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SocialLinks } from '../social-links/social-links';

@Component({
  selector: 'app-footer-brand',
  imports: [SocialLinks, NgOptimizedImage],
  templateUrl: './footer-brand.html',
  styleUrl: './footer-brand.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterBrand {
  title = input('Proyección 3D S.A.S. BIC');
  description = input('');
  logo = input('assets/images/logos/P3D.png');
  logoAlt = input('Logo Proyección 3D');
  showLogo = input(true);
  logoWidth = input(60);
  logoHeight = input(60);
}
