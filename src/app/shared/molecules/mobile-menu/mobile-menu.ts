import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationLink } from '../../../core/models/interfaces/NavigationLink.inteface';

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss'
})
export class MobileMenu {
  @Input() links: NavigationLink[] = [];
  @Input() isOpen: boolean = false;
  @Output() linkClick = new EventEmitter<void>();

  onLinkClick(): void {
    this.linkClick.emit();
  }
}
