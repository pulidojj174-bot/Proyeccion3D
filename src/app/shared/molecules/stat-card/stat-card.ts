import { Component, inject, input, PLATFORM_ID } from '@angular/core';
import { NgxNumberTickerComponent } from '@omnedia/ngx-number-ticker';
import { StatData } from '../../../core/models/interfaces/DatosEstadistica.interface';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  imports: [NgxNumberTickerComponent],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss'
})
export class StatCard {
  private platformId = inject(PLATFORM_ID);

  stat = input.required<StatData>();
  animationDelay = input<number>(0);

  // Verificar si estamos en el navegador
  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
