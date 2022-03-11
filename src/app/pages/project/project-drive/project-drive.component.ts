import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from 'src/app/core/models/document.model';
import { DocumentService } from 'src/app/core/services/document.service';

@Component({
  selector: 'app-project-drive',
  templateUrl: './project-drive.component.html',
  styleUrls: ['./project-drive.component.scss']
})
export class ProjectDriveComponent {

  public docs$: Observable<Document[]>;

  constructor(private documentService: DocumentService) {
    this.docs$ = documentService.getAllFile();
    this.docs$.subscribe(console.log);
  }

  public addFile(event: any): void {
    const file: File = event.target.files[0];
    file && this.documentService.addFile(file);
  }
}
