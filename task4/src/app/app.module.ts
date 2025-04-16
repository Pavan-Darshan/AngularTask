import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import {  HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { GridsterModule } from 'angular-gridster2';

import { Popover } from 'primeng/popover';
import { PopoverModule } from 'primeng/popover';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { NewCompComponent } from './newComp/new-comp/new-comp.component';





@NgModule({
    declarations:[AppComponent,NewCompComponent],
    providers:[provideAnimationsAsync(),providePrimeNG({ theme: {preset: Aura}})],
    imports: [BrowserModule,GridsterModule,ButtonModule,CommonModule,PopoverModule,Popover,FormsModule,CommonModule,HttpClientModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}