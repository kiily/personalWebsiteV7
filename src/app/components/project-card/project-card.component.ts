import { Component, OnInit, Input } from '@angular/core';
import { IProject } from 'src/app/interfaces';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: IProject;

  constructor() { }

  ngOnInit() {
  }

}
