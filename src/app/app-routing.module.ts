import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ControllerComponent } from './thirtyday/controller/controller.component';
import { Day1productcardComponent } from './thirtyday/day1productcard/day1productcard.component';
import { Day2profilecardComponent } from './thirtyday/day2profilecard/day2profilecard.component';
import { Day3createmodalComponent } from './thirtyday/day3createmodal/day3createmodal.component';

const routes: Routes = [
  { 
    path:'',
    component:MenuComponent
  },
  { path:'thirtyhome',
    component:ControllerComponent,
    children: [
      {
        path: 'day1',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day2',
        component:Day2profilecardComponent,
        
      },
      {
        path: 'day3',
        component:Day3createmodalComponent,
        
      },
      {
        path: 'day4',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day5',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day6',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day7',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day8',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day9',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day10',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day11',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day12',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day13',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day14',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day15',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day16',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day17',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day18',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day19',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day20',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day21',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day22',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day23',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day24',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day25',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day26',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day27',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day28',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day29',
        component:Day1productcardComponent,
        
      },
      {
        path: 'day30',
        component:Day1productcardComponent,
        
      },
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
