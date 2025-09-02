import { Component, Input, OnInit } from '@angular/core';
import { IPersona, ResistType } from '../../interfaces/persona';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { LegendDialog } from '../legend-dialog/legend-dialog';

@Component({
  selector: 'app-resist-tab',
  imports: [CommonModule, MatButtonModule, MatTooltipModule],
  templateUrl: './resist-tab.html',
  styleUrl: './resist-tab.css',
})
export class ResistTab implements OnInit {

  constructor(private dialog: MatDialog) {}

  openLegendDialog() {
    this.dialog.open(LegendDialog, {
    width: '400px',
    panelClass: 'legend-dialog-container'
  });
  }

  getTypeClass(type: ResistType) {
    switch (type) {
      case 'wk':
        return 'text-red-500';
      case 'rs':
        return 'text-cyan-300';
      case 'rf':
        return 'text-cyan-200';
      case 'ab':
        return 'text-green-300';
      case 'nu':
        return 'text-white';
      default:
        return 'text-gray-400';
    }
  }
  ngOnInit(): void {
    const allElements = [
      'Slash',
      'Strike',
      'Pierce',
      'Fire',
      'Ice',
      'Electric',
      'Wind',
      'Light',
      'Dark',
    ];

    const standardized = allElements.map((element) => {
      if (this.persona.weak.includes(element)) return { element, type: 'weak' };
      if (this.persona.resists.includes(element))
        return { element, type: 'resist' };
      if (this.persona.reflects.includes(element))
        return { element, type: 'reflect' };
      if (this.persona.absorbs.includes(element))
        return { element, type: 'absorb' };
      if (this.persona.nullifies.includes(element))
        return { element, type: 'null' };
      return { element, type: 'neutral' };
    });

    this.resists = standardized as { element: string; type: ResistType }[];
  }

  @Input()
  persona!: IPersona;

  resists: { element: string; type: ResistType }[] = [];
}
