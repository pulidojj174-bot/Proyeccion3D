import { Component, input } from '@angular/core';
import { ValueData } from '../../../core/models/interfaces/DatosEstadistica.interface';

@Component({
  selector: 'app-value-card',
  imports: [],
  templateUrl: './value-card.html',
  styleUrl: './value-card.scss'
})
export class ValueCard {
  value = input.required<ValueData>();
  animationDelay = input<number>(0);
}
