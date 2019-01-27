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
    ]
  }
}
