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
          title: "home",
          description: "Welcome to the home page of our application. Here you can find various features and functionalities that we offer.",
          keywords: "home, welcome, features, functionalities",
        }
      },
      {
        path: 'about',
        component: About,
        data: {
          title: "about",
          description: "Learn more about our application, its purpose, and the team behind it.",
          keywords: "about, application, team, purpose",
        }
      },
      {
        path: 'service',
        component: Service,
        data: {
          title: "service",
          description: "Discover the services we offer to enhance your experience with our application.",
          keywords: "service, offerings, features, enhancements",
        }
      },
      {
        path: 'project',
        component: Projects,
        data: {
          title: "project",
          description: "Explore our projects to see the work we have done and the impact we are making.",
          keywords: "project, work, impact, exploration",
        }
      },
      {
        path: 'contact',
        component: Contact,
        data: {
          title: "contact",
          description: "Get in touch with us for any inquiries, feedback, or support related to our application.",
          keywords: "contact, inquiries, feedback, support",
        }
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'  // Redirect any unknown paths to the home page
      }
    ]
  }
];
export default pagesRoutes;
