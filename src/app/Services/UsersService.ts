import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import{ HttpClient} from '@angular/common/http'

@Injectable()

export class UsersService
{
    private API_ServerRank="https://randomuser.me/api/?results=25";
    constructor(public http:HttpClient){}
    
    public getUsers():Observable<any>{
        return this.http.get(this.API_ServerRank)
    }
    
}