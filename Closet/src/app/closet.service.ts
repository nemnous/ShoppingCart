import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ClosetService {

  constructor(public httpObj: HttpClient) { }

  create:any;
  log:any;
  cart = [];
  OhMyProducts;

  servaddUser(customer) {
    alert("lol");
    this.httpObj.post("http://127.0.0.1:4000/SignUp", customer).subscribe(x=> {this.create = x; console.log(this.create)});
  }
  uservalid(login) {
    // alert("heloooo");
    return this.httpObj.post("http://127.0.0.1:4000/login", login);
  }

  
  productInfo() {
    
    // console.log("in product Info");
    // console.log(this.OhMyProducts);
    return this.httpObj.get("http://127.0.0.1:4000/catalog");;
  }

  serverAddtoCart(product) {
    this.httpObj.post("http://127.0.0.1:4000/catalog", product).subscribe(x=> {this.create = x; console.log(this.create)});
  }

  cartInfo() {
    // alert("nani");
    return this.httpObj.get("http://127.0.0.1:4000/cart");
  }

  addToCart(prod) {
    // console.log("in service");
    if(this.cart.length === 0) {
      this.cart.push(prod);
      this.serverAddtoCart(prod);
      // this.serverAddtoCart(prod);
      // console.log(this.cart);
      return;
    }
    var check = false;
    for(var i = 0 ; i < this.cart.length; i++) {
      if(this.cart[i].prdid == prod.prdid) {
        this.cart[i].quantity += 1;
        this.serverAddtoCart({prdid:prod.prdid, quantity:this.cart[i].quantity});
        check = true;
      }
    }
    if(!check) {
      this.cart.push(prod);
      this.serverAddtoCart(prod);
    }
    // console.log(this.cart);
    
  }

}
