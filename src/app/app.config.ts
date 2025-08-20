import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { PersonaStore } from './services/persona-store';
import { firstValueFrom } from 'rxjs';
import { LucideAngularModule, icons } from 'lucide-angular'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(LucideAngularModule.pick(icons)),
    provideAppInitializer(() => {
      const personaStore = inject(PersonaStore);
      return firstValueFrom(personaStore.loadAll());
    }),
  ],
};
