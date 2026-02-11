import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Testimonial } from '../../../core/models/interfaces/testimonial.interface';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-testimonial-card',
  imports: [AvatarModule],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialCard {
  testimonial = input.required<Testimonial>();
  isActive = input(false);
}
