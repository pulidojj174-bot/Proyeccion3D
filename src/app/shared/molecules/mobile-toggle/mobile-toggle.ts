import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-toggle',
  templateUrl: './mobile-toggle.html',
  styleUrl: './mobile-toggle.scss'
})
export class MobileToggle {
  @Input() isOpen: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  onToggle(): void {
    this.toggle.emit();
  }
}
