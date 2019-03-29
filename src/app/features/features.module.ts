import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { DataService } from '../services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { EducationComponent } from './education/education.component';
import { ProfessionalXPComponent } from './professional-xp/professional-xp.component';
import { ItXPComponent } from './it-xp/it-xp.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ComponentsModule } from '../components/components.module';

const FEATURES = [
  NavbarComponent,
  JumbotronComponent,
  PersonalProfileComponent,
  EducationComponent,
  ProfessionalXPComponent,
  ItXPComponent,
  SkillsComponent,
  ProjectsComponent
];

const SERVICES = [
  DataService
];

@NgModule({
  declarations: [
    ...FEATURES
  ],
  imports: [
    CommonModule,
    SwiperModule,
    ComponentsModule
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...FEATURES
  ]
})
export class FeaturesModule { }
