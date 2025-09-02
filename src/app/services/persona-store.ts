import { Injectable } from '@angular/core';
import { IPersona } from '../interfaces/persona';
import { Api } from './api';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { IPersonaProvider } from '../interfaces/personaProvider';

@Injectable({
  providedIn: 'root',
})
export class PersonaStore implements IPersonaProvider {
  personas$ = new BehaviorSubject<IPersona[]>([]);
  loaded = false;

  constructor(private personaService: Api) {}

  // Charge toutes les personas et met à jour le BehaviorSubject
  loadAll(): Observable<IPersona[]> {
    return this.personaService.getPersonas().pipe(
      tap((personas) => {
        this.personas$.next(personas);
        this.loaded = true;
      })
    );
  }

  // Observable de toutes les personas
  getAll(): Observable<IPersona[]> {
    return this.personas$.asObservable();
  }

  // Observable d'une persona aléatoire
  getRandomPersona$(): Observable<string | undefined> {
    return this.personas$.pipe(
      map((personas) => {
        if (!personas || personas.length === 0) return undefined;
        const index = Math.floor(Math.random() * personas.length);
        return personas[index].query;
      })
    );
  }

  // Observable de la prochaine persona
  getNextPersona$(current: IPersona): Observable<string | undefined> {
    return this.personas$.pipe(
      map((personas) => {
        if (!personas || personas.length === 0) return undefined;
        const index = personas.findIndex((p) => p.id === current.id);
        const nextIndex = (index + 1) % personas.length;
        return personas[nextIndex].query;
      })
    );
  }

  // Observable de la persona précédente
  getPreviousPersona$(current: IPersona): Observable<string | undefined> {
    return this.personas$.pipe(
      map((personas) => {
        if (!personas || personas.length === 0) return undefined;
        const index = personas.findIndex((p) => p.id === current.id);
        const prevIndex = (index - 1 + personas.length) % personas.length;
        return personas[prevIndex].query;
      })
    );
  }
}
