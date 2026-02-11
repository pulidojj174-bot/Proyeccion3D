import { Component, Input, signal, computed, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TestimonialCard } from '../../molecules/testimonial-card/testimonial-card';
import { Testimonial } from '../../../core/models/interfaces/testimonial.interface';


@Component({
  selector: 'app-testimonial-carousel',
  standalone: true,
  imports: [TestimonialCard],
  templateUrl: './testimonial-carousel.html',
  styleUrl: './testimonial-carousel.scss'
})
export class TestimonialCarousel implements OnInit, OnDestroy {
  @Input() title: string = 'Lo Que Dicen Nuestros Clientes';
  @Input() subtitle: string = 'Hemos ayudado a empresas de diversas industrias a dar vida a sus ideas.';
  @Input() autoPlay: boolean = true; // Activado por defecto
  @Input() autoPlayInterval: number = 5000; // 5 segundos
  @Input() pauseOnHover: boolean = true; // Pausa al hacer hover

  public currentIndex = signal(0);
  private isAnimating = signal(false);
  private autoPlayTimer: number | null = null;
  private isPaused = signal(false);

  // Inyectar PLATFORM_ID para verificar si estamos en el navegador
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @Input() testimonials = signal<Testimonial[]>([
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Product Manager, TechInnovate',
      quote: 'Working with Proyección 3D BIC was a game-changer for our product development process. Their expertise in 3D printing helped us reduce our prototyping time by 70%.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Lead Engineer, Aerospace Systems',
      quote: 'The quality and precision of Proyección 3D BIC\'s 3D printing services is unmatched. They helped us create complex parts that we couldn\'t manufacture through traditional methods.',
      avatar: 'https://images.unsplash.com/photo-15602500970b93528c311a?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Maria Lopez',
      title: 'Design Director, Creative Labs',
      quote: 'Their multi-material printing capabilities allowed us to create prototypes that looked and felt like final products. Exceptional service and quality.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ]);

  // Computed properties
  currentTestimonial = computed(() => this.testimonials()[this.currentIndex()]);
  totalTestimonials = computed(() => this.testimonials().length);

  // Para navegación infinita, los botones siempre están habilitados (si hay más de 1 testimonio)
  canGoPrev = computed(() => this.totalTestimonials() > 1);
  canGoNext = computed(() => this.totalTestimonials() > 1);

  ngOnInit() {
    // Solo iniciar autoplay si window existe
    if (typeof window !== 'undefined') {
      if (this.autoPlay && this.totalTestimonials() > 1) {
        this.startAutoPlay();
      }
    }
  }

  ngOnDestroy() {
    // Limpiar el timer al destruir el componente
    this.stopAutoPlay();
  }

  // ===============================
  // AUTOPLAY METHODS
  // ===============================

  private startAutoPlay() {
    // Verificar que window existe (estamos en el navegador)
    if (typeof window === 'undefined') return;
    if (!this.autoPlay || this.totalTestimonials() <= 1) return;

    this.stopAutoPlay(); // Asegurar que no haya múltiples timers

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
    if (typeof window === 'undefined') return;
    if (this.autoPlay) {
      this.stopAutoPlay();
      // Usar setTimeout solo si window existe
      setTimeout(() => {
        this.startAutoPlay();
      }, 100);
    }
  }

  // ===============================
  // MOUSE EVENTS (HOVER)
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

      // Si estamos en el primer elemento (índice 0), vamos al último
      if (this.currentIndex() === 0) {
        this.currentIndex.set(this.totalTestimonials() - 1);
      } else {
        this.currentIndex.update(index => index - 1);
      }

      // Usar setTimeout solo en el navegador
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.isAnimating.set(false), 300);
      } else {
        this.isAnimating.set(false);
      }

      // Resetear autoplay solo si fue interacción manual
      this.resetAutoPlay();
    }
  }

  goToNext() {
    if (this.canGoNext() && !this.isAnimating()) {
      this.isAnimating.set(true);

      // Si estamos en el último elemento, vamos al primero
      if (this.currentIndex() === this.totalTestimonials() - 1) {
        this.currentIndex.set(0);
      } else {
        this.currentIndex.update(index => index + 1);
      }

      // Usar setTimeout solo en el navegador
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.isAnimating.set(false), 300);
      } else {
        this.isAnimating.set(false);
      }
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.totalTestimonials() && !this.isAnimating()) {
      this.isAnimating.set(true);
      this.currentIndex.set(index);

      // Usar setTimeout solo en el navegador
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.isAnimating.set(false), 300);
      } else {
        this.isAnimating.set(false);
      }

      // Resetear autoplay al navegar manualmente
      this.resetAutoPlay();
    }
  }

  // ===============================
  // UTILITY METHODS
  // ===============================

  getIndicators() {
    return Array.from({ length: this.totalTestimonials() }, (_, i) => i);
  }

  // Método para obtener palabras del título con animación staggered
  getTitleWords() {
    return this.title.split(' ').map((word, index) => ({
      word,
      delay: index * 0.05 // 50ms de delay entre palabras
    }));
  }

  // ===============================
  // CONTROL METHODS (OPCIONAL)
  // ===============================

  // Método público para pausar/reanudar
  toggleAutoPlay() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.autoPlayTimer) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  // Método público para verificar si está reproduciéndose
  isPlaying() {
    return this.autoPlayTimer !== null;
  }
}
