import { Component, OnInit } from '@angular/core';
import { IProfessionalXP } from '../../interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'professional-xp',
  templateUrl: './professional-xp.component.html',
  styleUrls: ['./professional-xp.component.scss']
})
export class ProfessionalXPComponent implements OnInit {

  public professionalXP: IProfessionalXP[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProfessionalXp().subscribe( professionalXP => {
      this.professionalXP = professionalXP;
    });
  }

}
