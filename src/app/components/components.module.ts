import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessCardComponent } from './business-card/business-card.component';
import { ProfessionalXPCardComponent } from './professional-xpcard/professional-xpcard.component';
import { ItCardComponent } from './it-card/it-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';

const COMPONENTS = [
  BusinessCardComponent,
  ProfessionalXPCardComponent,
  ItCardComponent,
  ProjectCardComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
