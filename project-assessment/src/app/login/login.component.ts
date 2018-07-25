import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../sevices/login.service";
import { LoginData } from "./login.model";
import { Response } from "@angular/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:[LoginService]
  
})
export class LoginComponent implements OnInit {
  login:LoginData;
  loginarr:Array<LoginData>;
  constructor(private serv: LoginService) {
      this.login=new LoginData(0,0);
   }

   private loadData():void{
    this.serv.getData().subscribe(
      (resp: Response) => {
        this.login = resp.json();
        this.loadData();
        console.log(this.login);
      },
      error => {
        console.log("Error Occured");
      }
    );
   }
   
  ngOnInit():void {
    this.loadData();
  }

}

