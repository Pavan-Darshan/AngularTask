import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path : '',component : AppComponent
    },
    {
        path :'child', loadChildren :()=> import('./child-comp/child.module').then(m=>m.ChildModlue)
    },
    {
        path :'parent',loadChildren : ()=>import('./parent-comp/parent.module').then(m=>m.ParentModule)
    }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports : [RouterModule]

})

export class RoutingModule {}