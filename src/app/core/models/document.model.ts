import { SafeUrl } from "@angular/platform-browser";

export interface Document {
  title: string,
  image: string | SafeUrl,
  type: DocumentType
}

export enum DocumentType {
  ANY,
  TEXT,
  IMAGE,
  MCD,
  MFC,
  BPMN
}
