import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CTASection } from "../../molecules/cta-section/cta-section";
import { signal } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { ProjectData } from '../../../core/models/interfaces/ProjectData.interface';
import { ProjectsSection } from "../../organism/projects-section/projects-section";

@Component({
  selector: 'app-projects-template',
  imports: [CTASection, HeroHeaderComponent, ProjectsSection],
  templateUrl: './projects-template.html',
  styleUrl: './projects-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsTemplate {

  // Portfolio
  portfolioHeroData = signal({
    title: 'Nuestro Portafolio',
    description: 'Explora nuestra diversa gama de proyectos de impresión 3D en varias industrias.',
    config: {
      layout: 'hero-with-background' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2000&auto=format&fit=crop',
      hasOverlay: true,
      maxWidth: '48rem'
    }
  });

  ctaData = signal({
    title: '¿Listo para Dar Vida a tus Ideas?',
    description: 'Contáctanos hoy para discutir tu proyecto y descubrir cómo nuestras soluciones de impresión 3D pueden ayudarte a innovar más rápido.',
    backgroundImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop',
    highlightedWord: 'Ideas',
    button: {
      label: 'Contáctanos',
      path: '/contact',
      variant: 'primary' as const,
      icon: 'pi pi-phone'
    }
  });

  // ✅ PROYECTOS CON IMÁGENES LOCALES Y CATEGORÍAS CORRECTAS
  projectsData = signal<ProjectData[]>([
    // 🔬 ANÁLISIS DE ELEMENTOS FINITOS (FEA)
    {
      id: 'analisis-finito-1',
      title: 'Análisis de Elementos Finitos - Componente Mecánico',
      description: 'Simulación avanzada de elementos finitos para validar el rendimiento de un componente mecánico bajo diversas condiciones de carga y temperatura.',
      category: 'fea',
      image: 'assets/images/projects/analisis-finito-1.png',
      imageAlt: 'Análisis de Elementos Finitos para Componente Mecánico',
      link: '/portfolio/analisis-finito-1',
    },
    {
      id: 'analisis-finito-2',
      title: 'Optimización Topológica Avanzada',
      description: 'Análisis de optimización topológica para reducir peso manteniendo propiedades mecánicas óptimas mediante simulación FEA.',
      category: 'fea',
      image: 'assets/images/projects/analisis-finitos-2.jpeg',
      imageAlt: 'Optimización Topológica mediante FEA',
      link: '/portfolio/analisis-finito-2'
    },

    // 🔧 DISEÑO MECÁNICO PERSONALIZADO
    {
      id: 'diseno-mecanico-precision-1',
      title: 'Diseño Mecánico de Precisión Industrial',
      description: 'Desarrollo de componentes mecánicos complejos con especificaciones técnicas rigurosas para aplicaciones industriales especializadas.',
      category: 'mechanical-design',
      image: 'assets/images/projects/diseno-mecanico-1.bmp',
      imageAlt: 'Diseño Mecánico de Precisión Industrial',
      link: '/portfolio/diseno-mecanico-precision-1',
    },
    {
      id: 'diseno-mecanico-precision-2',
      title: 'Sistema de Transmisión Personalizado',
      description: 'Diseño completo de sistema de transmisión mecánica para maquinaria industrial con análisis de cargas y optimización.',
      category: 'mechanical-design',
      image: 'assets/images/projects/diseno-mecanico-2.bmp',
      imageAlt: 'Sistema de Transmisión Personalizado',
      link: '/portfolio/diseno-mecanico-precision-2'
    },
    {
      id: 'diseno-mecanico-3',
      title: 'componente mecanico especializado',
      description: 'Desarrollo de componente mecánico especializado para la industria automotriz con análisis de resistencia y durabilidad.',
      category: 'mechanical-design',
      image: 'assets/images/projects/diseno-mecanico-3.jpeg',
      imageAlt: 'Componente Automotriz Especializado',
      link: '/portfolio/diseno-mecanico-3'
    },
    {
      id: 'diseno-mecanico-4',
      title: 'Mecanismo de Alta Precisión',
      description: 'Diseño de mecanismo de alta precisión para aplicaciones especializadas con tolerancias estrictas y movimientos complejos.',
      category: 'mechanical-design',
      image: 'assets/images/projects/diseno-mecanico-4.bmp',
      imageAlt: 'Mecanismo de Alta Precisión',
      link: '/portfolio/diseno-mecanico-4'
    },
    {
      id: 'diseno-mecanico-5',
      title: 'Sistema Mecánico Modular',
      description: 'Desarrollo de sistema mecánico modular para optimización de procesos de manufactura con enfoque en eficiencia.',
      category: 'mechanical-design',
      image: 'assets/images/projects/diseno-mecanico-5.bmp',
      imageAlt: 'Sistema Mecánico Modular',
      link: '/portfolio/diseno-mecanico-5'
    },
    {
      id: 'diseno-mecanico-6',
      title: 'Componente Mecánico DRUM',
      description: 'Diseño y fabricación de componente mecánico DRUM para aplicaciones industriales con alta precisión.',
      category: 'mechanical-design',
      image: 'assets/images/projects/diseno-mecanico-6.jpg',
      imageAlt: 'Componente Mecánico DRUM',
      link: '/portfolio/diseno-mecanico-6'
    },
    {
      id: 'diseno-mecanico-7',
      title: 'Ensamble Mecánico Completo',
      description: 'Diseño y desarrollo de ensamble mecánico completo para maquinaria industrial con análisis de integración y funcionalidad.',
      category: 'mechanical-design',
      image: 'assets/images/projects/diseno-mecanico-7.jpg',
      imageAlt: 'Ensamble Mecánico Completo',
      link: '/portfolio/diseno-mecanico-7'
    },
    /* {
      id: 'diseno-mecanico-8',
      title: 'Componente Mecánico de Alta Resistencia',
      description: 'Desarrollo de componente mecánico de alta resistencia para aplicaciones industriales exigentes con análisis estructural.',
      category: 'mechanical-design',
      image: 'assets/images/projects/diseno-mecanico-8.jpg',
      imageAlt: 'Componente Mecánico de Alta Resistencia',
      link: '/portfolio/diseno-mecanico-8'
    },
    {
      id: 'diseno-mecanico-9',
      title: 'Pieza Mecánica Personalizada',
      description: 'Diseño y fabricación de pieza mecánica personalizada para maquinaria industrial con especificaciones técnicas detalladas.',
      category: 'mechanical-design',
      image: 'assets/images/projects/diseno-mecanico-9.jpeg',
      imageAlt: 'Pieza Mecánica Personalizada',
      link: '/portfolio/diseno-mecanico-9'
    }, */
    {
      id: 'diseno-mecanico-10',
      title: 'Componente Mecánico para Automatización',
      description: 'Desarrollo de componente mecánico especializado para sistemas de automatización industrial con enfoque en eficiencia.',
      category: 'mechanical-design',
      image: 'assets/images/projects/diseno-mecanico-10.jpg',
      imageAlt: 'Componente Mecánico para Automatización',
      link: '/portfolio/diseno-mecanico-10'
    },

    // 🏭 INGENIERÍA CONCEPTUAL Y BÁSICA
    {
      id: 'concepto-industrial-1',
      title: 'Concepto Industrial Innovador',
      description: 'Desarrollo conceptual de solución industrial innovadora desde la idea inicial hasta el prototipo funcional con análisis de viabilidad.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/ingenieria-conceptual-1.bmp',
      imageAlt: 'Concepto Industrial Innovador',
      link: '/portfolio/concepto-industrial-1',
    },
    {
      id: 'concepto-industrial-2',
      title: 'Diseño Conceptual de Proceso',
      description: 'Exploración y desarrollo de conceptos de proceso industrial con enfoque en automatización y optimización de recursos.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/ingenieria-conceptual-2.bmp',
      imageAlt: 'Diseño Conceptual de Proceso',
      link: '/portfolio/concepto-industrial-2'
    },
    /* {
      id: 'concepto-industrial-3',
      title: 'Prototipo Conceptual Avanzado',
      description: 'Materialización de concepto innovador mediante prototipado rápido y validación de diseño con pruebas funcionales.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/ingenieria-conceptual-3.bmp',
      imageAlt: 'Prototipo Conceptual Avanzado',
      link: '/portfolio/concepto-industrial-3'
    }, */
    {
      id: 'concepto-industrial-4',
      title: 'Ingeniería Básica de Proceso',
      description: 'Desarrollo de ingeniería básica para nuevo proceso industrial incluyendo diagramas de flujo y especificaciones técnicas.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/ingenieria-conceptual-4.bmp',
      imageAlt: 'Ingeniería Básica de Proceso',
      link: '/portfolio/concepto-industrial-4'
    },
    {
      id: 'concepto-industrial-5',
      title: 'Evaluación de Viabilidad Técnica',
      description: 'Análisis exhaustivo de viabilidad técnica para proyecto industrial con recomendaciones para optimización y mitigación de riesgos.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/ingenieria-conceptual-5.jpg',
      imageAlt: 'Evaluación de Viabilidad Técnica',
      link: '/portfolio/concepto-industrial-5'
    },
    {
      id: 'concepto-industrial-6',
      title: 'Diseño de Proceso Sostenible',
      description: 'Desarrollo de diseño de proceso industrial con enfoque en sostenibilidad y eficiencia energética para minimizar impacto ambiental.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/ingenieria-conceptual-6.jpg',
      imageAlt: 'Diseño de Proceso Sostenible',
      link: '/portfolio/concepto-industrial-6'
    },
    {
      id: 'concepto-industrial-7',
      title: 'Simulación de Proceso Industrial',
      description: 'Implementación de simulación avanzada para optimización de proceso industrial y mejora continua mediante análisis de datos.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/ingenieria-conceptual-7.jpg',
      imageAlt: 'Simulación de Proceso Industrial',
      link: '/portfolio/concepto-industrial-7'
    },
 /*    {
      id: 'concepto-industrial-8',
      title: 'Automatización de Proceso Industrial',
      description: 'Diseño e implementación de soluciones de automatización para optimización de procesos industriales y aumento de productividad.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/ingenieria-conceptual-8.bmp',
      imageAlt: 'Automatización de Proceso Industrial',
      link: '/portfolio/concepto-industrial-8'
    }, */
    {
      id: 'concepto-industrial-9',
      title: 'Rediseño de Proceso Existente',
      description: 'Análisis y rediseño de proceso industrial existente para mejora de eficiencia y reducción de costos operativos.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/ingenieria-conceptual-9.jpeg',
      imageAlt: 'Rediseño de Proceso Existente',
      link: '/portfolio/concepto-industrial-9'
    },
    {
      id: 'concepto-industrial-10',
      title: 'Integración de Nuevas Tecnologías',
      description: 'Evaluación e integración de nuevas tecnologías en procesos industriales para innovación y mejora continua.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/ingenieria-conceptual-10.jpg',
      imageAlt: 'Integración de Nuevas Tecnologías',
      link: '/portfolio/concepto-industrial-10'
    },

    // 🏢 PLANOS ESTRUCTURALES & AS-BUILT
    {
      id: 'diseno-planta-industrial',
      title: 'Diseño de Planta Industrial Completa',
      description: 'Planificación y diseño integral de planta industrial con optimización de flujos, layout y especificaciones estructurales.',
      category: 'structural-engineering',
      image: 'assets/images/projects/diseno-planta.jpg',
      imageAlt: 'Diseño de Planta Industrial Completa',
      link: '/portfolio/diseno-planta-industrial',
    },

    // 🏗️ DISEÑO DE PLANTAS INDUSTRIALES
    {
      id: 'diseño-planta-1',
      title: 'Layout de Planta de Producción',
      description: 'Diseño optimizado de layout para planta de producción incluyendo flujos de materiales y análisis de capacidad.',
      category: 'industrial-design',
      image: '',
      imageAlt: 'Layout de Planta de Producción',
      link: '/portfolio/diseño-planta-1'
    },

    // 🔄 INGENIERÍA INVERSA & ESCANEO 3D
    {
      id: 'reverse-engineering-1',
      title: 'Ingeniería Inversa de Componente',
      description: 'Proceso completo de ingeniería inversa mediante escaneo 3D para recreación digital de componente mecánico existente.',
      category: 'reverse-engineering',
      image: 'assets/images/projects/ingenieria-inversa-1.bmp',
      imageAlt: 'Ingeniería Inversa de Componente',
      link: '/portfolio/reverse-engineering-1'
    },
    {
      id: 'reverse-engineering-2',
      title: 'Escaneo 3D para Documentación',
      description: 'Escaneo 3D de alta precisión para documentación As-Built de instalaciones industriales y generación de planos.',
      category: 'reverse-engineering',
      image: 'assets/images/projects/ingenieria-inversa-2.jpg',
      imageAlt: 'Escaneo 3D para Documentación',
      link: '/portfolio/reverse-engineering-2'
    },
    {
      id: 'reverse-engineering-3',
      title: 'Recreación Digital de Piezas',
      description: 'Ingeniería inversa para recreación digital de piezas complejas mediante escaneo 3D y modelado CAD preciso.',
      category: 'reverse-engineering',
      image: 'assets/images/projects/ingenieria-inversa-3.jpg',
      imageAlt: 'Recreación Digital de Piezas',
      link: '/portfolio/reverse-engineering-3'
    },
    {
      id: 'piping-engineering-1',
      title: 'Piping Engineering',
      description: 'Diseño y optimización de sistemas de piping industrial con generación de diagramas P&ID y planos detallados.',
      category: 'piping-engineering',
      image: 'assets/images/projects/pid.jpg',
      imageAlt: 'Piping Engineering',
      link: '/portfolio/piping-engineering-1'
    },
    // 🖨️ IMPRESIÓN 3D
    {
      id: '3d-printing-1',
      title: 'Impresión 3D - Prototipos Funcionales',
      description: 'Manufactura aditiva de precisión en materiales técnicos avanzados para prototipos funcionales y piezas finales de producción.',
      category: '3d-printing',
      image: 'assets/images/service/Impresora-3D.jpg',
      imageAlt: 'Impresión 3D Profesional',
      link: '/portfolio/3d-printing-1'
    },
    // 🛩️ FOTOGRAMETRÍA POR DRON
    {
      id: 'drone-photogrammetry-1',
      title: 'Fotogrametría por Dron - Levantamiento Industrial',
      description: 'Captura tridimensional de terrenos y estructuras industriales con drones equipados con sensores y fotogrametría de alta resolución.',
      category: 'drone-photogrammetry',
      image: 'assets/images/service/Dron.png',
      imageAlt: 'Fotogrametría por Dron',
      link: '/portfolio/drone-photogrammetry-1'
    }
  ]);
}
