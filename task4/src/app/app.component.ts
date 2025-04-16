import { Component, ElementRef, inject, QueryList, Renderer2, viewChild, ViewChild, viewChildren, ViewChildren, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridsterComponentInterface, GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Popover } from 'primeng/popover';
import { NewCompComponent } from './newComp/new-comp/new-comp.component';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:false,

})
export class AppComponent {
  title = 'task4';


  @ViewChild('tripA') tripA !: ElementRef;
  @ViewChild('tripB') tripB !: ElementRef; 




  @ViewChildren('arrowCanvas') canvasRefs!: QueryList<ElementRef<HTMLCanvasElement>>;
  @ViewChildren('lineCanvas') lineCanvases!: QueryList<ElementRef<HTMLCanvasElement>>;

  area :any [] =[];
  areaSlipt :any [] =[];
  areaSlipt2 :any [] =[];
  extendArea = false;

  onSave(){

    let tripA = this.tripA.nativeElement.value.trim();
    let tripB = this.tripB.nativeElement.value.trim();

    if(tripA === '' || tripB === '' ){
      alert("Empty value not allow......! ");
      return;
    }
    if(tripA === tripB){
      alert("Both trip details are same...... ");
      return;
    }
    if(tripA.length <3)
      return alert("TripA should be more than 2 character....!")
    
    if(tripB.length <3)
      return alert("TripB should be more than 2 character....!")
  
    let trip = (tripA+"-"+tripB).toUpperCase();
     
    
    if(this.areaSlipt2.length>0)
      this.areaSlipt2.push(trip);
    else{
      if( this.area.length>0 && this.area[this.area.length-1].toUpperCase() === trip.toUpperCase() && !this.extendArea){
        this.extendArea=true;
        this.area.pop();
        this.areaSlipt.push(trip);
        this.areaSlipt.push(trip);
      }
      else{
        if(this.extendArea)
          this.areaSlipt2.push(trip);
        else
          this.area.push(trip);
      }
    }
    this.refreshCanvas();
    this.tripA.nativeElement.value = '';
    this.tripB.nativeElement.value = '';

  }


  //Arrow line------------------------------------------------------->
  drawAllArrows() {
    this.canvasRefs.forEach((canvasRef) => {
      const ctx = canvasRef.nativeElement.getContext('2d');
      if (ctx) {
        this.drawArrow(ctx, 0, 10, 150, 10);
      }
    });
  }

  drawArrow(ctx: CanvasRenderingContext2D, fromX: number, fromY: number, toX: number, toY: number) {
    const headLength = 10;
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);


    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    

    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6));
    ctx.lineTo(toX, toY);
    ctx.fillStyle = 'black';
    ctx.fill();
  }

  // Simple line--------------------------------------------------->
  drawAllLines() {
    this.lineCanvases.forEach((canvasRef) => {
      const ctx = canvasRef.nativeElement.getContext('2d');
      if (ctx) {
        this.drawLine(ctx, 0, 10, 150, 10); 
      }
    });
  }

  drawLine(ctx: CanvasRenderingContext2D, fromX: number, fromY: number, toX: number, toY: number) {
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  
  refreshCanvas() {
    setTimeout(() => {
      this.drawAllArrows();
      this.drawAllLines();
    });
  }



  compareAreas(i: number, area: any[]): boolean {
    
    if (i === 0 || !area[i - 1] || !this.area[i]) return false;
  
    let prev : string= area[i - 1];
    let curr : string= area[i];
  
    const prevSlice = prev.slice( prev.indexOf('-') + 1).toUpperCase();
    const currSlice = curr.slice(0, curr.indexOf('-')).toUpperCase();
    return prevSlice === currSlice;
  }



  dataNew :  string ='Angular'

 @ViewChild('newdata') data1 !: ElementRef;
//  @ViewChildren('comp') comp !: QueryList<NewCompComponent>;
@ViewChild ('comp') comp !: NewCompComponent;

 array =[1,2,3,4,5];

 http :HttpClient = inject(HttpClient);

 
onload(){
  //  this.comp.nativeElement = this.dataNew;
  //   // this.comp=dataNew;


  this.http.post("http://localhost:3000/user",{
    "title": "a title",
    "views": 100
  }).subscribe();


  this.http.get("http://localhost:3000/user/3e9c").subscribe((res)=>{
    console.log(res);
    
  })

  this.comp.sub.subscribe((val)=>{
    console.log(val);
    
  });


  this.comp.behav.subscribe((val)=>{
    console.log(val);
    
  })
}

}

