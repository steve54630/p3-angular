import { Component, inject, OnInit } from '@angular/core';
import { ResistTab } from '../../components/resist-tab/resist-tab';
import { IPersona } from '../../interfaces/persona';
import { StatBar } from '../../components/stat-bar/stat-bar';
import { PersonaHeader } from '../../components/persona-header/persona-header';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Api } from '../../services/api';
import { Loading } from '../loading/loading';
import { FavorisStore } from '../../services/favoris-store';

@Component({
  selector: 'app-persona',
  imports: [ResistTab, StatBar, PersonaHeader, Loading],
  templateUrl: './persona.html',
  styleUrl: './persona.css',
})
export class Persona implements OnInit {
  id: string = '';
  subscription: Subscription = new Subscription();
  loading: boolean = true;
  private personaService = inject(Api);
  persona!: IPersona;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.loading = true;
          this.id = params.get('serve')!;
          return this.personaService.getPersona(this.id);
        })
      )
      .subscribe({
        next: (persona) => {
          this.persona = persona;
          this.loading = false;
        },
        error: (error) => {
          console.log(error);
          this.loading = false;
        },
      });
  }

}
