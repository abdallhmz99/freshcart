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

  constructor(private _Prods:ProdService ,private _CartService:CartService ,private _prod:ProdService ){}
  
  cart!:Array<Cart>;
  prodDit:Array<object>=[];
  cartItem :Array<object> = []
  oneprod !: object;
  ngOnInit()
  {
    this.cart = this._CartService.getCartforuser() ;
    for(let i of this.cart)
    {
     this._prod.oneProd(i.prodid).subscribe((data)=>{ this.oneprod = {data,item:i}  ; this.prodDit.push(this.oneprod); console.log(this.prodDit)})
    }

  }

}
