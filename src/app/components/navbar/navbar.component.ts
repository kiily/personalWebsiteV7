import { Component, OnInit } from '@angular/core';
import { INavbarLinks } from '../../interfaces';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navbarLinks: INavbarLinks[];

  constructor() { }

  ngOnInit() {
    this.navbarLinks = [
      {
        href: '#profile',
        linkText: 'Personal Profile'
      },
      {
        href: '#professional-xp',
        linkText: 'Professional Experience'
      },
      {
        href: '#it-xp',
        linkText: 'IT Experience'
      },
      {
        href: '#skills',
        linkText: 'Language Skills'
      },
      {
        href: '#projects',
        linkText: 'My Projects'
      }
    ]
  }
}
