import { Component, input } from '@angular/core';
import { ServiceFeatureItem } from '../service-feature-item/service-feature-item';
import { ServiceData } from '../../../core/models/interfaces/serviceData.interface';

@Component({
  selector: 'app-service-card-item',
  imports: [ServiceFeatureItem],
  templateUrl: './service-card-item.html',
  styleUrl: './service-card-item.scss'
})
export class ServiceCardItem {
  service = input.required<ServiceData>();
  animationDelay = input<number>(0);
}
