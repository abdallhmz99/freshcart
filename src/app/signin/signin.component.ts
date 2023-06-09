import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private userServ:UserService,private _router:Router){}

  signInForm = new FormGroup({
    Email: new FormControl("example@exampel.com", [Validators.required, Validators.email ]),
    password: new FormControl("", [Validators.required,Validators.minLength(8)]),

  });

  validationFalse!: boolean ;
  validationtrue!: boolean ;
  signIn() {
    if ((this.signInForm.status == "INVALID")) {
      this.validationFalse = true
      this.validationtrue = false
    }
    else {
      this.validationFalse = false
      this.validationtrue = true
      this.userServ.signin(String(this.signInForm.controls.Email.value),String(this.signInForm.controls.password.value))
    }
  }

}
