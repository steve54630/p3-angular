import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Personas } from './features/personas/personas';
import { Persona } from './features/persona/persona';
import { MainLayout } from './layout/main-layout/main-layout';
import { Favorites } from './features/favorites/favorites';

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
      },
      {
        path: 'personas/:serve',
        component: Persona,
      },
      {
        path: 'favorites',
        component: Favorites,
      },
    ],
  },
];
