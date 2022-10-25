import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ControllerComponent } from './controller/controller.component';
import { Day1productcardComponent } from './day1productcard/day1productcard.component';
import { Day2profilecardComponent } from './day2profilecard/day2profilecard.component';
import { Day3createmodalComponent } from './day3createmodal/day3createmodal.component';



@NgModule({
  declarations: [
    ControllerComponent,
    Day1productcardComponent,
    Day2profilecardComponent,
    Day3createmodalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    ControllerComponent,
    Day1productcardComponent
  ]
})
export class ThirtydayModule { }
