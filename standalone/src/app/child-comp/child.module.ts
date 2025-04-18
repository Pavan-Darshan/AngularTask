import { NgModule } from "@angular/core";
import { ThirdCompComponent } from "./third-comp/third-comp.component";
import { ChildCompComponent } from "./child-comp.component";
import { ParentModule } from "../parent-comp/parent.module";
import { SecondCompComponent } from "./second-comp/second-comp.component";
import { RouterModule } from "@angular/router";
import { RoutingChildModule } from "./child.router";


@NgModule({
    declarations:[ChildCompComponent,SecondCompComponent],
    providers:[],
    imports: [ThirdCompComponent,RouterModule,RoutingChildModule,ParentModule],
    exports :[ChildCompComponent,SecondCompComponent],
    
})
export class ChildModlue{
 
} 