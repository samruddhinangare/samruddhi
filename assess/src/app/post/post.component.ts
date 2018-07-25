import { Component, OnInit } from '@angular/core';
import { ApiServices } from "./post.service";
import { Router } from '@angular/router';
import { displayService } from "./../display/displayService.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ApiServices]
})

export class PostComponent implements OnInit {
  _postsArray: any;
  post:any;
  constructor(private apiSerivce: ApiServices,private router: Router,private displayService:displayService) { }

  getPosts(): void {
    this.apiSerivce.getPosts()
        .subscribe(
            resultArray => this._postsArray = resultArray,
            error => console.log("Error :: " + error)
        )
}
  ngOnInit():void {
    this.getPosts();
  }


  

  DisplayData(Data)
  {
      this.displayService.getDisplayData(Data);
      this.router.navigateByUrl('/display');
  }
}



