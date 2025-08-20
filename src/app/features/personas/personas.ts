import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Api } from '../../services/api';
import { IPersona } from '../../interfaces/persona';
import { Loading } from '../loading/loading';
import { PersonaLink } from '../../components/persona-link/persona-link';
import { FilterMenu } from '../../components/filter-menu/filter-menu';
import { LucideAngularModule } from 'lucide-angular';
import { MatDialog } from '@angular/material/dialog';

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
  
  openDialog() {
    const dialogRef = this.dialog.open(FilterMenu, {
      data: {
        personas: this.personas,
      },
    })

    dialogRef.afterClosed().subscribe(result => {
      this.personas = result;
    });
  }

  ngOnInit(): void {
    this.subscription = this.personaService.getPersonas().subscribe({
      next: (personas) => {
        (this.personas = personas), (this.loading = false);
      },
      error: (error) => console.log(error),
    });
  }
}
