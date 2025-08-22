import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersona } from '../../interfaces/persona';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { FavorisStore } from '../../services/favoris-store';

@Component({
  selector: 'app-persona-link',
  imports: [NgClass, RouterLink, MatIcon],
  templateUrl: './persona-link.html',
  styleUrl: './persona-link.css',
})
export class PersonaLink {
  @Input() persona!: IPersona;
  @Output() personaHover = new EventEmitter<IPersona | undefined>();
  hover: boolean = false;
  get isFavorite(): boolean {
    return this.favorisStore.isFavorite(this.persona);
  }

  constructor(protected router: Router, private favorisStore: FavorisStore) {}

  onMouseEnter() {
    this.personaHover.emit(this.persona);
  }

  onMouseLeave() {
    this.personaHover.emit(undefined);
  }
}
