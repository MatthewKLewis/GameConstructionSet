import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(public router: Router, public authService: AuthService) {}

  login() {
    this.authService.loggedIn = true;
    this.router.navigate(['home']);
  }
}
