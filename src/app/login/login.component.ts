import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import {Users} from "./Users";
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginServiceService]
})
export class LoginComponent implements OnInit {
 
  members : Users;
  constructor(private loginData: LoginServiceService, private router: Router ) { 
    console.log("Inside Constructor");
    //this.getAll();
  }

  ngOnInit() {
    console.log("Inside Init");

  }

  getAll() {
    console.log("Inside component getAllFunction");
   
    this.loginData.getAllService().subscribe(res => {
    this.members = res;
    console.log(res);
    console.log(" returned Inside component getAllFunction");
     console.log(this.members[0].username);
    });
  }

  // onSubmit(userN : String , passW : String)
  // {
  //   this.members.username = userN;
  //   this.members.password = passW;
  //   console.log("onSubmit"+userN);
  //   this.loginData.addData(userN,passW);

  // }

  myLogin(x: NgForm){
    console.log("myLogin"+x.value.uname);

    console.log("password"+x.value.psw);
    // this.loginData.addData(x.value.uname,x.value.psw);
    // this.getAll();
    this.loginData.getAllService().subscribe(res => {
      this.members = res;
      console.log(res);
      console.log(" returned Inside component getAllFunction");
       console.log(this.members[0].username);
       for(var i=0;;i++){
        console.log("inside for");
        if(this.members[i].username == x.value.uname &&  this.members[i].password == x.value.psw){
          this.router.navigate(['dashboard']);
          break;
        }
      }
      });
    //this.getAll();
     
  }

  // myLogin(uname, pword){

    // console.log("inside myLogin");
    // console.log(uname +"  ---  "+pword);
    // this.loginData.getAllService().subscribe(res => {
    //   this.members = res;
    //   console.log(res);
    //   console.log(" returned Inside component getAllFunction");
    //    console.log(this.members[0].username);
    //   });
    // //this.getAll();
    //  for(var i=0;;i++){
    //   console.log("inside for");
    //   if(this.members[i].username == uname &&  this.members[i].password == pword){
    //     this.router.navigate(['dashboard']);
    //     break;
    //   }
    // }
  // }

}
