import { Component, Input, signal, computed, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ServiceCard } from '../../molecules/service-card/service-card';
import { Service } from '../../../core/models/interfaces/Service.interface';

@Component({
  selector: 'app-service-carousel',
  imports: [ServiceCard],
  templateUrl: './service-carousel.html',
  styleUrl: './service-carousel.scss'
})
export class ServiceCarousel implements OnInit, OnDestroy {
  @Input() title: string = 'Nuestros Servicios';
  @Input() subtitle: string = 'Descubre nuestras soluciones completas de impresión 3D y diseño digital.';
  @Input() autoPlay: boolean = true;
  @Input() autoPlayInterval: number = 5000; // 5 segundos
  @Input() pauseOnHover: boolean = true;

  public currentIndex = signal(0);
  private isAnimating = signal(false);
  private autoPlayTimer: number | null = null;
  private isPaused = signal(false);

  // Inyectar PLATFORM_ID para verificar si estamos en el navegador
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @Input() services = signal<Service[]>([
    {
      id: 1,
      title: 'Escaneo 3D e Ingeniería Inversa',
      description: 'Digitalizamos piezas físicas con escáneres 3D de alta precisión para crear modelos CAD editables.',
      image: 'assets/images/service/Ingenieria-inversa.webp',
      features: [
        'Reemplazo de piezas obsoletas sin planos',
        'Control de calidad (comparativa CAD vs. físico)',
        'Optimización de componentes existentes',
      ],
      price: 'Cotización personalizada'
    },
    {
      id: 2,
      title: 'Simulación FEA (Análisis por Elementos Finitos)',
      description: 'Realizamos análisis por elementos finitos para evaluar el comportamiento estructural de tus diseños bajo condiciones de carga específicas.',
      image: 'assets/images/service/Simulacion-FEA.webp',
      features: [
        'Reportes de factores de seguridad',
        'Animaciones de deformación crítica',
        'Recomendaciones de mejora de diseño',
      ],
      price: 'Cotización personalizada'
    },
    {
      id: 3,
      title: 'Diseño Mecánico Personalizado',
      description: 'Conceptos 3D optimizados para fabricación (DFM), incluyendo planos técnicos y selección de materiales.',
      image: 'assets/images/service/Diseño-mecanico.jpg',
      features: [
        'Diseño desde cero',
        'Máquinas especiales (ISO 12100)',
        'Sistemas de piping (B31.3)',
        'Herrajes estructurales (AISC 360)'
      ],
      price: 'Cotización personalizada'
    },
    {
      id: 4,
      title: 'Diseño de Plantas Industriales',
      description: 'Layouts optimizados con metodología Lean Manufacturing, Documentación "As Built" actualizable.',
      image: 'assets/images/service/Plantas-industriales.png',
      features: [
        'Rutas de mantenimiento y evacuación',
        'Interferencias eléctricas/hidráulicas',
        'Análisis de flujos de materiales',
      ],
      price: 'Cotización personalizada'
    },
    {
      id: 5,
      title: 'Diagramas P&ID y Piping',
      description: 'Elaboramos documentación técnica para sistemas de tuberías e instrumentación, cumpliendo normas ASME/ISO.',
      image: 'assets/images/service/Diagramas.png',
      features: [
        'Diagramas inteligentes con datos de instrumentación',
        'Isométricos',
        'Listas de materiales (BOM) vinculadas',
      ],
      price: 'Cotización personalizada'
    },
    {
      id: 6,
      title: 'Impresión 3D Profesional',
      description: 'Ofrecemos servicios de impresión 3D de alta calidad para prototipos y producción en serie.',
      image: 'assets/images/service/Impresora-3D.jpg',
      features: [
        'Impresión en múltiples materiales',
        'Colores personalizados',
      ],
      price: 'Cotización personalizada'
    },
    {
      id: 7,
      title: 'Planos Estructurales y "As Built"',
      description: 'Elaboramos planos estructurales y "as built" para proyectos de ingeniería, asegurando precisión y cumplimiento normativo.',
      image: 'assets/images/service/Planos-estructurales.webp',
      features: [
        'Actualización de planos para ampliaciones',
        'Simulación de cargas',
        'Detalles de conexiones steel-to-steel',
      ],
      price: 'Cotización personalizada'
    }
  ]);

  // Computed properties - Solo una tarjeta actual
  currentService = computed(() => this.services()[this.currentIndex()]);
  totalServices = computed(() => this.services().length);
  canGoPrev = computed(() => this.totalServices() > 1);
  canGoNext = computed(() => this.totalServices() > 1);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.autoPlay && this.totalServices() > 1) {
        this.startAutoPlay();
      }
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  // ===============================
  // AUTOPLAY METHODS
  // ===============================

  private startAutoPlay() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.autoPlay || this.totalServices() <= 1) return;

    this.stopAutoPlay();

    this.autoPlayTimer = window.setInterval(() => {
      if (!this.isPaused() && !this.isAnimating()) {
        this.goToNext();
      }
    }, this.autoPlayInterval);
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  private resetAutoPlay() {
    if (this.autoPlay && isPlatformBrowser(this.platformId)) {
      this.stopAutoPlay();
      setTimeout(() => {
        this.startAutoPlay();
      }, 100);
    }
  }

  // ===============================
  // MOUSE EVENTS
  // ===============================

  onMouseEnter() {
    if (this.pauseOnHover) {
      this.isPaused.set(true);
    }
  }

  onMouseLeave() {
    if (this.pauseOnHover) {
      this.isPaused.set(false);
    }
  }

  // ===============================
  // NAVIGATION METHODS
  // ===============================

  goToPrev() {
    if (this.canGoPrev() && !this.isAnimating()) {
      this.isAnimating.set(true);

      // Navegación infinita hacia atrás
      if (this.currentIndex() === 0) {
        this.currentIndex.set(this.totalServices() - 1);
      } else {
        this.currentIndex.update(index => index - 1);
      }

      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.isAnimating.set(false), 300);
      } else {
        this.isAnimating.set(false);
      }

      this.resetAutoPlay();
    }
  }

  goToNext() {
    if (this.canGoNext() && !this.isAnimating()) {
      this.isAnimating.set(true);

      // Navegación infinita hacia adelante
      if (this.currentIndex() === this.totalServices() - 1) {
        this.currentIndex.set(0);
      } else {
        this.currentIndex.update(index => index + 1);
      }

      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.isAnimating.set(false), 300);
      } else {
        this.isAnimating.set(false);
      }
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.totalServices() && !this.isAnimating()) {
      this.isAnimating.set(true);
      this.currentIndex.set(index);

      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.isAnimating.set(false), 300);
      } else {
        this.isAnimating.set(false);
      }

      this.resetAutoPlay();
    }
  }

  // ===============================
  // UTILITY METHODS
  // ===============================

  getIndicators() {
    return Array.from({ length: this.totalServices() }, (_, i) => i);
  }

  getTitleWords() {
    return this.title.split(' ').map((word, index) => ({
      word,
      delay: index * 0.05
    }));
  }

  isPlaying() {
    return this.autoPlayTimer !== null;
  }
}
