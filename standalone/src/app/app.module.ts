import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ChildModlue } from "./child-comp/child.module";
import { ParentModule } from "./parent-comp/parent.module";
import { RoutingModule } from "./app.routes";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[AppComponent],
    providers:[],
    imports: [BrowserModule,RoutingModule,RouterModule],
    bootstrap:[AppComponent],

   
})
export class AppModule{

}