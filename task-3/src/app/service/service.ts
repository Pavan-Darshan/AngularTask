import { JsonPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
    
})

export class ServiceComponent{

    http :HttpClient = inject(HttpClient);

    isLogged : boolean = false;

    onLogin(email : string , password : string){
        return this.http.post('https://reqres.in/api/login',{email: email, password: password},{observe : 'body'})
    }

}