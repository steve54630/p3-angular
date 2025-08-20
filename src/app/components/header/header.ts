import { Component } from '@angular/core';
import { HeaderButton } from '../header-button/header-button';
import { PersonaStore } from '../../services/persona-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [HeaderButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(protected personaStore: PersonaStore, private router: Router) {}

  getRandomPersona = (): void => {
    this.router.navigate([`/personas/${this.personaStore.getRandomPersona()}`]);
  }
}
