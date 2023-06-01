import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Cart } from "../../user"

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private Router: Router) { }

  cart: Array<Cart>=[];
  newCart: Array<Cart>=[];

  getCart()  // check if cart created in localStorage and copy or create it
  {
    if (localStorage.getItem('cart') == null||localStorage.getItem('cart') == undefined) {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
    else {
      this.cart = JSON.parse(localStorage.getItem("cart")!)
    }
  }

  counter:number=0;

  addToCart(userEmail: string, prodid: number, qunt: number)  // add prodct to cart
  { this.counter++;                                  // counter to make cart item id unique
    this.getCart();
    this.cart.push({id:this.counter, userEmail, prodid, qunt })
    localStorage.setItem('cart', JSON.stringify(this.cart))
    alert("item added to cart")
  }

  getCartforuser(): Array<Cart>  // get card to loged in user
  {
    this.getCart()

    for (let i of this.cart)  // loop on all prods in cart
    {
      if (i.userEmail == localStorage.getItem('Email'))     // push into new cart when id of item not the same to delete
      {
        this.newCart.push(i)
      }
    }
    return this.newCart;
  }


  deleteFromCart(id: number): Array<Cart>  // delete prodct from cart and return cart without it
  {
    this.getCart();
    for (let i of this.cart)  // loop on all prods in cart
    {
      if (i.id != id)     // push into new cart when id of item not the same to delete
      {
        this.newCart.push(i)
      }

    }
    localStorage.setItem('cart', JSON.stringify(this.newCart))
    return this.getCartforuser();
  }



}



