import { Component, input } from '@angular/core';
import { ProcessStepData } from '../../../core/models/interfaces/Process.interface';

@Component({
  selector: 'app-process-step-card',
  imports: [],
  templateUrl: './process-step-card.html',
  styleUrl: './process-step-card.scss'
})
export class ProcessStepCard {
  step = input.required<ProcessStepData>();
  animationDelay = input<number>(0);
}
