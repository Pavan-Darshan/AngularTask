import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from 'primeng/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { GridsterModule } from 'angular-gridster2';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./DahsBoard/dashboard/dashboard.component";
import { LoginComponent } from "./login/login/login.component";
import { RoutingModule } from "./app.routes";
import {  HttpClientModule } from "@angular/common/http";







@NgModule({
    declarations:[AppComponent,DashboardComponent,LoginComponent],
    providers:[provideAnimationsAsync(),providePrimeNG({ theme: {preset: Aura}})],
    imports: [BrowserModule,ButtonModule, GridsterModule,FormsModule,RouterModule,RoutingModule,ReactiveFormsModule, HttpClientModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}