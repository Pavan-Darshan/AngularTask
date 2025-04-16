import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { ServiceComponent } from "./service";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn :'root'
})

export class AuthService implements CanActivate{

router : Router = inject(Router);
    service : ServiceComponent = inject(ServiceComponent)
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> 
    { 
        if(this.service.isLogged || Boolean(localStorage.getItem('isLogged'))){
            
            return true
        }
        else
        {
            this.router.navigate([''])
        }

    return false;
          
    }

}