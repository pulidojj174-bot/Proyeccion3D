import { Routes } from '@angular/router';
import { HomeLayout } from './layouts/home-layout/home-layout';
import { Home } from './home/home';
import { About } from './about/about';
import { Service } from './service/service';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

export const pagesRoutes: Routes = [
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: '',
        component: Home,
        data: {
          title: 'Ingeniería 3D, Impresión 3D y Diseño Mecánico',
          description: 'Proyección 3D S.A.S. BIC: especialistas en ingeniería inversa, impresión 3D profesional, escaneo láser, simulación FEA, diseño mecánico y fotogrametría por dron. Transformamos ideas en ingeniería de precisión en Colombia.',
          keywords: 'impresión 3D Colombia, ingeniería inversa, escaneo 3D láser, diseño mecánico, simulación FEA, fotogrametría dron, manufactura aditiva, Proyección 3D, prototipado rápido',
          image: 'https://proyeccion3-d-9wjy.vercel.app/assets/images/projects/HeaderProyeccion.png',
          type: 'website',
        }
      },
      {
        path: 'about',
        component: About,
        data: {
          title: 'Sobre Nosotros',
          description: 'Conoce al equipo de Proyección 3D: más de 3 años impulsando la innovación industrial con +250 proyectos completados, +500 modelos 3D y +50 clientes satisfechos. Ingenieros especializados en manufactura aditiva y diseño mecánico.',
          keywords: 'sobre nosotros, equipo ingenieros, Proyección 3D, Villamaría Caldas, experiencia industrial, Andrés Mosca, ingeniería mecánica Colombia, empresa BIC',
          image: 'https://proyeccion3-d-9wjy.vercel.app/assets/images/Nuestra_historia.png',
          type: 'website',
        }
      },
      {
        path: 'service',
        component: Service,
        data: {
          title: 'Servicios de Ingeniería y Manufactura 3D',
          description: 'Servicios especializados: ingeniería inversa con escaneo láser (±0.01mm), simulación FEA, diseño mecánico personalizado, impresión 3D en FDM/SLS, diseño de plantas industriales, piping P&ID, planos estructurales y fotogrametría por dron con LiDAR.',
          keywords: 'ingeniería inversa, escaneo 3D láser, simulación elementos finitos, diseño mecánico, impresión 3D FDM SLS, planos estructurales, piping P&ID, fotogrametría LiDAR dron, diseño plantas industriales, Proyección 3D servicios',
          image: 'https://proyeccion3-d-9wjy.vercel.app/assets/images/service/Ingenieria-inversa.webp',
          type: 'website',
        }
      },
      {
        path: 'project',
        component: Projects,
        data: {
          title: 'Portafolio de Proyectos',
          description: 'Explora +250 proyectos de ingeniería completados: análisis FEA, diseño mecánico de precisión, ingeniería conceptual, planos estructurales, ingeniería inversa, piping, impresión 3D y fotogrametría por dron. Casos de éxito con Ternium, Super y más.',
          keywords: 'portafolio ingeniería, proyectos diseño mecánico, casos éxito FEA, ingeniería inversa Colombia, impresión 3D industrial, Ternium, planos estructurales, proyectos manufactura',
          image: 'https://proyeccion3-d-9wjy.vercel.app/assets/images/projects/diseno-mecanico-6.jpg',
          type: 'website',
        }
      },
      {
        path: 'contact',
        component: Contact,
        data: {
          title: 'Contacto',
          description: 'Contáctanos para cotizar tu proyecto: impresión 3D, diseño mecánico, ingeniería inversa y más. Ubicados en Villamaría, Caldas, Colombia. Tel: +57 316 5882153. Lunes a Viernes 7am-6pm.',
          keywords: 'contacto Proyección 3D, cotización impresión 3D, cotización ingeniería, Villamaría Caldas Colombia, teléfono, email, formulario contacto',
          image: 'https://proyeccion3-d-9wjy.vercel.app/assets/images/photo-1581092160607-ee22621dd758.avif',
          type: 'website',
        }
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];
export default pagesRoutes;
