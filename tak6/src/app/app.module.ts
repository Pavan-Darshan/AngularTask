import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';


import { ButtonModule } from 'primeng/button';



@NgModule({
    declarations :[AppComponent],
    providers :[provideAnimationsAsync(),providePrimeNG({theme :{preset :Aura}})],
    imports:[BrowserModule,ButtonModule],
    bootstrap :[AppComponent]
})

export class AppModule{}