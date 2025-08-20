import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPersona } from '../interfaces/persona';
import { catchError, map, Observable } from 'rxjs';
import { ApiReponse } from '../interfaces/api-reponse';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private url: string = 'https://persona-compendium.onrender.com';

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<IPersona[]> {
    return this.http.get<IPersona[]>(`${this.url}/personas`).pipe(
      catchError((err) => {
        console.warn('API failed, using local JSON fallback', err);
        return this.http.get<IPersona[]>('/personas.json');
      })
    )
  }

  getPersona(serve: string): Observable<IPersona> {
    return this.http.get<IPersona>(`${this.url}/personas/${serve}`).pipe(
      catchError((err) => {
        console.warn('API failed, using local JSON fallback', err);
        return this.http
          .get<IPersona[]>(`/personas.json`)
          .pipe(
            map(
              (personas) => personas.find((persona) => persona.query == serve)!
            )
          );
      })
    );
  }

  getLinks(): Observable<ApiReponse> {
    return this.http.get<ApiReponse>(`${this.url}`);
  }
}
