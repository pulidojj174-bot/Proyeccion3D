import { Component, input } from '@angular/core';
import { Service } from '../../../core/models/interfaces/Service.interface';


@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss'
})
export class ServiceCard {
  service = input.required<Service>();
  isActive = input<boolean>(false);
}
