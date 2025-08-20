import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Arcana } from '../../interfaces/arcana';
import { arcanas } from '../../data/arcana';
import { IPersona } from '../../interfaces/persona';
import { PersonaStore } from '../../services/persona-store';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterMenuUtils } from './filter-menu.utils';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-filter-menu',
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './filter-menu.html',
  styleUrl: './filter-menu.css',
})
export class FilterMenu implements OnInit {
  @Input() personas!: IPersona[];

  readonly dialogRef = inject(MatDialogRef<FilterMenu>);
  readonly data = inject<{
    personas: IPersona[];
  }>(MAT_DIALOG_DATA);

  arcanaChoice: string = 'Toutes les arcanes';
  personaChoice: string = '';
  selectedArcana: any;
  arcanes: Arcana[] = arcanas;
  filterUtils!: FilterMenuUtils;

  constructor(private personaStore: PersonaStore) {}

  ngOnInit(): void {
    this.filterUtils = new FilterMenuUtils(
      this.personaStore,
      this.dialogRef,
      this.arcanaChoice,
      this.personaChoice
    );
  }
  
}
