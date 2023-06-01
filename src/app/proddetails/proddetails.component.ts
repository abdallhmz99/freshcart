import { Component } from '@angular/core';
import { ProdService } from '../services/prods/prod.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.css']
})
export class ProddetailsComponent {
  constructor(private _Prods:ProdService, private _AR : ActivatedRoute,private _cart :CartService){}
  
  one_prod!:any;
  Id!:number; 
  ngOnInit()
  {  
    this.Id =Number(this._AR.snapshot.paramMap.get('prodId')) ;
    this._Prods.oneProd(this.Id).subscribe((one_prod)=>{this.one_prod=one_prod; console.log(one_prod)}) ;
  }
  addProdToCart=new FormGroup
  (
    {  
       qunt : new FormControl()

    }

  )

  addtoCart(id:number)
  {
      this._cart.addToCart(localStorage.getItem("Email")!,id,Number(this.addProdToCart.controls.qunt.value));
  }


}
