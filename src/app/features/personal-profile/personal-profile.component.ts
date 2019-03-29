import { Component, OnInit } from '@angular/core';
import { IBusinessCard, IPersonalData } from './../../interfaces';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {

  public businessCardConfig: IBusinessCard;
  public personalIntro: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.dataService.getPersonalData().subscribe( (personalData: IPersonalData) => {
      this.businessCardConfig = personalData.businessCard;
      this.personalIntro = personalData.introText;
    });
  }

}
