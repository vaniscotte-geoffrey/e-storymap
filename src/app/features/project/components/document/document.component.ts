import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { DomSanitizer } from '@angular/platform-browser';
import { Document } from 'src/app/core/models/document.model';
import { DocumentService } from 'src/app/core/services/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  @Input()
  public document!: Document;

  @ViewChild(MatMenuTrigger, {static: true}) private matMenuTrigger!: MatMenuTrigger;
  public menuTopLeftPosition =  {x: '0', y: '0'}

  constructor(
    public sanitizer: DomSanitizer,
    private documentService: DocumentService
  ) {
  }

  public onImgError(event: any): void {
    event.target.src = 'assets/document.png';
  }

  public onRightClick(event: MouseEvent): void {
    event.preventDefault();
    this.menuTopLeftPosition.x = event.clientX + 'px';
    this.menuTopLeftPosition.y = event.clientY + 'px';
    this.matMenuTrigger.openMenu();
  }

  public onDelete(): void {
    this.documentService.deleteFile(this.document.title);
  }

  public onDownload(): void {
  }
}
