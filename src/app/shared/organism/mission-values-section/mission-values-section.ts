import { Component, input } from '@angular/core';
import { ValueCard } from '../../molecules/value-card/value-card';
import { ValueData } from '../../../core/models/interfaces/DatosEstadistica.interface';

@Component({
  selector: 'app-mission-values-section',
  imports: [ValueCard],
  templateUrl: './mission-values-section.html',
  styleUrl: './mission-values-section.scss'
})
export class MissionValuesSection {
  title = input<string>('Nuestra Misión y Valores');
  subtitle = input<string>('Nos guiamos por un compromiso con la excelencia, la innovación y la sostenibilidad.');
  values = input<ValueData[]>([]);
}
