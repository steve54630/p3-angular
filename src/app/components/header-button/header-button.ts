import { NgClass } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-button',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header-button.html',
  styleUrl: './header-button.css',
})
export class HeaderButton implements OnInit {

  @Input() link: string | undefined;
  @Input() call : (() => void) | undefined
  isActive: boolean = false;

  ngOnInit(): void {
    this.checkMobile();
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(_: Event) {
    this.checkMobile();
  }

  @Input() title: string = '';
  hover: boolean = false;
  isMobile: boolean = false;
}
