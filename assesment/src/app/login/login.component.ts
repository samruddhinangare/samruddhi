import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serv:LoginService) { }
  userId;
  id;
  postData:any;

  ngOnInit() {
    this.serv.getData().subscribe((resp: Response) => {
        this.postData=resp;
      },
      (error)=>{
          console.log('Error occured');
      });
  }

  submit(){
    let uid=this.userId;
    let id=this.id;
    let posts=this.postData.filter(function (posts)
  {
    return (post.userId==uid && post.id==id);
  });

  if(post.length>0){
    alert('Data found');
  }
  console.log(post)
  }
}
