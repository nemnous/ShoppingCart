import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {CatalogComponent} from './catalog/catalog.component';
import {CartComponent} from './cart/cart.component';
const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'SignUp', component:SignupComponent},
  { path: 'Home', component:HomeComponent},
  {path : 'catalog', component:CatalogComponent},
  {path:'cart', component: CartComponent},
  {path: '', redirectTo: 'Home', pathMatch:'full'},
];
@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    // CommonModule
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
