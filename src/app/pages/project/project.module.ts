import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDriveComponent } from './project-drive/project-drive.component';
import { ProjectRoutingModule } from './project-routing.module';
import { UserModule } from 'src/app/features/user/user.module';



@NgModule({
  declarations: [
    ProjectDriveComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    UserModule
  ]
})
export class ProjectModule { }
