import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { EducationComponent } from './education/education.component';
import { ProfessionalXPComponent } from './professional-xp/professional-xp.component';
import { ProfessionalXPCardComponent } from './professional-xpcard/professional-xpcard.component';

const COMPONENTS = [
  NavbarComponent,
  JumbotronComponent,
  BusinessCardComponent,
  PersonalProfileComponent,
  EducationComponent,
  ProfessionalXPComponent,
  ProfessionalXPCardComponent
]

const SERVICES = [
  DataService
]
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
