import { Injectable } from '@angular/core';
import { IPersona } from '../interfaces/persona';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPersonaProvider } from '../interfaces/personaProvider';

@Injectable({
  providedIn: 'root'
})
export class FavorisStore implements IPersonaProvider {

  private key = 'favoris'
  personas$ = new BehaviorSubject<IPersona[]>([])

  constructor() { 
    const favoris = localStorage.getItem(this.key)
    if (favoris) {
      this.personas$.next(JSON.parse(favoris))
    }
  }

  getAll(): Observable<IPersona[]> {
    return this.personas$.asObservable()
  }

  add(persona: IPersona) {
    const updated = [...this.personas$.value, persona]
    this.personas$.next(updated)
    this.save(updated)
  }

  remove(persona: IPersona) {
    const updated = this.personas$.value.filter(p => p.id !== persona.id)
    this.personas$.next(updated)
    this.save(updated)
  }

  save(data: IPersona[]) {
    localStorage.setItem(this.key, JSON.stringify(data))
  }
  
  isFavorite(persona: IPersona): boolean {
    return this.personas$.value.some(p => p.id === persona.id)
  }
}
