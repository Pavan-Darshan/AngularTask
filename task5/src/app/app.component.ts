import { Component, ViewChild } from '@angular/core';
import { GridsterComponentInterface, GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Popover } from 'primeng/popover';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : false
})
export class AppComponent {
  title = 'task5';



@ViewChild('op') op!: Popover;
 
gridOptions !: GridsterConfig;
gridOptions1 !: GridsterConfig;
items !: GridsterItem[];
items1 !: GridsterItem[];
iscolumn =false;
selectedButton : number =4;
maxRowsLeft :number = 32;
maxColumnLeft : number = 16;
minColumnLeft : number =1 ;
minRowsLeft : number = 2;
maxRowsRight :number = 100;
maxColumnRight : number = 24 ;
leftRows:number = 2;
leftCol :number = 1 ;
rightX : number= 6;
rightY : number= 0;
layoutActive : boolean = true;

constructor() {
  this.gridLeft();
  this.gridRight();
}


toggle(event :any) {
  this.op.toggle(event);

}

gridLeft(){
  
  this.gridOptions = {
    draggable: {
      enabled: true,  
    },
    resizable: {
      enabled: true,
    },
    itemChangeCallback: this.itemChanges.bind(this),
    itemInitCallback : this.itemInit.bind(this),
    initCallback : this.Init.bind(this),
    
    pushItems: true,
    swap: true,
    minCols: this.minColumnLeft,
    maxCols: this.maxColumnLeft,
    minRows: this.minRowsLeft,
    maxRows: this.maxRowsLeft,
    margin: 10,
    scrollToNewItems : false,
    displayGrid : 'none',
    gridType  :"fixed",
    fixedColWidth: 362,
    fixedRowHeight: 70,
    api : {
      optionsChanged : ()=>{
        console.log("Option Changed is called.....!");
      }
    }
  };

  this.items = [
    { x: 0, y: 0, cols: this.leftCol, rows: this.leftRows, name: 'Item 1' },
    { x: 1, y: 0, cols: this.leftCol, rows: this.leftRows, name: 'Item 2' },
    { x: 2, y: 0, cols: this.leftCol, rows: this.leftRows, name: 'Item 3' },
    { x: 3, y: 0, cols: this.leftCol, rows: this.leftRows, name: 'Item 4' },
    { x: 0, y: 2, cols: this.leftCol, rows: this.leftRows, name: 'Item 5' },
    { x: 1, y: 2, cols: this.leftCol, rows: this.leftRows, name: 'Item 6' },
    { x: 2, y: 2, cols: this.leftCol, rows: this.leftRows, name: 'Item 7' },
    { x: 3, y: 2, cols: this.leftCol, rows: this.leftRows, name: 'Item 8' },
  ];
  
}


itemInit(item : GridsterItem){
  console.log("iteminit");
  
}

Init(item : GridsterComponentInterface){
  console.log("init");
  
}

gridRight(){
  this.gridOptions1 = {
    draggable: {
      enabled: true,  
    },
    resizable: {
      enabled: true,
    },
    itemChangeCallback: this.itemChanges.bind(this),
    pushItems: true,
    swap: true,
    minCols: 1,
    maxCols: this.maxColumnRight,
    minRows: 4,
    maxRows: this.maxRowsRight,
    margin: 10, 
    scrollToNewItems : false,
    displayGrid : 'none',
    gridType  :"fixed",
    fixedColWidth: 114,
    fixedRowHeight: 42,
  
    
  };

  this.items1 = [
    { x: 0, y: 0, cols: 6, rows: 6, name: 'Right 1' },
    { x: this.rightX, y: this.rightY, cols: 6, rows: 6, name: 'Right 2' },
  ];
}


itemChanges(item: GridsterItem) {
  
  
}

onGridSelect(column : number){

  this.selectedButton = column;

  this.items = [];

  let cols : number = 1;

  if(column === 1)
    cols=4;
 
  if(column === 2)
    cols = 2;
  
  for (let i = 0; i < 8; i++) {
    
    const x = i % column;              
    const y = Math.floor(i / column) *2; 
    this.items.push({
      x: x,
      y: y,
      cols: cols,
      rows: 2,
      name: `Item ${i + 1}`
      
    });
  }

}




showInColumn(){
  this.selectedButton =4;
  this.layoutActive =false;
  this.iscolumn=true;
  this.maxColumnLeft =2;
  this.rightX =0;
  this.rightY =6;
  this.gridLeft();
  this.gridRight();
  
}

showInRow(){
  this.selectedButton =4;
  this.layoutActive =true;
  this.iscolumn=false;
  this.maxColumnLeft= 4;
  this.gridLeft();
  this.rightX =6;
  this.rightY =0;
  this.gridRight();
}
}
