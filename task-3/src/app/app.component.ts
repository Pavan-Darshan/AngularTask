import { Component} from '@angular/core';
import { ButtonModule } from 'primeng/button';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : true,
  imports :[ButtonModule,FormsModule,RouterModule,ReactiveFormsModule],

})
export class AppComponent {

  
 
}



