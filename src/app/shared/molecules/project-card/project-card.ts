import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { ProjectCategory, ProjectData } from '../../../core/models/interfaces/ProjectData.interface';


@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCard {
  project = input.required<ProjectData>();
  showHoverEffects = input<boolean>(true);

  getCategoryLabel(category: ProjectCategory): string {
    const labels: Record<ProjectCategory, string> = {
      'all': 'Todos',
      'reverse-engineering': 'Ingeniería Inversa & Escaneo 3D',
      'fea': 'Análisis de Elementos Finitos',
      'industrial-design': 'Diseño Industrial',
      'mechanical-design': 'Diseño Mecánico',
      'piping-engineering': 'Ingeniería de Tuberías',
      '3d-printing': 'Impresión 3D',
      'structural-engineering': 'Ingeniería Estructural',
      'conceptual-engineering': 'Ingeniería Conceptual y Básica'
    };
    return labels[category] || category;
  }
}
