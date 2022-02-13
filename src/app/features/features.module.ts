import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';


const MODULES = [
  UserModule
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
