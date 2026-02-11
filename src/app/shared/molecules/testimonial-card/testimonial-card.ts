import { Component, Input } from '@angular/core';
import { Testimonial } from '../../../core/models/interfaces/testimonial.interface';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-testimonial-card',
  imports: [AvatarModule],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.scss'
})
export class TestimonialCard {
  @Input() testimonial!: Testimonial;
  @Input() isActive: boolean = false;
}
