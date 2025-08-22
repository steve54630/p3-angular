import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Api } from '../../services/api';
import { IPersona } from '../../interfaces/persona';
import { Loading } from '../loading/loading';
import { PersonaLink } from '../../components/persona-link/persona-link';
import { FilterMenu } from '../../components/filter-menu/filter-menu';
import { LucideAngularModule } from 'lucide-angular';
import { MatDialog } from '@angular/material/dialog';
import { Arcana } from '../../interfaces/arcana';
import { arcanas } from '../../data/arcana';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  imports: [Loading, PersonaLink, LucideAngularModule],
  templateUrl: './personas.html',
  styleUrl: './personas.css',
})
export class Personas implements OnInit {
  subscription!: Subscription;
  loading: boolean = true;
  private personaService = inject(Api);
  personas: IPersona[] = [];
  readonly dialog = inject(MatDialog);
  persona: IPersona | undefined;
  arcana: Arcana | undefined;

  constructor(protected route: ActivatedRoute) {}

  ngAfterViewInit() {
    const spans = document.querySelectorAll('.animate-wave');
    spans.forEach((elem) => {
      const span = elem as HTMLElement;
      const y = Math.random() * 10 + 5; // entre 5 et 15px
      const r = Math.random() * 6 - 3; // entre -3° et 3°
      span.style.setProperty('--y', `${y}px`);
      span.style.setProperty('--r', `${r}deg`);
    });
  }

  onHover(persona: IPersona | undefined) {
    this.persona = persona;
    this.arcana = persona
      ? arcanas.find((a) => a.key === persona.arcana)!
      : undefined;
  }

  openDialog() {
    const dialogRef = this.dialog.open(FilterMenu, {
      data: {
        personas: this.personas,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.personas = result;
    });
  }

  ngOnInit(): void {
    this.personas = this.route.snapshot.data['personas'];
    this.loading = false;
  }
}
