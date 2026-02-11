import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { EmbeddedMapData, EmbeddedMap } from '../../molecules/embedded-map/embedded-map';

@Component({
  selector: 'app-contact-location-section',
  imports: [EmbeddedMap],
  templateUrl: './contact-location-section.html',
  styleUrl: './contact-location-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactLocationSection {
  mapData = signal<EmbeddedMapData>({
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.340365180438!2d-75.52027402098369!3d5.048453507381249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476545831e01fb%3A0x9864b6dfac393ae2!2sCl.%203a%20%234-24%2C%20Villamar%C3%ADa%2C%20Caldas!5e0!3m2!1ses!2sco!4v1752866086750!5m2!1ses!2sco',
    title: 'Proyección 3D BIC',
    address: 'Cl. 3a #4-24, Villamaría, Caldas',
    description: 'Taller de impresión 3D y diseño especializado'
  });
}
