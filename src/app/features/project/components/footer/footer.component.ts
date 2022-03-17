import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DocumentService } from 'src/app/core/services/document.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnDestroy {

  public compatible: boolean = false;
  private compatible_: Subscription;

  constructor(private documentService: DocumentService) {
    this.compatible_ = documentService.compatibilitySubject.asObservable().subscribe(compatible => {
      this.compatible = compatible;
    });
  }

  ngOnDestroy(): void {
    this.compatible_.unsubscribe();
  }
}
