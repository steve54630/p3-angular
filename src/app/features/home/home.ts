import { Component } from '@angular/core';
import { Button } from "../../components/button/button";
import { RouterLink } from '@angular/router';
import { PersonaStore } from '../../services/persona-store';

@Component({
  selector: 'app-home',
  imports: [Button, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private store: PersonaStore) {}

  getRandomPersona(): string | undefined {
    return this.store.getRandomPersona();
  }

}
