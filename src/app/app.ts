import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { PersonaStore } from './services/persona-store';
import { Loading } from "./features/loading/loading";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Loading],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('persona_compendium');

  constructor(protected personaStore: PersonaStore) {}
}
