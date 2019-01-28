import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { DataService } from '../services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { EducationComponent } from './education/education.component';
import { ProfessionalXPComponent } from './professional-xp/professional-xp.component';
import { ProfessionalXPCardComponent } from './professional-xpcard/professional-xpcard.component';
import { ItXPComponent } from './it-xp/it-xp.component';
import { ItCardComponent } from './it-card/it-card.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';

const COMPONENTS = [
  NavbarComponent,
  JumbotronComponent,
  BusinessCardComponent,
  PersonalProfileComponent,
  EducationComponent,
  ProfessionalXPComponent,
  ProfessionalXPCardComponent,
  ItXPComponent,
  ItCardComponent,
  SkillsComponent,
  ProjectsComponent
];

const SERVICES = [
  DataService
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
