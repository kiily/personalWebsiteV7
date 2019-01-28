import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ILanguageSkills } from '../../interfaces';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  private languageSkills: ILanguageSkills[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getLanguageSkillsData().subscribe( languageSkills => {
      this.languageSkills = languageSkills;
      console.log('this.lnaguage', this.languageSkills, languageSkills);
    });
  }

}
