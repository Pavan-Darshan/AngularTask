import { Component, inject } from '@angular/core';
import { ServiceComponent } from '../../service/service';
import { ActivatedRoute, Router } from '@angular/router';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone : false
})
export class DashboardComponent {


  router : Router = inject(Router);
  service : ServiceComponent =inject(ServiceComponent);
  activateRouter : ActivatedRoute = inject(ActivatedRoute);


  ngOnInit(){

      localStorage.setItem('currentPath',this.activateRouter.snapshot.routeConfig!.path!.toString());
      localStorage.setItem("isLogged","true");
  }
  onLogOut(){
      alert("Successfully Logged Out.....!")
      this.service.isLogged =false;
      localStorage.clear();
      this.router.navigate(['']);
  }





}
