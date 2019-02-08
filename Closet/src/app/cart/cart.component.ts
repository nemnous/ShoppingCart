import { Component, OnInit } from '@angular/core';
import {ClosetService} from '../closet.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  
  cart;
  count;
  Products = this.service.OhMyProducts;
  dispproducts;
  cartDetailsArray = [];
  constructor(public service : ClosetService, public route:ActivatedRoute,public router:Router ) {
    this.service.cartInfo().subscribe(x => {
      this.cart = x;
      console.log("Products in CartComponent");
      this.dispproducts = this.service.OhMyProducts[1].mensproducts;
        for(var i = 0 ; i < this.service.OhMyProducts[1].womenproduct.length; i++) {
          this.dispproducts.push(this.service.OhMyProducts[1].womenproduct[i]);
        }
      for(var i = 0 ; i < this.cart.length; i++) {
        for(var j = 0; j < this.dispproducts.length; j++) {
          if(this.dispproducts[j]._id == this.cart[i].prdid) {
            this.cartDetailsArray.push({product:this.dispproducts[j], quantity:this.cart[i].quantity});
        }
      }
    }
  })
  console.log("cartDetails");
  console.log(this.cartDetailsArray);
  };

  // decQuantity()
  // products = this.service.cart;

  ngOnInit() {
    // cartArr = this.service.cart;
  }

}
