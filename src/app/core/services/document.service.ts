import { HttpClient } from '@angular/common/http';
import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { forkJoin, lastValueFrom, map, Observable, switchMap, } from 'rxjs';
import { Document } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private http: HttpClient,
    private domSanitizer: DomSanitizer
  ) { }

  public addFile(file: File): Promise<void> {
    const fd = new FormData();
    fd.append("file", file);
    return lastValueFrom(this.http.post('http://localhost:8080/api/document/', fd)).then();
  }

  public getFile(filename: string): Observable<Document> {
    return this.http.get('http://localhost:8080/api/document/file/' + filename, {
      responseType: 'blob' as 'json'
    }).pipe(map((res: any) => {
      const dataType = res.type;
      const binaryData = [];
      binaryData.push(res);
      const url: string = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      return {
        title: filename,
        image: this.domSanitizer.bypassSecurityTrustUrl(url)
      }
    }));
  }

  public getAllFile(): Observable<Document[]> {
    return this.http.get<string[]>('http://localhost:8080/api/document/').pipe(
      switchMap(files => forkJoin(files.map(file => this.getFile(file))))
    );
  }

  public downloadDocument(doc: Document): void {
    const downloadLink = document.createElement('a');
    downloadLink.href = doc.image + '';
    downloadLink.setAttribute('download', doc.title);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }
}
