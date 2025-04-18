import {  platformBrowser } from "@angular/platform-browser";
import { AppModule } from "./app/app.module";
import { ChildModlue } from "./app/child-comp/child.module";


platformBrowser().bootstrapModule(AppModule);
