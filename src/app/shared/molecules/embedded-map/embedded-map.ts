import { Component, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface EmbeddedMapData {
  src: string;
  title: string;
  address: string;
  description?: string;
}

@Component({
  selector: 'app-embedded-map',
  imports: [],
  templateUrl: './embedded-map.html',
  styleUrl: './embedded-map.scss'
})
export class EmbeddedMap {
  mapData = input.required<EmbeddedMapData>();
  height = input<string>('450px');
  showOverlay = input<boolean>(false);
  showInfoCard = input<boolean>(true);

  // Signal para controlar la visibilidad de la info card
  private _infoCardVisible = signal(true);

  constructor(private sanitizer: DomSanitizer) { }

  get sanitizedSrc(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.mapData().src);
  }

  // Getter que combina el input y el signal interno
  get isInfoCardVisible(): boolean {
    return this.showInfoCard() && this._infoCardVisible();
  }

  closeInfoCard(): void {
    this._infoCardVisible.set(false);
  }
}
