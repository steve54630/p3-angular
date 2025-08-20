import { Injectable } from '@angular/core';
import { IPersona } from '../interfaces/persona';
import { Api } from './api';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaStore {
  personas: IPersona[] = [];
  loaded = false;

  constructor(private personaService: Api) {}

  loadAll(): Observable<IPersona[]> {
    return this.personaService.getPersonas().pipe(
      tap((personas) => {
        this.personas = personas;
        this.loaded = true;
      })
    );
  }

  getRandomPersona(): string | undefined {
    if (this.personas.length === 0) return undefined; // pas encore chargé
    const index = Math.floor(Math.random() * this.personas.length);
    return this.personas[index].query;
  }

  getNextPersona(persona: IPersona): string {
    const index = this.personas.findIndex((p) => p.id === persona.id);
    const nextIndex = (index + 1) % this.personas.length;
    return this.personas[nextIndex].query;
  }

  getPreviousPersona(persona: IPersona): string {
    const index = this.personas.findIndex((p) => p.id === persona.id);
    const prevIndex = (index - 1 + this.personas.length) % this.personas.length;
    return this.personas[prevIndex].query;
  }
}
