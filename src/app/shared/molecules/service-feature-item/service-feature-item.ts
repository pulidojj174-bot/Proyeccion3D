import { Component, input } from '@angular/core';

@Component({
  selector: 'app-service-feature-item',
  imports: [],
  templateUrl: './service-feature-item.html',
  styleUrl: './service-feature-item.scss'
})
export class ServiceFeatureItem {
  feature = input.required<string>();
  animationDelay = input<number>(0);
}
