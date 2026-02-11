import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ClientData } from '../../../core/models/interfaces/ClientData.interface';

@Component({
  selector: 'app-client-card',
  imports: [NgOptimizedImage],
  templateUrl: './client-card.html',
  styleUrl: './client-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientCard {
  client = input.required<ClientData>();
  showName = input<boolean>(false);

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    console.warn(`Error loading client logo: ${img.src}`);
  }
}
