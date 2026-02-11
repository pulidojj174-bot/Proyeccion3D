
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { inject } from '@angular/core';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string
  phone: string;
  service: string;
  message: string;
}

export interface ServiceOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, FloatLabelModule, InputTextModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactForm {
  title = input('Envianos un mensaje');
  serviceOptions = input<ServiceOption[]>([]);

  private fb = inject(FormBuilder);
  contactForm: FormGroup;
  isDropdownOpen = false;

  constructor() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s-]+$/)]],
      service: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  selectService(service: ServiceOption) {
    this.contactForm.patchValue({ service: service.value });
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  getSelectedServiceLabel(): string {
    const serviceValue = this.contactForm.get('service')?.value;
    const selected = this.serviceOptions().find(option => option.value === serviceValue);
    return selected ? selected.label : 'Selecciona un servicio';
  }

  // Métodos útiles para el template
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field?.errors) return '';

    // Mapeo de nombres de campos
    const fieldNames: { [key: string]: string } = {
      'firstName': 'Nombres',
      'lastName': 'Apellidos',
      'email': 'Correo',
      'phone': 'Numero de telefono',
      'service': 'Servicio',
      'message': 'Mensaje'
    };

    const fieldDisplayName = fieldNames[fieldName] || fieldName;

    // Prioridad de errores: required > pattern > minLength > email
    if (field.errors['required']) {
      return `${fieldDisplayName} es requerido`;
    }

    if (field.errors['pattern']) {
      return this.getPatternError(fieldName, fieldDisplayName);
    }

    if (field.errors['minlength']) {
      const requiredLength = field.errors['minlength'].requiredLength;
      const actualLength = field.errors['minlength'].actualLength;
      return `${fieldDisplayName} debe tener al menos ${requiredLength} caracteres (actual: ${actualLength})`;
    }

    if (field.errors['email']) {
      return 'Please enter a valid email address';
    }

    return '';
  }

  private getPatternError(fieldName: string, fieldDisplayName: string): string {
    const patternErrors: { [key: string]: string } = {
      'firstName': `${fieldDisplayName} solo puede contener letras y espacios`,
      'lastName': `${fieldDisplayName} solo puede contener letras y espacios`,
      'email': 'Por favor ingresa un correo válido (ej., usuario@dominio.com)',
      'phone': 'Por favor ingresa un número de teléfono válido (ej., +1 234 567 8900)',
      'service': 'Por favor selecciona una opción de servicio válida',
      'message': `${fieldDisplayName} contiene caracteres inválidos`
    };

    return patternErrors[fieldName] || `${fieldDisplayName} formato es invalido`;
  }
}
