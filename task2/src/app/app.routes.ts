import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";




const routes :Routes =[
    {path : '',component: AppComponent},


   
]

@NgModule({
    imports:[RouterModule.forRoot(routes,{enableTracing :true})],
    exports : [RouterModule]

})


export class RoutingModule{

}