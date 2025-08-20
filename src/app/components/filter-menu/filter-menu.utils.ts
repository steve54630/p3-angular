
import { PersonaStore } from '../../services/persona-store';
import { IPersona } from '../../interfaces/persona';
import { EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FilterMenu } from './filter-menu';

export class FilterMenuUtils {
  constructor(
    protected personaStore: PersonaStore,
    protected dialogRef: MatDialogRef<FilterMenu>,
    protected arcanaChoice: string,
    protected personaChoice: string
  ) {}
  applyFilters() {
    const filtered = this.personaStore.personas.filter(
      (persona) =>
        (this.arcanaChoice === 'Toutes les arcanes' ||
          persona.arcana === this.arcanaChoice) &&
        persona.name.toLowerCase().includes(this.personaChoice.toLowerCase())
    );
    this.dialogRef.close(filtered);
  }
  personaFilter(event: Event) {
    this.personaChoice = (event.target as HTMLInputElement).value;
  }

  arcaneFilter(choice: string) {
    this.arcanaChoice = choice;
  }
  
  reset() {
    this.arcanaChoice = 'Toutes les arcanes';
    this.personaChoice = '';
    this.applyFilters();
  }
}
