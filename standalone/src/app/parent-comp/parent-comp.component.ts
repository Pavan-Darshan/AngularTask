import { Component, ViewChild } from '@angular/core';
import { ThirdCompComponent } from '../child-comp/third-comp/third-comp.component';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.css',
  standalone : false
})
export class ParentCompComponent {


  //   @ViewChild('thirdComp') thirdComp !: ThirdCompComponent ;
  //   // @ViewChild('second') second !: ThirdCompComponent ;

  // ngAfterViewInit(){
  //     console.log(this.thirdComp.data);


  //     // console.log(this.second.data);
      
      
  // }

}
