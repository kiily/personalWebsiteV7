import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  public welcomeTitle: string;
  public welcomeSubtitle: string;

  constructor() { }

  ngOnInit() {
    this.welcomeTitle = 'Hi, my name is Miguel';
    this.welcomeSubtitle = 'Turning Coffee and Food into Software';
  }

}
