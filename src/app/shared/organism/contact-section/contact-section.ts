
import { Component, input } from '@angular/core';
import { ContactForm, ServiceOption } from '../../molecules/contact-form/contact-form';
import { BusinessHour, BusinessHours } from '../../molecules/business-hours/business-hours';
import { ContactInfo, ContactInfoItem } from '../../molecules/contact-info/contact-info';

@Component({
  selector: 'app-contact-section',
  imports: [ContactInfo, ContactForm, BusinessHours],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss'
})
export class ContactSection {
  contactTitle = input<string>('Información de Contacto');
  contactSubtitle = input<string>('Completa el formulario o comunícate directamente a través de cualquiera de los canales a continuación.');
  contactItems = input<ContactInfoItem[]>([]);
  businessHours = input<BusinessHour[]>([]);
  formTitle = input<string>('Envianos un mensaje');
  serviceOptions = input<ServiceOption[]>([]);
  showBusinessHours = input<boolean>(true);

}
