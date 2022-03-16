import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Document } from 'src/app/core/models/document.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  @Input()
  public document!: Document;

  constructor(public sanitizer: DomSanitizer) {}

  public onImgError(event : any): void {
    event.target.src = 'assets/document.png';
  }
}
