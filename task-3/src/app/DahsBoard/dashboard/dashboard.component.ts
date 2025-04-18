import { Component, inject } from '@angular/core';
import { ServiceComponent } from '../../service/service';
import { ActivatedRoute, Router } from '@angular/router';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { BackgroundColor } from '../../service/backgroun.directive';
import { DetailsComponent } from './details/details/details.component';
import { UpperCase } from '../../service/upperCase-Pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone : true,
  imports :[BackgroundColor,DetailsComponent],
  
})
export class DashboardComponent {


  router : Router = inject(Router);
  service : ServiceComponent =inject(ServiceComponent);
  activateRouter : ActivatedRoute = inject(ActivatedRoute);

  parentData : string = "parent upper case pipe not working"


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
