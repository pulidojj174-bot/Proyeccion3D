import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

import { BrandLogo } from "../../molecules/brand-logo/brand-logo";
import { NavigationMenu } from "../../molecules/navigation-menu/navigation-menu";
import { MobileToggle } from "../../molecules/mobile-toggle/mobile-toggle";
import { MobileMenu } from "../../molecules/mobile-menu/mobile-menu";
import { NavigationLink } from '../../../core/models/interfaces/NavigationLink.inteface';

@Component({
  selector: 'app-navbar',
  imports: [BrandLogo, NavigationMenu, MobileToggle, MobileMenu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Navbar {
  isMobileMenuOpen = signal(false);

  navigationLinks: NavigationLink[] = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Acerca de' },
    { path: '/service', label: 'Servicios' },
    { path: '/project', label: 'Proyectos' },
    { path: '/contact', label: 'Contacto' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
