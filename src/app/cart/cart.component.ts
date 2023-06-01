import { Component } from '@angular/core';
import { ProdService } from '../services/prods/prod.service';
import {CartService} from '../services/cart/cart.service';
import { Cart } from '../user';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private _Prods:ProdService ,private _CartService:CartService ){}
  
  cart!:Array<Cart>;
  ngOnInit()
  {
    this.cart = this._CartService.getCartforuser() ;
    console.log(this.cart);

  }

}
