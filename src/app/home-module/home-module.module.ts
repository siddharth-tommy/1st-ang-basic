import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TommyComponent } from '../tommy/tommy.component';



@NgModule({
  declarations: [TommyComponent,
  ],
  entryComponents: [TommyComponent
  ], 
  imports: [
    CommonModule 
  ]
})
export class HomeModuleModule { }
