import { Component, HostListener, Input } from '@angular/core';
import { Arcana } from '../../interfaces/arcana';
import { arcanas } from '../../data/arcana';
import { IPersona } from '../../interfaces/persona';
import { Router, RouterLink } from '@angular/router';
import { PersonaStore } from '../../services/persona-store';
import { FavorisStore } from '../../services/favoris-store';
import {MatIconModule} from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-persona-header',
  imports: [RouterLink, MatIconModule],
  templateUrl: './persona-header.html',
  styleUrl: './persona-header.css',
})
export class PersonaHeader {
  @Input()
  persona!: IPersona;

  constructor(
    private router: Router,
    protected personaStore: PersonaStore,
    protected favorisStore: FavorisStore
  ) {}

  get arcana(): Arcana {
    return arcanas.find((a) => a.key === this.persona.arcana)!;
  }

  get isFavorite(): boolean {
    return this.favorisStore.isFavorite(this.persona);
  }

  toggleFavoris(persona: IPersona) {
    console.log(this.favorisStore.isFavorite(persona));
    if (this.favorisStore.isFavorite(persona)) {
      this.favorisStore.remove(persona);
    } else {
      this.favorisStore.add(persona);
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleArrow(event: KeyboardEvent) {
    const tag = (event.target as HTMLElement).tagName;

    if (
      tag === 'INPUT' ||
      tag === 'TEXTAREA' ||
      (event.target as HTMLElement).isContentEditable
    )
      return;

    event.preventDefault();

    switch (event.key) {
      case 'ArrowRight':
        this.router.navigate([
          `/personas/${this.personaStore.getNextPersona(this.persona)}`,
        ]);
        break;
      case 'ArrowLeft':
        this.router.navigate([
          `/personas/${this.personaStore.getPreviousPersona(this.persona)}`,
        ]);
        break;
      default:
        return;
    }
  }
}
