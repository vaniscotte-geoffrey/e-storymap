import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    mail: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor (
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  public redirectToRegister(): void {
    this.router.navigate(['auth', 'register']);
  }

  public login(): void {
    this.authService.login(this.loginForm.get('mail')?.value, this.loginForm.get('password')?.value).then(
      res => this.router.navigate(['project'])
    ).catch(
      err => this.snackBar.open('Mauvais identifiant ou mot de passe', undefined, {
        duration: 2000
      })
    );
  }

  public googleAuth(): void {
    this.authService.googleAuth().then(
      res => this.router.navigate(['project'])
    ).catch(
      err => this.snackBar.open('Mauvais identifiant ou mot de passe', undefined, {
        duration: 2000
      })
    );
  }

}
