import { Component, OnInit } from '@angular/core';
import { ClosetService } from './closet.service';
import { ClosetService } from '../closet.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  username:string;
  email :string;
  password: string;
  cpassword:string;
  phone:string;
  customer;
  addUser() {
    if(this.password === this.cpassword) {
      this.customer = {username:this.username, email:this.email, password:this.password, phone:this.phone}
      this.service.servaddUser(this.customer);
      alert("successfully Signed Up");
    } else {
      alert("Fucked UP");
    }

    
  }
  
  constructor(public service : ClosetService) { }

  ngOnInit() {
  }

}
