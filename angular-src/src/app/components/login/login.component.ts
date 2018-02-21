import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: String;
  password: String;
  loginFail: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.loginFail = false;
  }

  ngOnInit() {
  }

  onLoginSubmit() {
    let user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data =>{
      if (data.success) {
        this.loginFail = false;
        this.authService.storeUserData(data.token, data.user);
        this.router.navigateByUrl('profile');
      }

      else {
        this.loginFail = true;
      }
    });
  }

}
