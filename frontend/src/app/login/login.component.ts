import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { UserLogin } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
  ) { }

  loginForm: FormGroup;
  userData : UserLogin = new UserLogin();

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  login(){

    // set values
    this.userData.username = this.loginForm.value.username;
    this.userData.password = this.loginForm.value.password;

    this.userService.login(this.userData).subscribe(
      (response) => {
        this.router.navigate(['/home']);
      },

      (errorResponse) => {
        console.log("Error: Login Failed");
      }
    )
  }

  forgotPassword() {
    console.log("Forgot password");
  }

  createNewAccount() {
    this.router.navigate(['/createNewAccount']);
  }
}
