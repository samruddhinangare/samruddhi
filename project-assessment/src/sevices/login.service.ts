import { Injectable } from "@angular/core";
import { Http,Response,Headers,RequestOptions } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class LoginService {
    url:string;
    constructor(private http:Http) {
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }
    getData():Observable<Response> {
        let resp:Observable<Response>;
        resp = this.http.get(this.url);
        return resp;
    }
   
}