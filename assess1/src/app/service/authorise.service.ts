import {Injectable} from "@angular/core";
 import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";
 import {IPosts} from "./../login/authorise/authorise";
 
 @Injectable()
 export class ApiService {
 
     private _postsURL = "https://jsonplaceholder.typicode.com/posts";
 
     constructor(private http: Http) {
     }
 
     getPosts(): Observable<IPosts[]> {
         return this.http
             .get(this._postsURL)
             .map((response: Response) => {
                 return <IPosts[]>response.json();
             })
             .catch(this.handleError);
     }
 
     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 }