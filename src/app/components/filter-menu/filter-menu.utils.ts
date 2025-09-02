import { MatDialogRef } from '@angular/material/dialog';
import { FilterMenu } from './filter-menu';
import { IPersona } from '../../interfaces/persona';

export class FilterMenuUtils {
  arcanaChoice: string = 'Toutes les arcanes';
  personaChoice: string = '';

  private originalPersonas: IPersona[];

  constructor(
    originalPersonas: IPersona[],
    protected dialogRef: MatDialogRef<FilterMenu>
  ) {
    this.originalPersonas = originalPersonas;
  }

  applyFilters() {
    const filtered = this.originalPersonas.filter(
      (persona) =>
        (this.arcanaChoice === 'Toutes les arcanes' || persona.arcana === this.arcanaChoice) &&
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
    this.dialogRef.close(this.originalPersonas); // on revient à l’original
  }
}
