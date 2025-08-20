import { Injectable } from '@angular/core';
import { IPersona } from '../interfaces/persona';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavorisStore {

  private key = 'favoris'
  private favoris$ = new BehaviorSubject<IPersona[]>([])

  constructor() { 
    const favoris = localStorage.getItem(this.key)
    if (favoris) {
      this.favoris$.next(JSON.parse(favoris))
    }
  }

  getAll(): Observable<IPersona[]> {
    return this.favoris$.asObservable()
  }

  add(persona: IPersona) {
    const updated = [...this.favoris$.value, persona]
    this.favoris$.next(updated)
    this.save(updated)
  }

  remove(persona: IPersona) {
    const updated = this.favoris$.value.filter(p => p.id !== persona.id)
    this.favoris$.next(updated)
    this.save(updated)
  }

  save(data: IPersona[]) {
    localStorage.setItem(this.key, JSON.stringify(data))
  }
  
  isFavorite(persona: IPersona): boolean {
    return this.favoris$.value.some(p => p.id === persona.id)
  }
}
