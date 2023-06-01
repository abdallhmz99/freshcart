import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userServ:UserService){}

  signUpForm = new FormGroup({
    userName: new FormControl("ahmed", [Validators.required]),
    Email: new FormControl("example@exampel.com", [Validators.required, Validators.email ]),
    password: new FormControl("", [Validators.required,Validators.minLength(8)]),
    rePassword: new FormControl("", [Validators.required,Validators.minLength(8)])

  });

  //

  validationFalse!: boolean;
  validationtrue!: boolean;
  message!:boolean;
  signUp() {
    this.validationFalse= false;
    this.validationtrue = false;
    console.log(this.signUpForm)
    // if ((this.signUpForm.status == "INVALID")||(this.signUpForm.controls.password.value==this.signUpForm.controls.rePassword.value)) {
    if (this.signUpForm.status == "INVALID") {
      this.validationFalse = true
      this.validationtrue = false  
    }
    else {
      this.validationFalse = false
      this.validationtrue = true
      this.message = this.userServ.signUp(String(this.signUpForm.controls.userName.value),String(this.signUpForm.controls.Email.value),String(this.signUpForm.controls.password.value))
    }
  }
}
