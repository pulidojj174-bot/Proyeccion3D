# 📋 Reporte de Auditoría - Cumplimiento de AGENTS.md

**Fecha de auditoría**: 11 de febrero de 2026  
**Estado**: ⚠️ **INCUMPLIMIENTOS DETECTADOS**

---

## 📊 Resumen Ejecutivo

El proyecto **NO cumple** completamente con las instrucciones especificadas en `AGENTS.md`. Se han identificado **múltiples incumplimientos críticos y no críticos** en:

- ❌ **Decoradores de componentes** (falta `changeDetection: ChangeDetectionStrategy.OnPush`)
- ❌ **Inputs/Outputs** (uso de decoradores en lugar de funciones)
- ❌ **Inyección de dependencias** (constructor en lugar de `inject()`)
- ❌ **Plantillas** (uso de `[ngStyle]`)
- ❌ **Standalone components** (`standalone: true` explícito)

---

## 🔴 Incumplimientos Críticos

### 1. **Falta de `changeDetection: ChangeDetectionStrategy.OnPush`**

**Severidad**: 🔴 CRÍTICA  
**Ubicación**: Todos los componentes  
**Expectativa**: `Set changeDetection: ChangeDetectionStrategy.OnPush in @Component decorator`

### Afectados:
- `src/app/app.ts`
- `src/app/pages/home/home.ts`
- `src/app/pages/about/about.ts`
- `src/app/pages/contact/contact.ts`
- `src/app/pages/projects/projects.ts`
- `src/app/pages/service/service.ts`
- `src/app/pages/layouts/home-layout/home-layout.ts`
- **Todos** los componentes en `src/app/shared/molecules/`
- **Todos** los componentes en `src/app/shared/organism/`
- **Todos** los componentes en `src/app/shared/templates/`

**Impacto**: Sin OnPush, cada cambio en el árbol de componentes dispara detección de cambios completa, afectando rendimiento.

---

### 2. **Uso de decoradores `@Input()` y `@Output()` en lugar de funciones**

**Severidad**: 🔴 CRÍTICA  
**Ubicación**: Múltiples componentes  
**Expectativa**: `Use input() and output() functions instead of decorators`

### Ejemplos encontrados:

#### `contact-form.ts` (líneas 27-28)
```typescript
// ❌ INCORRECTO
@Input() title: string = 'Envianos un mensaje';
@Input() serviceOptions: ServiceOption[] = [];
```
Debería ser:
```typescript
// ✅ CORRECTO
title = input<string>('Envianos un mensaje');
serviceOptions = input<ServiceOption[]>([]);
```

#### `testimonial-carousel.ts` (líneas 15-19)
```typescript
// ❌ INCORRECTO
@Input() title: string = 'Lo Que Dicen Nuestros Clientes';
@Input() subtitle: string = 'Hemos ayudado a empresas...';
@Input() autoPlay: boolean = true;
@Input() autoPlayInterval: number = 5000;
@Input() pauseOnHover: boolean = true;
```

#### `service-carousel.ts` (líneas 13-17)
```typescript
// ❌ INCORRECTO
@Input() title: string = 'Nuestros Servicios';
@Input() subtitle: string = 'Descubre nuestras soluciones...';
@Input() autoPlay: boolean = true;
@Input() autoPlayInterval: number = 5000;
@Input() pauseOnHover: boolean = true;
```

#### `footer-brand.ts` (líneas 12-18)
```typescript
// ❌ INCORRECTO
@Input() title: string = 'Proyección 3D S.A.S. BIC';
@Input() description: string = '';
@Input() logo: string = 'assets/images/logos/P3D.png';
@Input() logoAlt: string = 'Logo Proyección 3D';
@Input() showLogo: boolean = true;
@Input() logoWidth: number = 60;
@Input() logoHeight: number = 60;
```

**Impacto**: Los decoradores son más verbosos y menos type-safe que las funciones de signals.

---

### 3. **Inyección de dependencias mediante constructor en lugar de `inject()`**

**Severidad**: 🔴 CRÍTICA  
**Ubicación**: Múltiples componentes  
**Expectativa**: `Use the inject() function instead of constructor injection`

### Ejemplos encontrados:

#### `contact-form.ts` (línea 34)
```typescript
// ❌ INCORRECTO
constructor(private fb: FormBuilder) {
  this.contactForm = this.fb.group({...});
}
```
Debería ser:
```typescript
// ✅ CORRECTO
private fb = inject(FormBuilder);

ngOnInit() {
  this.contactForm = this.fb.group({...});
}
```

#### `testimonial-carousel.ts` (línea 27)
```typescript
// ❌ INCORRECTO
constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
```
Debería ser:
```typescript
// ✅ CORRECTO
private platformId = inject(PLATFORM_ID);
```

#### `service-carousel.ts` (línea 25)
```typescript
// ❌ INCORRECTO
constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
```

**Impacto**: Constructor injection es más verboso y menos compatible con lazy initialization.

---

### 4. **Uso de `[ngStyle]` en plantillas**

**Severidad**: 🔴 CRÍTICA  
**Ubicación**: `src/app/shared/molecules/hero-header/hero-header.html`  
**Expectativa**: `Do NOT use ngStyle, use style bindings instead`

#### `hero-header.html` (línea 1 y 10)
```html
<!-- ❌ INCORRECTO -->
<section [class]="containerClasses()" [ngStyle]="containerStyles">
  ...
  <article class="page-hero__overlay page-hero__fade-in" [ngStyle]="overlayStyles">
```

Debería ser:
```html
<!-- ✅ CORRECTO -->
<section [class]="containerClasses()" [style]="containerStyles">
  ...
  <article class="page-hero__overlay page-hero__fade-in" [style]="overlayStyles">
```

**Impacto**: `[ngStyle]` requiere DirectiveModule adicional y es más lento que style bindings directos.

---

## 🟡 Incumplimientos No Críticos

### 5. **`standalone: true` explícito en componentes**

**Severidad**: 🟡 ADVERTENCIA  
**Ubicación**: 2 componentes  
**Expectativa**: `Must NOT set standalone: true inside Angular decorators. It's the default in Angular v20+`

### Afectados:
1. `src/app/shared/molecules/contact-form/contact-form.ts` (línea 22)
2. `src/app/shared/organism/testimonial-carousel/testimonial-carousel.ts` (línea 8)

```typescript
// ❌ NO NECESARIO (Angular 21 ya lo tiene por defecto)
@Component({
  selector: 'app-contact-form',
  standalone: true,  // ← REMOVE
  imports: [ReactiveFormsModule, FloatLabelModule, InputTextModule],
  ...
})
```

**Impacto**: Código redundante, aunque funciona.

---

### 6. **Mezcla de patrones antiguo/nuevo en inputs**

**Severidad**: 🟡 ADVERTENCIA  
**Ubicación**: `hero-header.ts`  
**Observación**: Mezcla `@Input()` decorator con `input()` function en el mismo componente

```typescript
// ❌ INCONSISTENTE
@Component({...})
export class HeroHeader {
  // Viejo
  @Input() title: string = '';
  
  // Nuevo
  description = input<string>();
  
  // Mix de ambos patrones
}
```

---

## 📋 Checklist de Cumplimiento

| Requisito | Estado | Archivos Afectados |
|-----------|--------|-------------------|
| **TypeScript strict** | ✅ OK | - |
| **Standalone components** | 🔴 2 con `standalone: true` | contact-form, testimonial-carousel |
| **changeDetection: OnPush** | 🔴 0/~40 componentes | TODOS |
| **input() functions** | 🔴 Muchos usan @Input | contact-form, testimonial-carousel, service-carousel, footer-brand, +más |
| **output() functions** | ⚠️ Requiere revisión | - Por revisar |
| **computed() para estado derivado** | ✅ Se usa en algunos | - |
| **Signals para estado** | ✅ Se usa | navbar, carousels |
| **Lazy loading rutas** | ✅ OK | app.routes.ts |
| **No @HostBinding/@HostListener** | ✅ OK | - |
| **NgOptimizedImage para imágenes** | ⚠️ Requiere revisión | - Por revisar |
| **No ngClass** | ✅ OK | - |
| **No ngStyle** | 🔴 2 usos | hero-header.html |
| **Plantillas con @if/@for** | ✅ OK | Se usa control flow moderno |
| **inject() función** | 🔴 Usa constructor | contact-form, testimonials, service-carousel |
| **providedIn: 'root'** | ⚠️ Requiere revisión | Services folder está vacío |
| **Accessibility - AXE** | ⚠️ No verificado | - Por validar |
| **WCAG AA** | ⚠️ No verificado | - Por validar |

---

## 🔧 Recomendaciones por Prioridad

### Prioridad 1 - CRÍTICA (Hacer ahora):
1. Agregar `changeDetection: ChangeDetectionStrategy.OnPush` a TODOS los componentes
2. Reemplazar `@Input()` by `input()` functions
3. Reemplazar constructor injection por `inject()`
4. Cambiar `[ngStyle]` por `[style]` en templates

### Prioridad 2 - IMPORTANTE (Próximo sprint):
5. Remover `standalone: true` explícito
6. Auditar accesibilidad (AXE, WCAG AA)
7. Revisar `NgOptimizedImage` para todas las imágenes

### Prioridad 3 - MEJORA (Cuando sea posible):
8. Documentar services pattern (carpeta vacía)
9. Consistencia en uso de patterns oldnew

---

## 📝 Notas

- **Angular version**: 21.1.4 ✅
- **TypeScript version**: Con strict mode ✅
- **Frameworks**: PrimeNG, Tailwind CSS
- **Estructura**: Bien organizada (core, pages, shared) ✅

---

**Próximos pasos**: 
1. Priorizar correcciones críticas
2. Crear subtareas para cada sección
3. Establecer revisión de código para nuevos cambios
