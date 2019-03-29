import { Component, OnInit } from '@angular/core';
import { INavbarLinks } from '../../interfaces';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('collapse', [
      state('collapsed', style({
        opacity: 0
      })),
      state('open', style({
        opacity: 1
      })),
      transition('open => collapsed', [
        animate('0.5s')
      ]),
      transition('collapsed => open', [
        animate('0.75s')
      ]),
    ])
  ]
})
export class NavbarComponent implements OnInit {

  public navbarLinks: INavbarLinks[];
  public collapsed: boolean = true;

  constructor() { }

  ngOnInit() {
    this.navbarLinks = [
      {
        href: '#profile-feature',
        linkText: 'Personal Profile'
      },
      {
        href: '#professional-xp-feature',
        linkText: 'Professional Experience'
      },
      {
        href: '#education-feature',
        linkText: 'Education'
      },
      {
        href: '#it-xp-feature',
        linkText: 'IT Experience'
      },
      {
        href: '#skills-feature',
        linkText: 'Language Skills'
      },
      {
        href: '#projects-feature',
        linkText: 'My Projects'
      }
    ];
  }

  toggleNavbar(): void {
    this.collapsed = !this.collapsed;
  }
}
