import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectDriveComponent } from "./project-drive/project-drive.component";

const ROUTES: Routes = [
  { path: 'drive', component: ProjectDriveComponent },
  { path: '', redirectTo: 'drive', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES)],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule {}
