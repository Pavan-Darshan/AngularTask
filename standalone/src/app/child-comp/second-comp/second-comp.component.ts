import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrl: './second-comp.component.css',
  standalone : false,
 
})
export class SecondCompComponent {


  second : string ="component second working"
}
