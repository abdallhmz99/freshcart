import { Component } from '@angular/core';
import { ProdService } from '../services/prods/prod.service';
import { CategoriesService } from '../services/categories/categories.service';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.css']
})
export class ProdsComponent {

  constructor(private _Prods:ProdService ,private _categories:CategoriesService ){if (localStorage.getItem('signedin') == 'true') { this.isLogIN = true }
  else { this.isLogIN = false }}

  isLogIN: boolean = false


  prods!:any;
  categories!:any;
  
  
  ngOnInit()
  {
    this._Prods.allProds().subscribe((prods)=>{this.prods=prods;}) ;
    this._categories.allcategories().subscribe((categories)=>{this.categories=categories;}) ;
  }
  getCate(cate : string)
  {
    this._categories.onecategory(cate).subscribe((prods)=>{this.prods=prods;}) ;
  }

  getAllprod()
  {
    this._Prods.allProds().subscribe((prods)=>{this.prods=prods;}) ;
  }
}
