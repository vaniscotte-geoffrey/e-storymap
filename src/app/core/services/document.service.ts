import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject, first, forkJoin, lastValueFrom, map, Observable, of, Subject, switchMap, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Document, DocumentType } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private compatibilitySubject: Subject<boolean> = new BehaviorSubject<boolean>(true);
  private filesSubject: Subject<Document[]> = new BehaviorSubject<Document[]>([]);
  private readonly REST_URL: string = environment.backend;

  constructor(
    private http: HttpClient,
    private domSanitizer: DomSanitizer
  ) {
    this.getAllFile().then(files => this.filesSubject.next(files));
  }

  public addFile(file: File): Promise<void> {
    const fd = new FormData();
    fd.append("file", file);
    return lastValueFrom(this.http.post(this.REST_URL + 'document/', fd))
    .then(() => this.getProjectCompatibility())
    .then(compatible => this.compatibilitySubject.next(compatible))
    .then(() => this.getAllFile())
    .then(docs => this.filesSubject.next(docs));
  }

  public getFile(filename: string): Observable<Document> {
    return this.http.get(this.REST_URL + 'document/file/' + filename, {
      responseType: 'blob' as 'json'
    }).pipe(map((res: any) => {
      const dataType = res.type;
      const binaryData = [];
      binaryData.push(res);
      const url: string = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      return {
        title: filename,
        image: this.domSanitizer.bypassSecurityTrustUrl(url),
        type: DocumentType.ANY
      }
    }));
  }

  public deleteFile(filename: string): Promise<void> {
    return lastValueFrom(this.http.get(this.REST_URL + 'document/delete/' + filename))
    .then(() => this.getProjectCompatibility())
    .then(compatible => this.compatibilitySubject.next(compatible))
    .then(() => this.getAllFile())
    .then(docs => this.filesSubject.next(docs));
  }

  public async getAllFile(): Promise<Document[]> {
    await this.updateCompatibility();
    return lastValueFrom(this.http.get<string[]>(this.REST_URL + 'document/').pipe(
      switchMap(files => files && files.length === 0 ? of([]) : forkJoin(files.map(file => this.getFile(file))))
    ));
  }

  public async updateCompatibility(): Promise<void> {
    this.compatibilitySubject.next(await this.getProjectCompatibility());
  }

  public getAllFile$(): Observable<Document[]> {
    return this.filesSubject.asObservable();
  }

  public getProjectCompatibility(): Promise<boolean> {
    return lastValueFrom(this.http.get<boolean>(this.REST_URL + 'compatibility/'));
  }

  public getProjectCompatibility$(): Observable<boolean> {
    return this.compatibilitySubject.asObservable();
  }

  public downloadDocument(doc: Document): void {
    const downloadLink = document.createElement('a');
    downloadLink.href = doc.image + '';
    downloadLink.setAttribute('download', doc.title);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }
}
