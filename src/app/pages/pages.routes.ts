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
          title: "Inicio",
          description: "Proyección 3D: soluciones integrales de ingeniería, impresión 3D profesional, escaneo 3D, diseño mecánico, simulación FEA y fotogrametría por dron.",
          keywords: "impresión 3D, ingeniería inversa, escaneo 3D, diseño mecánico, simulación FEA, proyección 3D, Colombia",
        }
      },
      {
        path: 'about',
        component: About,
        data: {
          title: "Nosotros",
          description: "Conoce a Proyección 3D: equipo de ingenieros especializados en manufactura aditiva, diseño mecánico e ingeniería inversa con tecnología de vanguardia.",
          keywords: "nosotros, equipo, ingenieros, proyección 3D, experiencia, manufactura aditiva",
        }
      },
      {
        path: 'service',
        component: Service,
        data: {
          title: "Servicios",
          description: "Servicios de ingeniería: impresión 3D, escaneo 3D, simulación FEA, diseño mecánico, piping, planos estructurales y fotogrametría por dron.",
          keywords: "servicios, impresión 3D, escaneo 3D, FEA, diseño mecánico, piping, planos estructurales, fotogrametría, dron",
        }
      },
      {
        path: 'project',
        component: Projects,
        data: {
          title: "Proyectos",
          description: "Portafolio de proyectos de ingeniería y manufactura 3D: diseño mecánico, simulación, ingeniería inversa y más. Casos de éxito reales.",
          keywords: "proyectos, portafolio, ingeniería, manufactura 3D, casos de éxito, diseño mecánico",
        }
      },
      {
        path: 'contact',
        component: Contact,
        data: {
          title: "Contacto",
          description: "Contáctanos para cotizar tu proyecto de ingeniería, impresión 3D o diseño mecánico. Respuesta rápida y asesoría personalizada.",
          keywords: "contacto, cotización, impresión 3D, ingeniería, asesoría, proyección 3D",
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
