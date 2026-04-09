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
    title: 'Nuestros Proyectos',
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

  projectsData = signal<ProjectData[]>([
    // 🔬 ANÁLISIS DE ELEMENTOS FINITOS (FEA)
    {
      id: 'analisis-finito-1',
      title: 'Análisis de Elementos Finitos - Componente Mecánico',
      description: 'Simulación avanzada de elementos finitos para validar el rendimiento de un componente mecánico bajo diversas condiciones de carga y temperatura.',
      category: 'fea',
      image: 'assets/images/projects/Simulacion_elementos_finitos/analisis-finito-1.webp',
      imageAlt: 'Análisis de Elementos Finitos para Componente Mecánico',
      link: '/portfolio/analisis-finito-1',
    },
    {
      id: 'analisis-finito-2',
      title: 'Optimización Topológica Avanzada',
      description: 'Análisis de optimización topológica para reducir peso manteniendo propiedades mecánicas óptimas mediante simulación FEA.',
      category: 'fea',
      image: 'assets/images/projects/Simulacion_elementos_finitos/analisis-finito-2.webp',
      imageAlt: 'Optimización Topológica mediante FEA',
      link: '/portfolio/analisis-finito-2'
    },
    {
      id: 'analisis-finito-3',
      title: 'Análisis Estructural bajo Cargas Dinámicas',
      description: 'Simulación de elementos finitos para evaluar comportamiento estructural bajo cargas dinámicas y condiciones de fatiga.',
      category: 'fea',
      image: 'assets/images/projects/Simulacion_elementos_finitos/analisis-finito-3.webp',
      imageAlt: 'Análisis Estructural bajo Cargas Dinámicas',
      link: '/portfolio/analisis-finito-3'
    },
    {
      id: 'analisis-finito-4',
      title: 'Simulación Térmica y Mecánica',
      description: 'Análisis multifísico combinando simulación térmica y mecánica para componentes sometidos a altas temperaturas y esfuerzos.',
      category: 'fea',
      image: 'assets/images/projects/Simulacion_elementos_finitos/analisis-finito-4.webp',
      imageAlt: 'Simulación Térmica y Mecánica',
      link: '/portfolio/analisis-finito-4'
    },

    // 🔧 DISEÑO MECÁNICO PERSONALIZADO
    {
      id: 'diseno-mecanico-precision-1',
      title: 'Diseño Mecánico de Precisión Industrial',
      description: 'Desarrollo de componentes mecánicos complejos con especificaciones técnicas rigurosas para aplicaciones industriales especializadas.',
      category: 'mechanical-design',
      image: 'assets/images/projects/Diseño_mecanico/diseno-mecanico-1.webp',
      imageAlt: 'Diseño Mecánico de Precisión Industrial',
      link: '/portfolio/diseno-mecanico-precision-1',
    },
    {
      id: 'diseno-mecanico-precision-2',
      title: 'Sistema de Transmisión Personalizado',
      description: 'Diseño completo de sistema de transmisión mecánica para maquinaria industrial con análisis de cargas y optimización.',
      category: 'mechanical-design',
      image: 'assets/images/projects/Diseño_mecanico/diseno-mecanico-2.webp',
      imageAlt: 'Sistema de Transmisión Personalizado',
      link: '/portfolio/diseno-mecanico-precision-2'
    },
    {
      id: 'diseno-mecanico-3',
      title: 'Componente Mecánico Especializado',
      description: 'Desarrollo de componente mecánico especializado para la industria automotriz con análisis de resistencia y durabilidad.',
      category: 'mechanical-design',
      image: 'assets/images/projects/Diseño_mecanico/diseno-mecanico-3.webp',
      imageAlt: 'Componente Automotriz Especializado',
      link: '/portfolio/diseno-mecanico-3'
    },
    {
      id: 'diseno-mecanico-4',
      title: 'Mecanismo de Alta Precisión',
      description: 'Diseño de mecanismo de alta precisión para aplicaciones especializadas con tolerancias estrictas y movimientos complejos.',
      category: 'mechanical-design',
      image: 'assets/images/projects/Diseño_mecanico/diseno-mecanico-4.webp',
      imageAlt: 'Mecanismo de Alta Precisión',
      link: '/portfolio/diseno-mecanico-4'
    },
    {
      id: 'diseno-mecanico-5',
      title: 'Sistema Mecánico Modular',
      description: 'Desarrollo de sistema mecánico modular para optimización de procesos de manufactura con enfoque en eficiencia.',
      category: 'mechanical-design',
      image: 'assets/images/projects/Diseño_mecanico/diseno-mecanico-5.webp',
      imageAlt: 'Sistema Mecánico Modular',
      link: '/portfolio/diseno-mecanico-5'
    },
    {
      id: 'diseno-mecanico-6',
      title: 'Componente Mecánico DRUM',
      description: 'Diseño y fabricación de componente mecánico DRUM para aplicaciones industriales con alta precisión.',
      category: 'mechanical-design',
      image: 'assets/images/projects/Diseño_mecanico/diseno-mecanico-6.webp',
      imageAlt: 'Componente Mecánico DRUM',
      link: '/portfolio/diseno-mecanico-6'
    },
    {
      id: 'diseno-mecanico-7',
      title: 'Ensamble Mecánico Completo',
      description: 'Diseño y desarrollo de ensamble mecánico completo para maquinaria industrial con análisis de integración y funcionalidad.',
      category: 'mechanical-design',
      image: 'assets/images/projects/Diseño_mecanico/diseno-mecanico-7.webp',
      imageAlt: 'Ensamble Mecánico Completo',
      link: '/portfolio/diseno-mecanico-7'
    },
    {
      id: 'diseno-mecanico-8',
      title: 'Componente Mecánico de Alta Resistencia',
      description: 'Desarrollo de componente mecánico de alta resistencia para aplicaciones industriales exigentes con análisis estructural.',
      category: 'mechanical-design',
      image: 'assets/images/projects/Diseño_mecanico/diseno-mecanico-8.webp',
      imageAlt: 'Componente Mecánico de Alta Resistencia',
      link: '/portfolio/diseno-mecanico-8'
    },
    {
      id: 'diseno-mecanico-9',
      title: 'Pieza Mecánica Personalizada',
      description: 'Diseño y fabricación de pieza mecánica personalizada para maquinaria industrial con especificaciones técnicas detalladas.',
      category: 'mechanical-design',
      image: 'assets/images/projects/Diseño_mecanico/diseno-mecanico-9.webp',
      imageAlt: 'Pieza Mecánica Personalizada',
      link: '/portfolio/diseno-mecanico-9'
    },
    {
      id: 'diseno-mecanico-10',
      title: 'Componente Mecánico para Automatización',
      description: 'Desarrollo de componente mecánico especializado para sistemas de automatización industrial con enfoque en eficiencia.',
      category: 'mechanical-design',
      image: 'assets/images/projects/Diseño_mecanico/diseno-mecanico-10.webp',
      imageAlt: 'Componente Mecánico para Automatización',
      link: '/portfolio/diseno-mecanico-10'
    },
    {
      id: 'diseno-mecanico-11',
      title: 'Diseño Mecánico de Estructura Compleja',
      description: 'Desarrollo de estructura mecánica compleja para aplicaciones industriales con análisis de cargas y validación dimensional.',
      category: 'mechanical-design',
      image: 'assets/images/projects/Diseño_mecanico/diseno-mecanico-11.webp',
      imageAlt: 'Diseño Mecánico de Estructura Compleja',
      link: '/portfolio/diseno-mecanico-11'
    },

    // 🏭 INGENIERÍA CONCEPTUAL Y BÁSICA
    {
      id: 'concepto-industrial-1',
      title: 'Concepto Industrial Innovador',
      description: 'Desarrollo conceptual de solución industrial innovadora desde la idea inicial hasta el prototipo funcional con análisis de viabilidad.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/Ingenieria_conceptual_basica/ingenieria-conceptual-1.webp',
      imageAlt: 'Concepto Industrial Innovador',
      link: '/portfolio/concepto-industrial-1',
    },
    {
      id: 'concepto-industrial-2',
      title: 'Diseño Conceptual de Proceso',
      description: 'Exploración y desarrollo de conceptos de proceso industrial con enfoque en automatización y optimización de recursos.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/Ingenieria_conceptual_basica/ingenieria-conceptual-2.webp',
      imageAlt: 'Diseño Conceptual de Proceso',
      link: '/portfolio/concepto-industrial-2'
    },
    {
      id: 'concepto-industrial-3',
      title: 'Prototipo Conceptual Avanzado',
      description: 'Materialización de concepto innovador mediante prototipado rápido y validación de diseño con pruebas funcionales.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/Ingenieria_conceptual_basica/ingenieria-conceptual-3.webp',
      imageAlt: 'Prototipo Conceptual Avanzado',
      link: '/portfolio/concepto-industrial-3'
    },
    {
      id: 'concepto-industrial-4',
      title: 'Ingeniería Básica de Proceso',
      description: 'Desarrollo de ingeniería básica para nuevo proceso industrial incluyendo diagramas de flujo y especificaciones técnicas.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/Ingenieria_conceptual_basica/ingenieria-conceptual-4.webp',
      imageAlt: 'Ingeniería Básica de Proceso',
      link: '/portfolio/concepto-industrial-4'
    },
    {
      id: 'concepto-industrial-5',
      title: 'Evaluación de Viabilidad Técnica',
      description: 'Análisis exhaustivo de viabilidad técnica para proyecto industrial con recomendaciones para optimización y mitigación de riesgos.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/Ingenieria_conceptual_basica/ingenieria-conceptual-5.webp',
      imageAlt: 'Evaluación de Viabilidad Técnica',
      link: '/portfolio/concepto-industrial-5'
    },
    {
      id: 'concepto-industrial-6',
      title: 'Diseño de Proceso Sostenible',
      description: 'Desarrollo de diseño de proceso industrial con enfoque en sostenibilidad y eficiencia energética para minimizar impacto ambiental.',
      category: 'conceptual-engineering',
      image: 'assets/images/projects/Ingenieria_conceptual_basica/ingenieria-conceptual-6.webp',
      imageAlt: 'Diseño de Proceso Sostenible',
      link: '/portfolio/concepto-industrial-6'
    },

    // 🏢 PLANOS ESTRUCTURALES & AS-BUILT
    {
      id: 'planos-estructurales-1',
      title: 'Planos Estructurales As-Built',
      description: 'Elaboración de planos estructurales As-Built con levantamiento detallado de instalaciones existentes y documentación técnica.',
      category: 'structural-engineering',
      image: 'assets/images/projects/Planos_estructurales_y_as-built/Planos_estructurales_as-built-1.webp',
      imageAlt: 'Planos Estructurales As-Built',
      link: '/portfolio/planos-estructurales-1',
    },
    {
      id: 'planos-estructurales-2',
      title: 'Documentación Estructural Industrial',
      description: 'Generación de documentación estructural completa para instalaciones industriales con planos detallados y especificaciones técnicas.',
      category: 'structural-engineering',
      image: 'assets/images/projects/Planos_estructurales_y_as-built/Planos_estructurales_as-built-2.webp',
      imageAlt: 'Documentación Estructural Industrial',
      link: '/portfolio/planos-estructurales-2'
    },

    // 🏗️ DISEÑO DE PLANTAS INDUSTRIALES
    {
      id: 'diseno-planta-1',
      title: 'Layout de Planta de Producción',
      description: 'Diseño optimizado de layout para planta de producción incluyendo flujos de materiales y análisis de capacidad.',
      category: 'industrial-design',
      image: 'assets/images/projects/Diseño_plantas_industriales/diseno-planta-1.webp',
      imageAlt: 'Layout de Planta de Producción',
      link: '/portfolio/diseno-planta-1'
    },
    {
      id: 'diseno-planta-2',
      title: 'Diseño de Planta Industrial Completa',
      description: 'Planificación y diseño integral de planta industrial con optimización de flujos, layout y especificaciones estructurales.',
      category: 'industrial-design',
      image: 'assets/images/projects/Diseño_plantas_industriales/diseno-planta-2.webp',
      imageAlt: 'Diseño de Planta Industrial Completa',
      link: '/portfolio/diseno-planta-2'
    },

    // 🔄 INGENIERÍA INVERSA & ESCANEO 3D
    {
      id: 'reverse-engineering-1',
      title: 'Ingeniería Inversa de Componente',
      description: 'Proceso completo de ingeniería inversa mediante escaneo 3D para recreación digital de componente mecánico existente.',
      category: 'reverse-engineering',
      image: 'assets/images/projects/Ingenieria_inversa_&_escaneo_3d/ingenieria-inversa-1.webp',
      imageAlt: 'Ingeniería Inversa de Componente',
      link: '/portfolio/reverse-engineering-1'
    },
    {
      id: 'reverse-engineering-2',
      title: 'Escaneo 3D para Documentación',
      description: 'Escaneo 3D de alta precisión para documentación As-Built de instalaciones industriales y generación de planos.',
      category: 'reverse-engineering',
      image: 'assets/images/projects/Ingenieria_inversa_&_escaneo_3d/ingenieria-inversa-2.webp',
      imageAlt: 'Escaneo 3D para Documentación',
      link: '/portfolio/reverse-engineering-2'
    },
    {
      id: 'reverse-engineering-3',
      title: 'Recreación Digital de Piezas',
      description: 'Ingeniería inversa para recreación digital de piezas complejas mediante escaneo 3D y modelado CAD preciso.',
      category: 'reverse-engineering',
      image: 'assets/images/projects/Ingenieria_inversa_&_escaneo_3d/ingenieria-inversa-3.webp',
      imageAlt: 'Recreación Digital de Piezas',
      link: '/portfolio/reverse-engineering-3'
    },
    {
      id: 'reverse-engineering-4',
      title: 'Digitalización de Componente Industrial',
      description: 'Escaneo 3D y digitalización completa de componente industrial para su reproducción y mejora mediante ingeniería inversa.',
      category: 'reverse-engineering',
      image: 'assets/images/projects/Ingenieria_inversa_&_escaneo_3d/ingenieria-inversa-4.webp',
      imageAlt: 'Digitalización de Componente Industrial',
      link: '/portfolio/reverse-engineering-4'
    },
    {
      id: 'reverse-engineering-5',
      title: 'Modelado CAD desde Escaneo 3D',
      description: 'Generación de modelo CAD paramétrico a partir de escaneo 3D de pieza existente con alta fidelidad dimensional.',
      category: 'reverse-engineering',
      image: 'assets/images/projects/Ingenieria_inversa_&_escaneo_3d/ingenieria-inversa-5.webp',
      imageAlt: 'Modelado CAD desde Escaneo 3D',
      link: '/portfolio/reverse-engineering-5'
    },

    // 🔧 INGENIERÍA PIPING & P&ID
    {
      id: 'piping-engineering-1',
      title: 'Diseño de Sistema Piping Industrial',
      description: 'Diseño y optimización de sistemas de piping industrial con generación de diagramas P&ID y planos detallados.',
      category: 'piping-engineering',
      image: 'assets/images/projects/Ingenieria_piping_y_P&ID/pid-1.webp',
      imageAlt: 'Diseño de Sistema Piping Industrial',
      link: '/portfolio/piping-engineering-1'
    },
    {
      id: 'piping-engineering-2',
      title: 'Diagrama P&ID de Proceso',
      description: 'Elaboración de diagramas P&ID detallados para procesos industriales con especificaciones de instrumentación y control.',
      category: 'piping-engineering',
      image: 'assets/images/projects/Ingenieria_piping_y_P&ID/pid-2.webp',
      imageAlt: 'Diagrama P&ID de Proceso',
      link: '/portfolio/piping-engineering-2'
    },
    {
      id: 'piping-engineering-3',
      title: 'Ruteo de Tuberías Industriales',
      description: 'Diseño de ruteo de tuberías para planta industrial con análisis de esfuerzos y soportería.',
      category: 'piping-engineering',
      image: 'assets/images/projects/Ingenieria_piping_y_P&ID/pid-3.webp',
      imageAlt: 'Ruteo de Tuberías Industriales',
      link: '/portfolio/piping-engineering-3'
    },
    {
      id: 'piping-engineering-4',
      title: 'Isométricos de Tuberías',
      description: 'Generación de planos isométricos de tuberías para fabricación y montaje con lista de materiales detallada.',
      category: 'piping-engineering',
      image: 'assets/images/projects/Ingenieria_piping_y_P&ID/pid-4.webp',
      imageAlt: 'Isométricos de Tuberías',
      link: '/portfolio/piping-engineering-4'
    },
    {
      id: 'piping-engineering-5',
      title: 'Sistema de Piping Complejo',
      description: 'Diseño integral de sistema de piping complejo con múltiples líneas de proceso y análisis de flexibilidad.',
      category: 'piping-engineering',
      image: 'assets/images/projects/Ingenieria_piping_y_P&ID/pid-5.webp',
      imageAlt: 'Sistema de Piping Complejo',
      link: '/portfolio/piping-engineering-5'
    },

    // 🖨️ IMPRESIÓN 3D
    {
      id: '3d-printing-1',
      title: 'Impresión 3D - Prototipos Funcionales',
      description: 'Manufactura aditiva de precisión en materiales técnicos avanzados para prototipos funcionales y piezas finales de producción.',
      category: '3d-printing',
      image: 'assets/images/projects/Impresion3D/Impresion3D-1.webp',
      imageAlt: 'Impresión 3D Profesional',
      link: '/portfolio/3d-printing-1'
    },
    {
      id: '3d-printing-2',
      title: 'Manufactura Aditiva Industrial',
      description: 'Producción de piezas industriales mediante manufactura aditiva con materiales de ingeniería para aplicaciones exigentes.',
      category: '3d-printing',
      image: 'assets/images/projects/Impresion3D/Impresion3D-2.webp',
      imageAlt: 'Manufactura Aditiva Industrial',
      link: '/portfolio/3d-printing-2'
    },

    // 🛩️ FOTOGRAMETRÍA POR DRON
    {
      id: 'drone-photogrammetry-1',
      title: 'Fotogrametría por Dron - Levantamiento Industrial',
      description: 'Captura tridimensional de terrenos y estructuras industriales con drones equipados con sensores y fotogrametría de alta resolución.',
      category: 'drone-photogrammetry',
      image: 'assets/images/projects/Fotogrametria/Fotogrametria.webp',
      imageAlt: 'Fotogrametría por Dron',
      link: '/portfolio/drone-photogrammetry-1'
    }
  ]);
}
