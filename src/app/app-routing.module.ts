import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{HomeComponent} from "../app/home/home.component"
import { ProddetailsComponent } from './proddetails/proddetails.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrandsComponent } from './brands/brands.component';
import { ProdsComponent } from './prods/prods.component';

const routes: Routes = [

  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"oneProd/:prodId",component:ProddetailsComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"home",component:HomeComponent},
  {path:"cart",component:CartComponent},
  {path:"signIn",component:SigninComponent},
  {path:"signUp",component:SignupComponent},
  {path:"brands",component:BrandsComponent},
  {path:"prods",component:ProdsComponent},
  {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
