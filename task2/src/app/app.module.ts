import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from 'primeng/button';
import { RoutingModule } from "./app.routes";




import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { Router, RouterOutlet } from '@angular/router';
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SafeUrlPipe } from "./safeUrlPipe";

import {CdkDragDrop, CdkDropList,CdkDrag} from '@angular/cdk/drag-drop';

import {GridsterComponent, GridsterItemComponent} from 'angular-gridster2';






@NgModule({
    declarations:[AppComponent],
    providers:[provideAnimationsAsync(),providePrimeNG({ theme: {preset: Aura}})],
    imports: [BrowserModule,ButtonModule,RoutingModule,RouterOutlet,ButtonModule,TableModule,
        CommonModule, FormsModule,SafeUrlPipe,ReactiveFormsModule, CdkDrag, CdkDropList,GridsterComponent, GridsterItemComponent ],
    bootstrap:[AppComponent]
})
export class AppModule{

}