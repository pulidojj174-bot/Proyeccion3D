import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CTASection } from "../../molecules/cta-section/cta-section";
import { signal } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { ServiceData } from '../../../core/models/interfaces/serviceData.interface';
import { ServicesSectionItem } from "../../organism/services-section-item/services-section-item";
import { ProcessData } from '../../../core/models/interfaces/Process.interface';
import { ProcessSection } from "../../organism/process-section/process-section";

@Component({
  selector: 'app-service-template',
  imports: [CTASection, HeroHeaderComponent, ServicesSectionItem, ProcessSection],
  templateUrl: './service-template.html',
  styleUrl: './service-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceTemplate {

  // Simple (Services)
  servicesHeroData = signal({
    title: 'Nuestros Servicios',
    description: 'Soluciones integrales adaptadas a tus necesidades únicas.',
    config: {
      layout: 'simple' as const,
      backgroundColor: '#0f172a',
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

  // En tu projects-template.ts
  servicesData = signal<ServiceData[]>([
    {
      id: 'ingenieria-inversa-escaneo-3d',
      title: 'Ingeniería Inversa & Escaneo 3D',
      description: 'Convierte conceptos en prototipos físicos en días, no semanas. Perfecto para probar forma, ajuste y función.',
      icon: 'bi-printer',
      image: 'assets/images/service/Ingenieria-inversa.webp',
      imageAlt: 'Ingeniería Inversa & Escaneo 3D',
      imagePosition: 'right',
      features: [
        'Digitalización de piezas físicas mediante escáneres láser de alta precisión(hasta 0.01 mm).',
        'Reconstrucción de modelos CAD editables en software como Geomagic Design X o SolidWorks.',
        'Análisis comparativo entre el modelo 3D y la pieza física para control de calidad.',
        '✓ Replicar componentes obsoletos sin planos.',
        '✓ Rediseñar piezas para mejorar su rendimiento.',
        '✓ Documentar equipos industriales para mantenimiento predictivo.',
        'Beneficios:',
        'Reduce tiempos de reparación en un 70% vs. métodos tradicionales.',
        'Ideal para industrias con maquinaria antigua (ej: sector alimentario o energético).',
      ]
    },
    {
      id: 'simulacion-elementos-finitos',
      title: 'Simulación por Elementos Finitos (FEA)',
      description: 'Crea partes complejas con nuestras avanzadas capacidades de simulación por elementos finitos, combinando diferentes propiedades en una sola impresión.',
      icon: 'bi-layers',
      image: 'assets/images/service/Simulacion-FEA.webp',
      imageAlt: 'Simulación por Elementos Finitos (FEA)',
      imagePosition: 'left',
      features: [
        'Metodología:',
        'Análisis computacional de tensiones térmicas, mecánicas y fatiga en ANSYS o SolidWorks Simulation.',
        'Validación bajo normas ASME Sección VIII (equipos a presión) o API 650 (tanques de almacenamiento).',
        'Entregables:',
        '✓ Reportes técnicos con factores de seguridad.',
        '✓ Animaciones de puntos críticos de deformación.',
        '✓ Recomendaciones de optimización de diseño.',
        'Caso de éxito: Reducción de peso en un componente estructural para Super, manteniendo resistencia y ahorrando 35% en costos de material.',
      ]
    },
    {
      id: 'diseno-plantas-industriales',
      title: 'Diseño de Plantas Industriales',
      description: 'Ofrecemos servicios completos de producción para piezas funcionales y prototipos, desde lotes pequeños hasta producciones masivas.',
      icon: 'bi-lightning',
      image: 'assets/images/service/Plantas-industriales.png',
      imageAlt: 'Diseño de Plantas Industriales',
      imagePosition: 'right',
      features: [
        'Proceso:',
        ' 1 Levantamiento in situ con estación total(±2 mm de precisión).',
        ' 2 Modelado BIM(Revit / Navisworks) con detección de interferencias.',
        ' 3 Optimización de layouts con metodología Lean Manufacturing.',
        'Incluye:',
        '✓ Planos 2D / 3D de distribución de equipos.',
        '✓ Rutas de evacuación y mantenimiento.',
        '✓ Documentación "As Built" actualizable.',
        'Clientes frecuentes: Empresas de manufactura, plantas de tratamiento de agua (ej: Colombia S.A.S).',
      ]
    },
    {
      id: 'diseno-mecanico-personalizado',
      title: 'Diseño Mecánico Personalizado',
      description: 'Servicios de diseño mecánico adaptados a tus necesidades específicas, desde la conceptualización hasta la creación de prototipos listos para producción.',
      icon: 'bi-palette',
      image: 'assets/images/service/Diseño-mecanico.jpg',
      imageAlt: 'Diseño Mecánico Personalizado',
      imagePosition: 'left',
      features: [
        'Enfoque:',
        'Creación de componentes desde cero o rediseño de piezas existentes.',
        'Cálculo de cargas, selección de materiales (ASTM, AISI) y tolerancias GD&T.',
        'Tipos de proyectos:',
        '✓ Máquinas especiales(norma ISO 12100).',
        '✓ Sistemas de tuberías(ASME B31.3).',
        '✓ Herrajes estructurales(AISC 360).',
        'Ventaja competitiva: Integración directa con impresión 3D para prototipos rápidos.',
      ]
    },
    {
      id: 'ingenieria-piping-diagramas-pid',
      title: 'Ingeniería de Piping & Diagramas P&ID',
      description: 'Desarrollamos diagramas de tuberías e instrumentación (P&ID) para representar visualmente los sistemas de tuberías y sus componentes.',
      icon: 'bi-file-code',
      image: 'assets/images/service/Diagramas.png',
      imageAlt: 'Ingeniería de Piping & Diagramas P&ID',
      imagePosition: 'right',
      features: [
        'Detalle técnico:',
        'Diagramas de flujo de procesos(ISA 5.1).',
        'Isométricos espoolables para fabricación.',
        'Listas de materiales inteligentes(BOM) vinculadas a modelos 3D.',
        'Industrias clave:',
        '✓ Oil & Gas',
        '✓ Plantas químicas',
        '✓ Tratamiento de aguas',
      ]
    },
    {
      id: 'planos-estructurales-as-built',
      title: 'Planos Estructurales & As-Built',
      description: 'Generamos planos estructurales detallados y documentación "As-Built" para proyectos de construcción y remodelación.',
      icon: 'bi-bank',
      image: 'assets/images/service/Planos-estructurales.webp',
      imageAlt: 'Planos Estructurales & As-Built',
      imagePosition: 'left',
      features: [
        'Precisión garantizada:',
        ' Modelos BIM LOD 400 (nivel de detalle para fabricación).',
        ' Documentación para licencias de construcción.',
        'Ejemplo: Levantamiento de nave industrial para Ternium, con detalle de conexiones steel-to-steel.',
      ]
    },
    {
      id: 'ingenieria-conceptual-y-basica',
      title: 'Ingeniería Conceptual y Básica',
      description: 'Desarrollamos ingeniería conceptual y básica para proyectos industriales, asegurando un diseño eficiente y adaptado a tus necesidades.',
      icon: 'bi-gear',
      image: 'assets/images/service/Ingenieria-conceptual.jpg',
      imageAlt: 'Ingeniería Conceptual y Básica',
      imagePosition: 'right',
      features: [
        'Etapas:',
        '1 Estudios de factibilidad técnica - económica.',
        '2 Diseño preliminar de equipos.',
        '3 Estimación de costos y cronogramas.',
        'Output:',
        '✓ Memorias de cálculo.',
        '✓ Anteproyectos ejecutivos.',
      ]
    }
  ]);

  // En tu projects-template.ts o donde uses la sección
  processData = signal<ProcessData>({
    title: 'Nuestro Proceso',
    subtitle: 'Del concepto a la entrega, aseguramos una experiencia fluida y eficiente.',
    steps: [
      {
        id: 'consultation-diagnosis',
        step: 1,
        title: 'Consulta y Diagnóstico',
        description: 'Nuestros ingenieros analizan su desafío desde múltiples perspectivas (mecánica, material, costos) para ofrecer la solución óptima.',
      },
      {
        id: 'design-optimization',
        step: 2,
        title: 'Diseño y Optimización',
        description: 'Optimizamos un componente para Ternium, reduciendo un 25% su peso y manteniendo su vida útil.',
        featured: true // Esta será la tarjeta destacada
      },
      {
        id: 'production',
        step: 3,
        title: 'Producción',
        description: 'Implementamos tecnologías de vanguardia: impresión 3D industrial (FDM con ULTEM, Nylon), mecanizado CNC (tolerancias <0.05mm) y fabricación de moldes para series medianas.'
      },
      {
        id: 'finishing',
        step: 4,
        title: 'Acabado',
        description: 'Control de calidad riguroso con CMM y pruebas no destructivas. Aplicamos post-procesamiento especializado y entregamos tu proyecto a tiempo.'
      },
      {
        id: 'delivery',
        step: 5,
        title: 'Entrega y Soporte',
        description: 'Entregamos documentación técnica completa y ofrecemos soporte post-venta para asegurar tu satisfacción continua.'
      }
    ]
  });
}
