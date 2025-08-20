import { Component, Input, OnInit } from '@angular/core';
import { IPersona, ResistType } from '../../interfaces/persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resist-tab',
  imports: [CommonModule],
  templateUrl: './resist-tab.html',
  styleUrl: './resist-tab.css',
})
export class ResistTab implements OnInit {
  getTypeClass(type: ResistType) {
    switch (type) {
      case 'wk':
        return 'text-red-500';
      case 'rs':
        return 'text-green-500';
      case 'rf':
        return 'text-blue-500';
      case 'ab':
        return 'text-yellow-500';
      case 'nu':
        return 'text-purple-500';
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
      'Wind',
      'Electric',
      'Light',
      'Dark',
    ];

    const standardized = allElements.map((element) => {
      if (this.persona.weak.includes(element)) return { element, type: 'wk' };
      if (this.persona.resists.includes(element))
        return { element, type: 'rs' };
      if (this.persona.reflects.includes(element))
        return { element, type: 'rf' };
      if (this.persona.absorbs.includes(element))
        return { element, type: 'ab' };
      if (this.persona.nullifies.includes(element))
        return { element, type: 'nu' };
      return { element, type: ' ' };
    });

    this.resists = standardized as { element: string; type: ResistType }[];
  }

  @Input()
  persona!: IPersona;

  resists: { element: string; type: ResistType }[] = [];
}
