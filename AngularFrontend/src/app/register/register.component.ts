import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    email: '',
    password: '',
    name: ''
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  hideSuccessMessage = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  // Implement onSubmit  to save the user details
  onSubmit() {

    if (this.form.password.length >= 6 ) {
     this.authService.register(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
   }
  }
  FadeOutSuccessMsg() {
    setTimeout( () => {
        this.hideSuccessMessage = true;
     }, 2200);
}

}
