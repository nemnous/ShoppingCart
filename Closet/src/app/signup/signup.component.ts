import { Component, OnInit } from '@angular/core';
// import { ClosetService } from './closet.service';
import { ClosetService } from '../closet.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // var service = ClosetService;
  constructor(public service : ClosetService) { }

  ngOnInit() {
  }
  username:string ="";
  email:string ="";
  password="";
  cpassword="";
  phone:string="";
  customer;
  // check:boolean;
  addUser() {
      // alert("hellllllll");
      // console.log(this.service);
      // console.log(this.password);
      // console.log(this.cpassword);
      // this.check = (this.username == this.cpassword);
      // console.log(this.check);
      // if(this.check) {
        this.customer = {username:this.username, email:this.email,phone:this.phone, password:this.password }
        this.service.servaddUser(this.customer);
        alert("successfully Signed Up");
    // } else {
      // alert("Fucked UP");
    // }
  }
  
  

}
