import { Component, signal } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { ContactFormData } from '../../molecules/contact-form/contact-form';
import { ContactSection } from "../../organism/contact-section/contact-section";
import { ContactLocationSection } from "../../organism/contact-location-section/contact-location-section";

@Component({
  selector: 'app-contact-template',
  imports: [HeroHeaderComponent, ContactSection, ContactLocationSection],
  templateUrl: './contact-template.html',
  styleUrl: './contact-template.scss'
})
export class ContactTemplate {
  // Contact
  contactHeroData = signal({
    title: 'Ponte en Contacto',
    description: 'Tienes un proyecto en mente? Nos encantaría saber de ti.',
    config: {
      layout: 'simple' as const,
      backgroundColor: '#0f172a',
      maxWidth: '48rem'
    }
  });

  contactData = signal({
    contactItems: [
      {
        icon: 'pi-map-marker',
        title: 'Nuestra Ubicación',
        description: 'Visítanos en nuestra oficina',
        lines: ['Cl. 3a #4-24', 'Villamaría', 'Caldas, Colombia']
      },
      {
        icon: 'pi-envelope',
        title: 'Envíanos un Email',
        description: 'Envíanos un correo electrónico',
        lines: ['productividadydiseno3d@gmail.com', 'proyeccion3d.admi@gmail.com']
      },
      {
        icon: 'pi-phone',
        title: 'Llámanos',
        description: 'Danos una llamada',
        lines: ['+57 316 5882153', 'Lunes - Viernes, 7am - 6pm COT']
      }
    ],
    businessHours: [
      { day: 'Lunes - Viernes', hours: '7:00 AM - 6:00 PM' },
      { day: 'Sábado', hours: 'Cerrado' },
      { day: 'Domingo', hours: 'Cerrado' }
    ],
    serviceOptions: [
      { value: 'prototyping', label: 'Prototipado Rápido' },
      { value: 'production', label: 'Producción en Serie' },
      { value: 'design', label: 'Servicios de Diseño' },
      { value: 'scanning', label: 'Escaneo 3D' },
      { value: 'other', label: 'Otro' }
    ]
  });
}
