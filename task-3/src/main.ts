import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { importProvidersFrom } from "@angular/core";
import { RoutingModule } from "./app/app.routes";
import { HttpClient, HttpClientModule } from "@angular/common/http";


// platformBrowserDynamic().bootstrapModule(AppModule);


bootstrapApplication(AppComponent,{
    providers:[provideAnimationsAsync(),providePrimeNG({ theme: {preset: Aura}}),
        importProvidersFrom(RoutingModule,HttpClientModule),
        
       
    ]
});