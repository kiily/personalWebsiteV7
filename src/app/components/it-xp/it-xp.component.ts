import { Component, OnInit } from '@angular/core';
import { IITXP } from '../../interfaces';
import { DataService } from '../../services/data.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'it-xp',
  templateUrl: './it-xp.component.html',
  styleUrls: ['./it-xp.component.scss']
})
export class ItXPComponent implements OnInit {

  private languages: IITXP[];
  private frameworks: IITXP[];
  private buildTools: IITXP[];
  private dataTools: IITXP[];

  private swiperConfig: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    scrollbar: false,
    navigation: true
  };
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProgrammingLanguages().subscribe( languages => {
      this.languages = languages;
    });

    this.dataService.getFrameworks().subscribe( frameworks => {
      this.frameworks = frameworks;
    });

    this.dataService.getWebDevTools().subscribe( buildTools => {
      this.buildTools = buildTools;
    });

    this.dataService.getDataTools().subscribe( dataTools => {
      this.dataTools = dataTools;
    });
  }

}
