import { Component, OnInit } from '@angular/core';
import {ClosetService} from '../closet.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent implements OnInit {

  constructor(public service : ClosetService, public route:ActivatedRoute,public router:Router ) { }
  
  username;
  password;
  login;
  log;

  ngOnInit() {
  }
  logincheck() {
    this.login = {username: this.username,password:this.password};
    this.service.uservalid(this.login).subscribe(x =>{this.log=x;
    if(this.log){
      // alert("asdfghgfsdfghjhgfgh");
      // console.log("nani");
      // console.log(this.log)
      this.sendIt();
    } else {
      alert("Incorrect credentials");
    }     
  });
  }
  sendIt() {
    // alert("hjbkbkjdnbkjxbxjxb")
    this.router.navigate(['/catalog'], {relativeTo:this.route});
  }
}
