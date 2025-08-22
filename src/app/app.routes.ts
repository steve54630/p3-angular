import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Personas } from './features/personas/personas';
import { Persona } from './features/persona/persona';
import { MainLayout } from './layout/main-layout/main-layout';
import { personasResolver } from './resolvers/personasResolver';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'personas',
        component: Personas,
        resolve: { personas: personasResolver },
      },
      {
        path: 'personas/:serve',
        component: Persona,
      },
      {
        path: 'favorites',
        component: Personas,
        resolve: { personas: personasResolver },
      },
    ],
  },
];
