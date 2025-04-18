import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ParentCompComponent } from "./parent-comp.component";
import { ParentFirstCompComponent } from "./parent-first-comp/parent-first-comp.component";
import { ParentSecondCompComponent } from "./parent-second-comp/parent-second-comp.component";

import { ThirdCompComponent } from "../child-comp/third-comp/third-comp.component";
import { RoutingParentModule } from "./parent.route";
import { SecondCompComponent } from "../child-comp/second-comp/second-comp.component";
import { ChildModlue } from "../child-comp/child.module";
import { Test1Component } from "../child-comp/test1/test1.component";



@NgModule({
    declarations:[ParentCompComponent,ParentFirstCompComponent, ParentSecondCompComponent],
    imports: [ThirdCompComponent,RoutingParentModule,Test1Component],
    exports :[ParentCompComponent, ParentFirstCompComponent, ParentSecondCompComponent],
 
   
})
export class ParentModule{

}