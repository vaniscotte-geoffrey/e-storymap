import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Document } from 'src/app/core/models/document.model';
import { DocumentService } from 'src/app/core/services/document.service';

@Component({
  selector: 'app-project-drive',
  templateUrl: './project-drive.component.html',
  styleUrls: ['./project-drive.component.scss']
})
export class ProjectDriveComponent implements OnDestroy {

  public docs: Document[] = [];
  private docs_!: Subscription;

  constructor(private documentService: DocumentService) {
    this.docs_ = documentService.getAllFile$().subscribe(docs => this.docs = docs);
  }

  public addFile(event: any): void {
    const file: File = event.target.files[0];
    file && this.documentService.addFile(file);
  }

  ngOnDestroy(): void {
      this.docs_.unsubscribe();
  }
}
