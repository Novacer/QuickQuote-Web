import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  regFailed: boolean;

  constructor(private validateService: ValidateService, private authService: AuthService, private router: Router) {
    this.regFailed = false;
  }

  ngOnInit() {
  }

  onRegSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    if (this.validateService.validateRegister(user)) {
      this.regFailed = false;

      // register user

      this.authService.registerUser(user).subscribe(data => {
        if (data.success) {
          this.regFailed = false;
          this.router.navigateByUrl('login');
        }
        else {
          this.regFailed = true;
        }
      });
    }
    else {
      this.regFailed = true;
    }
  }

}
