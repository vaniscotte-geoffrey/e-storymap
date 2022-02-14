import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDriveComponent } from './project-drive/project-drive.component';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeaturesModule } from 'src/app/features/features.module';



@NgModule({
  declarations: [
    ProjectDriveComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FeaturesModule,
    SharedModule
  ]
})
export class ProjectModule { }
