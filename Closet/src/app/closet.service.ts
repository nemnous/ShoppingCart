import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class ClosetService {

  constructor(public httpObj: HttpClient) { }

  create:any;
  log:any;

  servaddUser(customer) {
    this.httpObj.post("http://127.0.0.1:4321/SignUp", customer).subscribe(x=> {this.create = x; console.log(this.create)});

  }

}
