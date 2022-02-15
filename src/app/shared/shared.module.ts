import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { TitleComponent } from './components/title/title.component';


const MODULES = [
  MaterialModule
];
@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    MODULES
  ],
  exports: [
    MODULES,
    TitleComponent
  ]
})
export class SharedModule { }
