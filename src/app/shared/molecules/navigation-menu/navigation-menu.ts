import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationLink } from '../../../core/models/interfaces/NavigationLink.inteface';

@Component({
  selector: 'app-navigation-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation-menu.html',
  styleUrl: './navigation-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationMenu {
  links = input<NavigationLink[]>([]);
}
