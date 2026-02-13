import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-about-history-section',
  imports: [],
  templateUrl: './about-history-section.html',
  styleUrl: './about-history-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutHistorySection {
  title = input<string>('Nuestra Historia');
  image = input<string>('assets/images/Nuestra_historia.png');
  imageAlt = input<string>('Nuestras instalaciones de impresión 3D');
  paragraphs = input<string[]>([
    'Desde 2022, Proyección 3D impulsa la transformación de la industria colombiana, llevando la ingeniería de precisión más allá de los límites tradicionales. Nuestro propósito es claro: unir tecnología de vanguardia con el talento local para crear soluciones que construyen futuro.',
    'Lo que comenzó como un pequeño taller en Manizales con una impresora básica, hoy es un centro especializado con:',
    'Equipos de última generación: Escáneres láser de 0.02 mm de precisión, software de simulación FEA y herramientas BIM.',
    'Un equipo multidisciplinario de ingenieros mecánicos, diseñadores y expertos en manufactura aditiva.',
    'Más de 150 proyectos ejecutados en sectores clave como metalurgica, automotriz, alimentos y construcción.',
  ]);
}
