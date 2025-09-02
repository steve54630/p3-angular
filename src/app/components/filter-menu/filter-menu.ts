import { Component, EventEmitter, Inject, inject, Input, OnInit, Output } from '@angular/core';
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
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FavorisStore } from '../../services/favoris-store';
import { IPersonaProvider } from '../../interfaces/personaProvider';

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
    MatDialogActions
  ],
  templateUrl: './filter-menu.html',
  styleUrl: './filter-menu.css',
})
export class FilterMenu implements OnInit {
  @Input() personas!: IPersona[];
  @Input() personaStore!: IPersonaProvider;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { personas: IPersona[] },
    private dialogRef: MatDialogRef<FilterMenu>
  ) {}

  selectedArcana: any;
  arcanes: Arcana[] = arcanas;
  filterUtils!: FilterMenuUtils;

  ngOnInit(): void {
    this.filterUtils = new FilterMenuUtils(
      this.data.personas,
      this.dialogRef
    );
  }
  
}
