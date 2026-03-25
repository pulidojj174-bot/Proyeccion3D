import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

interface SeoData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  private readonly siteName = 'Proyección 3D';
  private readonly siteUrl = 'https://proyeccion3d.com';
  private readonly defaultDescription = 'Soluciones integrales de ingeniería: impresión 3D profesional, escaneo 3D, diseño mecánico, simulación FEA y más. Innovación y precisión para tu proyecto.';
  private readonly defaultImage = 'https://proyeccion3d.com/assets/images/photo-1581092160607-ee22621dd758.avif';

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
      });
    });
  }

  updateMetaTags(data: SeoData): void {
    const pageTitle = data.title
      ? `${this.formatTitle(data.title)} | ${this.siteName}`
      : this.siteName;
    const description = data.description || this.defaultDescription;
    const image = data.image || this.defaultImage;
    const url = data.url || `${this.siteUrl}${this.router.url}`;

    this.title.setTitle(pageTitle);

    // Standard meta tags
    this.meta.updateTag({ name: 'description', content: description });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  private formatTitle(title: string): string {
    return title.charAt(0).toUpperCase() + title.slice(1);
  }
}
