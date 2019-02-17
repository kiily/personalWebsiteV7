import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = `Miguel's website`;
  public currentScrollPosition: number = 0;
  public showNavbar: boolean = true;

  onAppScroll(event): void {
    const newScrollPosition = event.target.scrollTop;
    if ( newScrollPosition > this.currentScrollPosition) {
      // Scrolling down, hide the navbar
      this.showNavbar = false;
    } else {
      // Scrolling up, show the navbar
      this.showNavbar = true;
    }
    this.currentScrollPosition = newScrollPosition;
  }
}
