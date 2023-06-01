import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(public _http:HttpClient) { }

  allProds(): Observable<any>
  {
    return this._http.get("https://fakestoreapi.com/products?limit=16");
  }
  oneProd(prodId:number): Observable<any>
  {
    return this._http.get("https://fakestoreapi.com/products/"+prodId);
  }
  
}
