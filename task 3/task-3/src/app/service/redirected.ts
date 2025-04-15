import { Component, inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceComponent } from "./service";


@Component({
    selector: 'app-redirect',
    template: '',
  })

export class RedirectedPage{

    currentPath :any ;

    router :Router = inject(Router);
    service : ServiceComponent =inject(ServiceComponent)
    ngOnInit(){
        this.currentPath=localStorage.getItem('currentPath');
        console.log(this.currentPath);
        this.service.isLogged =true;

        this.router.navigate([this.currentPath]);
    }
    

}