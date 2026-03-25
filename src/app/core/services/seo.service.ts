import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

export interface SeoData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  robots?: string;
  canonical?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  private readonly siteName = 'Proyección 3D';
  private readonly siteUrl = 'https://proyeccion3-d-9wjy.vercel.app';
  private readonly defaultDescription = 'Proyección 3D S.A.S. BIC: soluciones integrales de ingeniería inversa, impresión 3D profesional, diseño mecánico, simulación FEA y fotogrametría por dron en Colombia.';
  private readonly defaultImage = `${this.siteUrl}/assets/images/projects/HeaderProyeccion.png`;
  private readonly defaultAuthor = 'Proyección 3D S.A.S. BIC';
  private readonly locale = 'es_CO';

  init(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      this.updateMetaTags({
        title: data['title'],
        description: data['description'],
        keywords: data['keywords'],
        image: data['image'],
        type: data['type'],
        author: data['author'],
        robots: data['robots'],
      });
    });
  }

  updateMetaTags(data: SeoData): void {
    const pageTitle = data.title
      ? `${data.title} | ${this.siteName}`
      : this.siteName;
    const description = data.description || this.defaultDescription;
    const image = data.image || this.defaultImage;
    const url = data.url || `${this.siteUrl}${this.router.url}`;
    const type = data.type || 'website';
    const author = data.author || this.defaultAuthor;
    const robots = data.robots || 'index, follow';

    // Title
    this.title.setTitle(pageTitle);

    // Standard
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: robots });
    this.meta.updateTag({ name: 'author', content: author });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:locale', content: this.locale });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    // Geo
    this.meta.updateTag({ name: 'geo.region', content: 'CO-CLD' });
    this.meta.updateTag({ name: 'geo.placename', content: 'Villamaría, Caldas, Colombia' });
    this.meta.updateTag({ name: 'geo.position', content: '5.0489;-75.5102' });
    this.meta.updateTag({ name: 'ICBM', content: '5.0489, -75.5102' });

    // Canonical link
    this.updateCanonicalUrl(url);
  }

  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this.document.head.appendChild(link);
    }
  }
}
