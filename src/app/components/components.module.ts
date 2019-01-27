import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { BusinessCardComponent } from './business-card/business-card.component';

const COMPONENTS = [
  NavbarComponent,
  JumbotronComponent,
  BusinessCardComponent,
  PersonalProfileComponent
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
