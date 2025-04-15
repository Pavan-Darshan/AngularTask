import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './DahsBoard/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { AuthService } from './service/authService';
import { RedirectedPage } from './service/redirected';

export const routes: Routes = [
    {path : '',component :LoginComponent},
    {path : 'dashboard' , component : DashboardComponent,canActivate : [AuthService]},
    { path : '**', component : RedirectedPage}
];
@NgModule({
    imports:[RouterModule.forRoot(routes,{enableTracing :true})],
    exports : [RouterModule]

})


export class RoutingModule{

}