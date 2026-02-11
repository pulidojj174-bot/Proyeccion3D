import { Component, input, signal } from '@angular/core';
import { ServiceData } from '../../../core/models/interfaces/serviceData.interface';
import { ServiceCardItem } from '../../molecules/service-card-item/service-card-item';


@Component({
  selector: 'app-services-section-item',
  imports: [ServiceCardItem],
  templateUrl: './services-section-item.html',
  styleUrl: './services-section-item.scss'
})
export class ServicesSectionItem {
  services = input<ServiceData[]>([]);
  sectionTitle = input<string>('Nuestros Servicios');
  showTitle = input<boolean>(false);
}
