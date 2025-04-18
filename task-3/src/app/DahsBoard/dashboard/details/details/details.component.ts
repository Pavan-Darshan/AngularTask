
import { Component } from '@angular/core';
import { UpperCase } from '../../../../service/upperCase-Pipe';

@Component({
  selector: 'app-details',
  imports: [UpperCase],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {


  data : string = 'Upper case pipe';
}
