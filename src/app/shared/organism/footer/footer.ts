import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FooterBrand } from '../../molecules/footer-brand/footer-brand';
import { FooterSection } from '../../molecules/footer-section/footer-section';
import { FooterContact } from '../../molecules/footer-contact/footer-contact';
import { FooterCopyright } from '../../molecules/footer-copyright/footer-copyright';
import { FooterLink } from '../../../core/models/interfaces/FooterLink.interface';
import { FooterSectionData } from '../../../core/models/interfaces/FooterSection.interface';

@Component({
  selector: 'app-footer',
  imports: [FooterBrand, FooterSection, FooterContact, FooterCopyright],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  quickLinks = signal<FooterSectionData>({
    title: 'Enlaces Rápidos',
    links: [
      { label: 'Inicio', path: '/' },
      { label: 'Nosotros', path: '/about' },
      { label: 'Servicios', path: '/service' },
      { label: 'Portafolio', path: '/project' },
      { label: 'Contacto', path: '/contact' },
    ],
  });

  services = signal<FooterSectionData>({
    title: 'Servicios',
    links: [
      { label: 'Ingeniería Inversa & Escaneo 3D', path: '/service', fragment: 'ingenieria-inversa-escaneo-3d' },
      { label: 'Simulación por Elementos Finitos (FEA)', path: '/service', fragment: 'simulacion-elementos-finitos' },
      { label: 'Diseño de Plantas Industriales', path: '/service', fragment: 'diseno-plantas-industriales' },
      { label: 'Diseño Mecánico Personalizado', path: '/service', fragment: 'diseno-mecanico-personalizado' },
      { label: 'Ingeniería de Piping & Diagramas P&ID', path: '/service', fragment: 'ingenieria-piping-diagramas-pid' },
      { label: 'Impresión 3D Profesional', path: '/service', fragment: 'impresion-3d-profesional' },
      { label: 'Planos Estructurales & As-Built', path: '/service', fragment: 'planos-estructurales-as-built' },
      { label: 'Ingeniería Conceptual y Básica', path: '/service', fragment: 'ingenieria-conceptual-y-basica' },
    ],
  });

  legalLinks = signal<FooterLink[]>([
    { label: 'Política de Privacidad', path: '/privacy' },
    { label: 'Términos de Servicio', path: '/terms' },
    { label: 'Mapa del Sitio', path: '/contact' },
  ]);
}
