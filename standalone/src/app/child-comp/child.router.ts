import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ChildCompComponent } from './child-comp.component';

export const routes: Routes = [
  {path :'',component : ChildCompComponent}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports : [RouterModule]

})

export class RoutingChildModule {}