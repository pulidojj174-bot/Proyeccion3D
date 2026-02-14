import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";

import { CTASection } from "../../molecules/cta-section/cta-section";
import { signal } from '@angular/core';
import { TeamSection } from "../../organism/team-section/team-section";
import { TeamMemberData } from '../../../core/models/interfaces/TeamMember.interface';
import { StatData, ValueData } from '../../../core/models/interfaces/DatosEstadistica.interface';
import { AboutHistorySection } from "../../organism/about-history-section/about-history-section";
import { StatsSection } from "../../organism/stats-section/stats-section";
import { QuoteSection } from "../../organism/quote-section/quote-section";
import { MissionValuesSection } from "../../organism/mission-values-section/mission-values-section";

@Component({
  selector: 'app-about-template',
  imports: [
    HeroHeaderComponent,
    CTASection,
    AboutHistorySection,
    StatsSection,
    QuoteSection,
    MissionValuesSection
],
  templateUrl: './about-template.html',
  styleUrl: './about-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutTemplate {
  // Hero con fondo (About)
  aboutHeroData = signal({
    title: 'Sobre Nuestra Empresa',
    highlightedWords: ['Empresa'],
    description:
      'En Proyección 3D, ayudamos a empresas a modernizar sus operaciones',
    config: {
      layout: 'hero-with-background' as const,
      backgroundImage:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop',
      hasOverlay: true,
      maxWidth: '48rem',
    },
  });

  ctaData = signal({
    title: '¿Listo para Dar Vida a tus Ideas?',
    description:
      'Contáctanos hoy para discutir tu proyecto y descubrir cómo nuestras soluciones de impresión 3D pueden ayudarte a innovar más rápido.',
    backgroundImage:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop',
    highlightedWord: 'Ideas',
    button: {
      label: 'Contáctanos',
      path: '/contact',
      variant: 'primary' as const,
      icon: 'pi pi-phone',
    },
  });
  // En tu home-template.ts o donde uses la sección
  teamMembers = signal<TeamMemberData[]>([
    {
      id: 'sebastian',
      name: 'Sebastián',
      position: 'Ingeniero de Proyectos',
      image: 'assets/images/Sebastian.jpeg',
      bio: 'Ingeniero mecánico especializado en procesos de laminación, modelado 3D e ingeniería inversa. Enfocado en la atención al cliente y desarrollo de soluciones técnicas innovadoras.',
    },
    {
      id: 'andres-mosca',
      name: 'Andrés Mosca',
      position: 'CEO y Fundador',
      image: 'assets/images/Andres-Mosca.png',
      bio: 'CEO con más de 10 años de experiencia en manufactura aditiva y transformación digital. Lidera la estrategia empresarial enfocada en modernización de procesos industriales y tecnologías de vanguardia.',
    },
    {
      id: 'wilson',
      name: 'Wilson',
      position: 'Ingeniera Mecánica',
      image: 'assets/images/Wilson.jpeg',
      bio: 'Ingeniero Mecánico especializado en modelado 3D, diseño industrial y sistemas de tuberías. Transforma conceptos en proyectos técnicamente precisos y eficientes.',
    },
    {
      id: 'sergio',
      name: 'Sergio',
      position: 'Ingeniero de Procesos',
      image: 'assets/images/Sergio.jpeg',
      bio: 'Ingeniero de Procesos especializado en ingeniería inversa y escáner 3D. Líder en transformación de componentes físicos a modelos digitales de alta precisión y optimización de diseños complejos.',
    },
  ]);

  // En tu home-template.ts o donde uses las secciones
  statsData = signal<StatData[]>([
    {
      id: 'clients',
      icon: 'bi-people',
      value: '50',
      label: 'Clientes Satisfechos',
    },
    {
      id: 'clock',
      icon: 'bi-clock',
      value: '2000',
      label:   `  Premios de la
      Industria `,
    },
    {
      id: 'experience',
      icon: 'bi-calendar-check',
      //icon: 'bi-patch-check',
      value: '3',
      label: 'Años de Experiencia',
    },
    {
      id: 'projects',
      icon: 'bi-lightbulb',
      value: '250',
      label: 'Proyectos Completados',
    },
  ]);

  valuesData = signal<ValueData[]>([
    {
      id: 'mission',
      title: 'Misión',
      description:
        'PROYECCIÓN 3D S.A.S. BIC entrega soluciones de diseño básico, conceptual y de detalle para la industria metalmecánica, construcción e ingeniería, suministrando desarrollos inteligentes y conscientes de la importancia de la imagen como fuente de información para socializar proyectos y sus características técnicas, con el fin de llevar los principios de ingeniería a la comprensión del usuario final.',
    },
    {
      id: 'vision',
      title: 'Visión',
      description:
        'Ser la empresa consultora y de diseño con mayor empoderamiento técnico, mediante el desarrollo tecnológico y pedagógico para la compresión y visualización de proyectos.',
    },
    {
      id: 'políticas',
      title: 'Politica de calidad',
      description: 'PROYECCIÓN 3D S.A.S. BIC, como empresa líder en el desarrollo de diseños para la industria, proyectos e ingeniería, promueve las buenas prácticas de calidad orientadas a la satisfacción de nuestros clientes y partes interesadas, así como a la mejora continua de la eficacia del Sistema de Gestión de Calidad. Para lograr estos objetivos, PROYECCIÓN 3D S.A.S. BIC, se compromete:',
    },
    {
      id: '1',
      title: '1.',
      description: 'Comprometidos con la excelencia, cumplimos con los estándares del Sistema de Gestión de Calidad ISO 9001, y trabajamos cada día en mejorar nuestros procesos para ofrecer siempre lo mejor.',
    },
    {
      id: '2',
      title: '2.',
      description: 'Cumplir con la satisfacción de nuestros clientes, mediante el cumplimiento de sus necesidades y expectativas.',
    },
    {
      id: '3',
      title: '3.',
      description: 'Brindar capacitación continua a todos los colaboradores de Proyección 3D S.A.S BIC, con el propósito de optimizar su desempeño mediante el fortalecimiento de la seguridad y la eficiencia, promoviendo de manera sostenida su motivación y compromiso organizacional.',
    }
  ]);
}
