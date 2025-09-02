import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Router, RouterLink } from '@angular/router';
import { PersonaStore } from '../../services/persona-store';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [Button, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(protected store: PersonaStore, protected router: Router) {}

  getRandomPersona(): void {
    this.store
      .getRandomPersona$()
      .subscribe((id) => this.router.navigate([`/personas/${id}`]));
  }
}
