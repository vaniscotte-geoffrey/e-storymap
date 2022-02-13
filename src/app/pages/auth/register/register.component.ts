import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public registerForm: FormGroup = new FormGroup({
    mail: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor (
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  public redirectToLogin(): void {
    this.router.navigate(['auth', 'login']);
  }

  public register(): void {
    this.authService.register(this.registerForm.get('mail')?.value, this.registerForm.get('password')?.value).then(
      res => this.router.navigate(['auth', 'login'])
    ).catch(
      err => this.snackBar.open('Mail ou mot de passe incorrect')
    )
  }
}
