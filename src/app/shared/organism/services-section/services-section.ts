import { Component, ChangeDetectionStrategy, input } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ServiceItem, ServiceItemData } from '../../molecules/service-item/service-item';

@Component({
  selector: 'app-services-section',
  imports: [RouterModule, ServiceItem],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesSection {
  services = input.required<ServiceItemData[]>();
  ctaText = input<string>('Ver Todos los Servicios');
  ctaLink = input<string>('/service');
  sectionTitle = input<string>('Nuestros Servicios');
  sectionSubtitle = input<string>('Desde prototipado rápido hasta producción en serie, ofrecemos soluciones completas de impresión 3D adaptadas a tus necesidades.');
}
