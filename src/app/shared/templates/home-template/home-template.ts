import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TestimonialCarousel } from '../../organism/testimonial-carousel/testimonial-carousel';
import { ServiceCarousel } from "../../organism/service-carousel/service-carousel";
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { CTASection } from "../../molecules/cta-section/cta-section";
import { SectionHero } from '../../organism/section-hero/section-hero';
import { signal } from '@angular/core';
import { ServicesSection } from "../../organism/services-section/services-section";
import { ServiceItemData } from '../../molecules/service-item/service-item';
import { ClientsMarqueeSection } from '../../organism/clients-marquee-section/clients-marquee-section';
import { ClientsSectionData } from '../../../core/models/interfaces/ClientData.interface';

@Component({
  selector: 'app-home-template',
  imports: [
    TestimonialCarousel,
    ServiceCarousel,
    HeroHeaderComponent,
    CTASection,
    SectionHero,
    ServicesSection,
    ClientsMarqueeSection,
  ],
  templateUrl: './home-template.html',
  styleUrl: './home-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTemplate {
  // Hero con imagen (Home)
  homeHeroData = signal({
    title: 'Proyección 3D S.A.S. BIC',
    highlightedWords: ['3D'],
    subtitle: 'Transformando Ideas en Realidad',
    description:
      'Somos especialistas en ingeniería inversa, modelado 3D y soluciones industriales. Ofrecemos escaneo láser, impresión 3D, análisis por elementos finitos (FEA) y diseño mecánico. Servicios a nivel nacional e internacional.',
    heroVideo:
      'assets/images/projects/HeaderProyeccion.mp4',
    videoAutoplay: true,
    videoMuted: true,
    videoLoop: true,
    buttons: [
      {
        label: 'Nuestros Servicios',
        path: '/service',
        variant: 'primary' as const,
        icon: 'pi pi-arrow-right',
      },
      {
        label: 'Ver Portafolio',
        path: '/project',
        variant: 'secondary' as const,
      },
    ],
    config: {
      layout: 'hero-with-image' as const,
      textAlign: 'left' as const,
    },
  });

  myServicesArray = signal<ServiceItemData[]>([
    {
      id: 'Escaneo 3D e Ingeniería Inversa',
      title: 'Escaneo 3D e Ingeniería Inversa',
      description:
        'Digitalizamos piezas físicas con escáneres 3D de alta precisión para crear modelos CAD editables. Ideal para replicar componentes obsoletos, mejorar diseños o documentar equipos.',
      icon: 'bi bi-printer',
      linkText: 'Saber Más',
      linkUrl: '/service',
    },
    {
      id: 'Simulación FEA (Análisis por Elementos Finitos)',
      title: 'Simulación FEA (Análisis por Elementos Finitos)',
      description:
        'Realizamos análisis por elementos finitos (FEA) para evaluar el comportamiento estructural de tus diseños bajo condiciones de carga específicas.',
      icon: 'bi bi-graph-up',
      linkText: 'Saber Más',
      linkUrl: '/service',
    },
    {
      id: 'Diseño Mecánico Personalizado',
      title: 'Diseño Mecánico Personalizado',
      description:
        'Desarrollamos componentes y sistemas mecánicos desde cero, optimizados para fabricación. Incluye planos técnicos, tolerancias y selección de materiales.',
      icon: 'bi bi-lightning',
      linkText: 'Saber Más',
      linkUrl: '/service',
    },
    {
      id: 'Diseño de Plantas Industriales',
      title: 'Diseño de Plantas Industriales',
      description:
        'Modelamos layouts 2D/3D para optimizar flujos de producción, espacios y seguridad. Servicios completos: desde distribución de equipos hasta rutas de evacuación.',
      icon: 'bi bi-gear',
      linkText: 'Saber Más',
      linkUrl: '/service',
    },
    {
      id: 'Diagramas P&ID y Piping',
      title: 'Diagramas P&ID y Piping',
      description:
        'Elaboramos documentación técnica para sistemas de tuberías e instrumentación, cumpliendo normas ASME/ISO. Incluye tags, flujogramas y especificaciones.',
      icon: 'bi bi-palette',
      linkText: 'Saber Más',
      linkUrl: '/service',
    },
    {
      id: 'Impresión 3D Profesional',
      title: 'Impresión 3D Profesional',
      description:
        'Manufactura aditiva en materiales técnicos (ABS, Nylon, resinas industriales). Prototipos funcionales, piezas finales y herramientas de producción.',
      icon: 'bi bi-tools',
      linkText: 'Saber Más',
      linkUrl: '/service',
    },
    {
      id: 'Planos Estructurales y "As Built"',
      title: 'Planos Estructurales y "As Built"',
      description:
        'Elaboramos planos estructurales y "as built" para proyectos de ingeniería, asegurando precisión y cumplimiento normativo.',
      icon: 'bi bi-brush',
      linkText: 'Saber Más',
      linkUrl: '/service',
    },
    {
      id: 'Servicios de Dron, Fotogrametría y Mapas 3D',
      title: 'Servicios de Dron, Fotogrametría y Mapas 3D',
      /*       description: 'En PROYECCION 3D ofrecemos soluciones con drones para capturar, procesar y presentar información precisa en mapas 3D, fotogrametría y levantamientos aéreos.Nuestros servicios permiten optimizar tiempos, reducir costos y mejorar la toma de decisiones en sectores como la industria, la construcción y la ingeniería.Transformamos imágenes aéreas en datos útiles y modelos digitales que impulsan la innovación y el control de tus proyectos.', */
      description:
        'Servicios con drones para captura y procesamiento de datos geoespaciales: generación de mapas 3D, fotogrametría y levantamientos aéreos que optimizan tiempos, reducen costos y mejoran la precisión en proyectos de industria, construcción e ingeniería.',
      icon: 'bi bi-images',
      linkText: 'Saber Más',
      linkUrl: '/service',
    },
  ]);

  ctaData = signal({
    title: '¿Listo para Dar Vida a tus Ideas?',
    description:
      'Contáctanos hoy para discutir tu proyecto y descubrir cómo nuestras soluciones Integrales pueden ayudarte a innovar más rápido.',
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

  aboutHeroData = signal({
    title: 'Expertos en Soluciones para la Industria',
    description:
      'Más de 3 años impulsando la innovación industrial con tecnología de vanguardia. Nuestro equipo de ingenieros certificados ha desarrollado más de 500 modelos 3D, 40 análisis FEA, 25 diseños de plantas industriales y más de 80 escaneos 3D para empresas como:',
    image:
      'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Equipo de trabajo colaborando en impresión 3D',
    companies: [
      { id: 'ternium', name: 'Ternium', logo: 'assets/images/logos/Ternium.png', alt: 'Logo Ternium' },
      { id: 'payan', name: 'Payán & CIA', logo: 'assets/images/logos/Payan_logo.jpeg', alt: 'Logo Payán & CIA' },
      { id: 'super', name: 'Super', logo: 'assets/images/logos/Super.png', alt: 'Logo Super' },
    ],
    button: {
      label: 'Sobre Nosotros',
      path: '/about',
      variant: 'primary' as const,
    },
  });

  // Datos de clientes que confían en la empresa
  clientsData = signal<ClientsSectionData>({
    title: 'Clientes que Confían en Nosotros',
    subtitle:
      'Empresas líderes que han elegido nuestros servicios de impresión 3D para sus proyectos más importantes',
    clients: [
      {
        id: 'ecoplantas',
        name: 'Ecoplantas',
        logo: 'assets/images/logos/ecoplantas.png',
        alt: 'Logo Ecoplantas',
      },
      {
        id: 'industrias-tiagho',
        name: 'Industrias Tiagho',
        logo: 'assets/images/logos/industriasTiagho.png',
        alt: 'Logo Industrias Tiagho',
      },
      {
        id: 'interpesaje',
        name: 'Interpesaje',
        logo: 'assets/images/logos/interpesaje.png',
        alt: 'Logo Interpesaje',
      },
      {
        id: 'interpesaje1',
        name: 'Interpesaje División Industrial',
        logo: 'assets/images/logos/interpesaje1.png',
        alt: 'Logo Interpesaje División Industrial',
      },
      {
        id: 'p3d',
        name: 'P3D',
        logo: 'assets/images/logos/P3D.png',
        alt: 'Logo P3D',
      },
      {
        id: 'p3d-original',
        name: 'P3D Original',
        logo: 'assets/images/logos/P3DOriginal.png',
        alt: 'Logo P3D Original',
      },
      {
        id: 'payan-cia',
        name: 'Payán & CIA',
        logo: 'assets/images/logos/Payan_CIA.png',
        alt: 'Logo Payán & CIA',
      },
      {
        id: 'pci',
        name: 'PCI',
        logo: 'assets/images/logos/PCI.png',
        alt: 'Logo PCI',
      },
      {
        id: 'pimec',
        name: 'Pimec',
        logo: 'assets/images/logos/pimec.png',
        alt: 'Logo Pimec',
      },
      {
        id: 'super',
        name: 'Super',
        logo: 'assets/images/logos/Super.png',
        alt: 'Logo Super',
      },
      {
        id: 'ternium',
        name: 'Ternium',
        logo: 'assets/images/logos/Ternium.png',
        alt: 'Logo Ternium',
      },
      {
        id: 'wtt',
        name: 'WTT',
        logo: 'assets/images/logos/Wtt.png',
        alt: 'Logo WTT',
      },
    ],
  });
}
