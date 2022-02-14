import { NgModule } from '@angular/core';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';


const MODULES = [
  UserModule,
  ProjectModule
];
@NgModule({
  declarations: [],
  imports: [
    MODULES
  ],
  exports: [
    MODULES
  ]
})
export class FeaturesModule { }
