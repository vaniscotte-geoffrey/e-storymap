import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserModule } from '../user/user.module';
import { RouterModule } from '@angular/router';
import { DocumentComponent } from './components/document/document.component';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [
  NavBarComponent,
  DocumentComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    RouterModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class ProjectModule { }
