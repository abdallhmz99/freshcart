import { Injectable } from '@angular/core';
import { User } from '../../user';
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root'

})
export class UserService {

  constructor(private Router:Router){}

  users: Array<User> = [];

  getAllUsers() {
    if (localStorage.getItem('users') == null) {
      localStorage.setItem('users', JSON.stringify(this.users))
    }
    else {
      this.users = JSON.parse(localStorage.getItem("users")!)
    }
  }

  repeted!:boolean;

  signUp(userName: string, Email: string, password: string) :boolean {
    this.getAllUsers();
    for (let i of this.users) {
      if (i.Email == Email) 
      {
        this.repeted= true;
       }
    }
    if(this.repeted)
    {localStorage.setItem('users', JSON.stringify(this.users))
     this.repeted= false;
     return false ;
    }
    else{
    this.users.push({ userName, Email, password })
    localStorage.setItem('users', JSON.stringify(this.users))
    return true ;
    }
  }

  
  login(flag: string) {
    localStorage.setItem('signedin', flag);
    location.reload();
  }
  


  signin(Email: string, password: string) {
    this.getAllUsers();
    for (let i of this.users) {

      if (i.Email == Email) {
        if (i.password == password) {
          this.login("true")
          localStorage.setItem('Email', Email)
          break;
        } 
        else { this.login("false") ;}
      }
      else {
         this.login("false") 

      }
    }
  }

  logout() {
    localStorage.setItem('signedin', "false")
    localStorage.setItem('Email', "")
    location.reload();
  }

}


