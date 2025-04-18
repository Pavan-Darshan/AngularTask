import { Component } from '@angular/core';

@Component({
  selector: 'app-third-comp',

  templateUrl: './third-comp.component.html',
  styleUrl: './third-comp.component.css',
  standalone : true

})
export class ThirdCompComponent {
  data : string ="Third component working Successfully"
}
