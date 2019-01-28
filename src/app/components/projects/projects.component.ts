import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { IProject } from '../../interfaces';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: IProject[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProjects().subscribe( projects => {
      this.projects = projects;
    });
  }

}
