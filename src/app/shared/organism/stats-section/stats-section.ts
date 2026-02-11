import { Component, input } from '@angular/core';
import { StatCard } from '../../molecules/stat-card/stat-card';
import { StatData } from '../../../core/models/interfaces/DatosEstadistica.interface';

@Component({
  selector: 'app-stats-section',
  imports: [StatCard],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.scss'
})
export class StatsSection {
  stats = input<StatData[]>([]);
}
