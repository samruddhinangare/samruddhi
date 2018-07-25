import {Injectable} from "@angular/core";
 import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs";
 import {Post} from "./post.model";
 
 @Injectable()
 export class ApiServices {
 
     private _postsURL = "https://jsonplaceholder.typicode.com/comments";
 
     constructor(private http: Http) {
     }
 
     getPosts(): Observable<Post[]> {
        return this.http
            .get(this._postsURL)
            .map((response: Response) => {
                return <Post[]>response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
     
 }