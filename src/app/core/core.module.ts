import { NgModule } from '@angular/core';
import { FireModule } from './fire/fire.module';
import { AuthService } from './services/auth.service';
import { DocumentService } from './services/document.service';


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
    AuthService,
    DocumentService
  ]
})
export class CoreModule { }
