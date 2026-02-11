import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.html',
  styleUrl: './footer-contact.scss'
})
export class FooterContact {
  contactInfo = {
    title: 'Contáctanos',
    address: {
      street: 'Calle 3 A #4-24',
      suite: 'Villamaría',
      city: 'Caldas, Colombia'
    },
    phone: '+57 316 5882153',
    email: 'productividadydiseno3d@gmail.com'
  };
}
