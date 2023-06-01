import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public _http:HttpClient) { }

  allcategories(): Observable<any>
  {
    return this._http.get("https://fakestoreapi.com/products/categories");
  }
  onecategory(categoryId:string): Observable<any>
  {
    return this._http.get("https://fakestoreapi.com/products/category/"+categoryId);
  }  
}
