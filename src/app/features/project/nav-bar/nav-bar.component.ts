import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public showNavbar: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  public disconnect(): void {
    this.authService.signOut().then(
      res => {
        this.router.navigate(['auth', 'login']);
        this.snackBar.open('Vous êtes déconnecter', undefined, {
          duration: 2000
        });
      }
    ).catch(
      err => this.snackBar.open('Erreur lors de votre déconnection', undefined, {
        duration: 2000
      })
    );
  }
}
