import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import {HttpModule, Http, Response, URLSearchParams , RequestOptions} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Users} from './Users';


@Injectable()
export class LoginServiceService {
  members : Users;
  constructor(private _http : Http) { }

  getAllService(){
    console.log("Inside service getAll");

    return this._http.get('login/getAll')
    .map(res =>{ 
       console.log("Inside http");
      //console.log( res.toString);
      console.log(" Returned Inside http");

      return res.json()
     
    }
  );
}

addData(username,password)
{

  console.log("service username :"+username);
  console.log("service password :"+password);


  this._http.post('login/addpost',{'username':username,'password': password}).subscribe(
    res => {
      // show an alert to tell the user if product was created or not
      alert("Data Added Successfully");

      // go back to list of products
   },
   error => console.log(error)
  )
  console.log({'name':name});
}

}


