import { Component, Input } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent {

  public user: Observable<firebase.default.User>;
  @Input() public height: number = 64;

  constructor(private authService: AuthService) {
    this.user = authService.userData.pipe(filter(user => !!user)) as Observable<firebase.default.User>;
  }

}
