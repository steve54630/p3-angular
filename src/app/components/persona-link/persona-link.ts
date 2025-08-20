import { Component, Input } from '@angular/core';
import { IPersona } from '../../interfaces/persona';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-persona-link',
  imports: [NgClass, RouterLink],
  templateUrl: './persona-link.html',
  styleUrl: './persona-link.css'
})
export class PersonaLink {

  @Input() persona! : IPersona
  hover : boolean = false

}
