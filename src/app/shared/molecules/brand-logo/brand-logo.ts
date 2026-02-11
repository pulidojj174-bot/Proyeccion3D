import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-brand-logo',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './brand-logo.html',
  styleUrl: './brand-logo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandLogo {
  text = input('Proyección3DBIC');
  href = input('/');
  logo = input('assets/images/logos/P3D.png');
  logoAlt = input('Logo Proyección 3D');
  showLogo = input(true);
  showText = input(false);
  logoWidth = input(50);
  logoHeight = input(50);
}
