import { Component, OnInit, Input } from '@angular/core';
import { ApiServices } from "./../post/post.service";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor(private apiService: ApiServices) { }
  _postsArray;
  

  getPosts(): void {
    this.apiService.getPosts()
        .subscribe(
            resultArray => this._postsArray = resultArray,
            error => console.log("Error :: " + error)
        )
}
  ngOnInit():void {
    this.getPosts();
  }


  
  

}
