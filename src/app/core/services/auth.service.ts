import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: Observable<firebase.default.User | null>;

  constructor(private auth: AngularFireAuth) {
    this.userData = auth.authState;
  }

  public register(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  public login(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  public signOut(): Promise<void> {
    return this.auth.signOut();
  }

  public googleAuth(): Promise<firebase.default.auth.UserCredential> {
    return this.auth.signInWithPopup(new GoogleAuthProvider());
  }
}
