import { Component, input, signal, computed } from '@angular/core';
import { ProcessStepCard } from '../../molecules/process-step-card/process-step-card';
import { ProcessData } from '../../../core/models/interfaces/Process.interface';

@Component({
  selector: 'app-process-section',
  imports: [ProcessStepCard],
  templateUrl: './process-section.html',
  styleUrl: './process-section.scss'
})
export class ProcessSection {
  processData = input<ProcessData>({
    title: 'Nuestro Proceso',
    subtitle: 'Del concepto a la entrega, aseguramos una experiencia fluida y eficiente.',
    steps: []
  });
  
  // Signal para controlar animaciones
  private _isVisible = signal<boolean>(false);
  
  // Computed para obtener los pasos
  processSteps = computed(() => this.processData().steps);
  
  // Método para activar animaciones (puede ser llamado desde intersection observer)
  triggerAnimations() {
    this._isVisible.set(true);
  }
}
