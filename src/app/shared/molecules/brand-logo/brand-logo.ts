import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-brand-logo',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './brand-logo.html',
  styleUrl: './brand-logo.scss'
})
export class BrandLogo {
  @Input() text: string = 'Proyección3DBIC';
  @Input() href: string = '/';
  @Input() logo: string = 'assets/images/logos/P3D.png'; // ✅ Agregar logo
  @Input() logoAlt: string = 'Logo Proyección 3D';
  @Input() showLogo: boolean = true;
  @Input() showText: boolean = false; // Por defecto solo logo
  @Input() logoWidth: number = 50;
  @Input() logoHeight: number = 50;
}
