import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor( private Router:Router,private _userserv:UserService){if (localStorage.getItem('signedin') == 'true') { this.isLogIN = true }
  else { this.isLogIN = false }}

  isLogIN: boolean = false
 
  logOut()
  { this._userserv.logout();}

}
