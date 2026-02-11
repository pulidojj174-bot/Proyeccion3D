import { Component, ChangeDetectionStrategy, input, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProjectCard } from '../../molecules/project-card/project-card';
import { TabButton } from '../../molecules/tab-button/tab-button';
import { ProjectCategory, ProjectData, ProjectTab } from '../../../core/models/interfaces/ProjectData.interface';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard, TabButton],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsSection {
  private platformId = inject(PLATFORM_ID);

  projects = input<ProjectData[]>([]);
  sectionTitle = input<string>('Nuestros Proyectos');
  sectionSubtitle = input<string>(''); // Nuevo input para subtítulo
  showTitle = input<boolean>(true);
  maxProjectsPerPage = input<number>(0); // 0 = sin límite

  // Signal para la pestaña activa
  private _activeTab = signal<ProjectCategory>('all');

  // Computed para obtener la pestaña activa
  activeTab = computed(() => this._activeTab());

  // Computed para detectar si estamos en el navegador
  isBrowser = computed(() => isPlatformBrowser(this.platformId));

  // Computed para los tabs disponibles con mejor lógica
  availableTabs = computed(() => {
    const projects = this.projects();
    const tabs: ProjectTab[] = [
      { id: 'all', label: 'Todos', count: projects.length }
    ];

    // Mapeo de categorías con labels más descriptivos
    const categoryLabels: Record<string, string> = {
      'reverse-engineering': 'Ingeniería Inversa & Escaneo 3D',
      'fea': 'Simulación por Elementos Finitos (FEA)',
      'industrial-design': 'Diseño de Plantas Industriales',
      'mechanical-design': 'Diseño Mecánico Personalizado',
      'piping-engineering': 'Ingeniería de Piping & Diagramas P&ID',
      '3d-printing': 'Impresión 3D Industrial',
      'structural-engineering': 'Planos Estructurales & As-Built',
      'conceptual-engineering': 'Ingeniería Conceptual y Básica',
    };

    // Contar proyectos por categoría
    const categoryCounts = projects.reduce((acc, project) => {
      if (project.category !== 'all') {
        acc[project.category] = (acc[project.category] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    // Agregar tabs dinámicamente solo si hay proyectos
    Object.entries(categoryCounts).forEach(([category, count]) => {
      if (count > 0) {
        tabs.push({
          id: category as ProjectCategory,
          label: categoryLabels[category] || category,
          count: count
        });
      }
    });

    return tabs;
  });

  // Computed para proyectos filtrados con paginación opcional
  filteredProjects = computed(() => {
    const projects = this.projects();
    const activeTab = this.activeTab();
    const maxProjects = this.maxProjectsPerPage();

    let filtered = activeTab === 'all'
      ? projects
      : projects.filter(project => project.category === activeTab);

    // Aplicar límite si está configurado
    if (maxProjects > 0) {
      filtered = filtered.slice(0, maxProjects);
    }

    return filtered;
  });

  // Método mejorado para cambio de tab con smooth scroll
  onTabChange(tabId: string) {
    this._activeTab.set(tabId as ProjectCategory);

    // Smooth scroll al contenido en mobile (solo en browser)
    if (this.isBrowser()) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const contentElement = document.querySelector('.projects-section__content');
        contentElement?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }

  // Método para obtener el conteo de una categoría específica
  getCategoryCount(category: ProjectCategory): number {
    const projects = this.projects();
    return category === 'all'
      ? projects.length
      : projects.filter(p => p.category === category).length;
  }
}
