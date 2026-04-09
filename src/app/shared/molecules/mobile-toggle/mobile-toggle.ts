import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

@Component({
  selector: 'app-mobile-toggle',
  templateUrl: './mobile-toggle.html',
  styleUrl: './mobile-toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' }
})
export class MobileToggle {
  isOpen = input(false);
  toggle = output<void>();

  onToggle(): void {
    this.toggle.emit();
  }
}
