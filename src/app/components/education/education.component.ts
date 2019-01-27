import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { IQualification } from './../../interfaces';


@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  public qualifications: IQualification[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getQualifications().subscribe( qualifications => {
      this.qualifications = qualifications;
    });
  }

}
