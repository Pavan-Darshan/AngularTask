



import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';



export const routes: Routes = [
    { path : '' , component : AppComponent},
    {path : 'dashboard' , component : AppComponent},

];


@NgModule({
    imports: [RouterModule.forRoot(routes,{enableTracing : true})],
    exports :[RouterModule]
})

export class RoutingModule{}