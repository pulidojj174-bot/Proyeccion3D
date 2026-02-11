import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-quote-section',
  imports: [],
  templateUrl: './quote-section.html',
  styleUrl: './quote-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteSection {
  quote = input<string>('"Creo en la innovación como motor de la industria: diseño mecánico, escaneo 3D e impresión 3D para transformar ideas en realidades."');
  author = input<string>('Andres Mosca, CEO y Fundador');
  backgroundImage = input<string>('assets/images/Andres-Mosca.png');
}
