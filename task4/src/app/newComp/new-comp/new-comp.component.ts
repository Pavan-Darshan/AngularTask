import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css',
  standalone : false
})
export class NewCompComponent  {
 



 
  sub : Subject<any> = new Subject();

  behav : BehaviorSubject  <any> = new BehaviorSubject(100);

  data : string = "angular";

    

  ngOnInit(){

   
    
    setTimeout(()=>{ this.sub.next(1)},2000);
    setTimeout(()=>{ this.sub.next(2)},3000);
    setTimeout(()=>{ this.sub.next(3)},4000);
    setTimeout(()=>{ this.sub.complete()},5000);
    setTimeout(()=>{ this.sub.next(4)},5000);
  
  
  
    setTimeout(()=>{ this.behav.next(200)},1000);
  }
  

}
