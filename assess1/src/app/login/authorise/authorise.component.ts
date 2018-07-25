import { Component, OnInit } from '@angular/core';
import { ApiService } from "./../../service/authorise.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-authorise',
  templateUrl: './authorise.component.html',
  styleUrls: ['./authorise.component.css'],
  providers: [ApiService]
})
export class AuthoriseComponent implements OnInit {
 


  constructor(private apiSerivce: ApiService,private router:Router) {
     
  }
  _postsArray: any;
  userId;
  id;
  

  getPosts(): void {
    this.apiSerivce.getPosts()
      .subscribe(
        resultArray => this._postsArray = resultArray,
        error => console.log("Error :: " + error)
      )
  }

  ngOnInit(): void {
    this.getPosts();
  }

  submit() {
    let tempuid=this.userId;
    let tempid=this.id;
    console.log(this.userId,this.id);
    let posts = this._postsArray.filter(function (post){
      return (post.userId == tempuid && post.id == tempid);
    });
   if(posts.length>0)
   {
    this.router.navigateByUrl('/user');
   }
   else
   {
     alert('Invalid user');
   }
  }
}
