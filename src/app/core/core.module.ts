import { NgModule } from '@angular/core';
import { FireModule } from './fire/fire.module';
import { AuthService } from './services/auth.service';


const MODULE = [
  FireModule
];
@NgModule({
  declarations: [],
  imports: [
    FireModule
  ],
  exports: [
    FireModule
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
