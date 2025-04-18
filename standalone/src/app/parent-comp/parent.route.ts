import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ParentCompComponent } from './parent-comp.component';


export const routes: Routes = [
  {path :'',component : ParentCompComponent}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports : [RouterModule]

})

export class RoutingParentModule {}