import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from 'primeng/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { GridsterModule } from 'angular-gridster2';









@NgModule({
    declarations:[],
    providers:[provideAnimationsAsync(),providePrimeNG({ theme: {preset: Aura}})],
    imports: [
    ],
    bootstrap:[]
})
export class AppModule{

}