import { Component, Input, OnInit } from '@angular/core';
import { IPersona } from '../../interfaces/persona';

@Component({
  selector: 'app-stat-bar',
  imports: [],
  templateUrl: './stat-bar.html',
  styleUrl: './stat-bar.css',
})
export class StatBar {
  @Input()
  persona!: IPersona;

  get stats(): {stat : string, value : number}[] {
    let statsPersona = Object.entries(this.persona).filter(
      ([key, value]) =>
        ['strength', 'magic', 'endurance', 'agility', 'luck'].includes(key) &&
        typeof value === 'number'
    ) as [string, number][];

    return statsPersona.map(([key, value]) => ({
      stat : key.charAt(0).toUpperCase() + key.charAt(1).toLowerCase(),
      value,
    }));
  }
}
