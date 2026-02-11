import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import { ClientCard } from '../../molecules/client-card/client-card';

@Component({
  selector: 'app-clients-marquee-section',
  imports: [NgxMarqueeComponent, ClientCard],
  templateUrl: './clients-marquee-section.html',
  styleUrl: './clients-marquee-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsMarqueeSection {
  // Solo necesitas estos inputs, ya no necesitas 'data'
  title = input<string>('Clientes que Confían en Nosotros');
  subtitle = input<string>('Empresas líderes que han elegido nuestros servicios');
  showTitle = input<boolean>(true);
  speed = input<number>(40);
  gap = input<number>(24);
  pauseOnHover = input<boolean>(true);
  reverse = input<boolean>(false);
  showClientNames = input<boolean>(false);
}
