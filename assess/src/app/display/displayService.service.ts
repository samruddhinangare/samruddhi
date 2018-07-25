import {Injectable} from "@angular/core";
 import {Observable} from "rxjs/Observable";
 
 
 @Injectable()
 export class displayService {
    Data;
 
    getDisplayData(details): Observable<any>
    {
        let res: Observable<any>;
        res=details;
        this.Data=res;
        return res;
    }

    showDisplayData()
    {
        return this.Data;
    }
 }