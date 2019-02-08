import { Component, OnInit } from '@angular/core';
import {ClosetService} from '../closet.service';
import {ActivatedRoute, Router} from '@angular/router';
// import {  } from './products';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
// product=items;
  products;
  dispproducts = [];
  srch = "";
  // mensprod:any = [];

  constructor(public service : ClosetService, public route:ActivatedRoute,public router:Router ) {
    this.service.productInfo().subscribe(x =>{
      this.products = x;
      // this.mensprod= x[1].mensproducts;
      // console.log(this.products);
      this.service.OhMyProducts = this.products;
      // alert(this.products);
      if(this.page === 1) {
        console.log("mens");
        console.log(this.products)
        this.dispproducts = this.products[1].mensproducts;
      } else if(this.page ===2) {
        this.dispproducts = this.products[1].womenproduct;
      } else {
        this.dispproducts = this.products[1].mensproducts;
        for(var i = 0 ; i < this.products[1].womenproduct.length; i++) {
          this.dispproducts.push(this.products[1].womenproduct[i]);
        }
      }
    })
   }


  // cartElement; 
  addToCart(that) {
    var cartObj = {prdid:that.path[0].id, quantity:1}
    this.service.addToCart(cartObj);
    // console.log(this.service.cart);
  }
  page:number;
  ngOnInit() {
    this.page = +this.route.snapshot.paramMap.get('id');
    // this.srch = this.route.snapshot.paramMap.get('search');
    console.log("the page");
    console.log(this.page);
  }

}
