import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationLink } from '../../../core/models/interfaces/NavigationLink.inteface';

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileMenu {
  links = input<NavigationLink[]>([]);
  isOpen = input(false);
  linkClick = output<void>();

  onLinkClick(): void {
    this.linkClick.emit();
  }
}
