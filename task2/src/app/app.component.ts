

import { keyframes } from '@angular/animations';
import { Component } from '@angular/core';

import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { repeat } from 'rxjs';

interface Emp {
  image? :File,


  fName : string,
  lName : string,
  age : number,
  phone :number,
  email:string,
  id :number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : false
})
export class AppComponent {
  title = 'primeNG'; 

  autoId :number =1001;
  employee : Emp[]= [{id:this.autoId, fName:"Pavan" , lName : "Darshan", age:29, email: "pavan@mail.com", phone :123456789}];
  ngFname : string ='';
  ngLname : string =''
  ngEmail : string ='';
  ngPhone ?:number ;
  ngAge ?:number;
  isImageEdit :any;
  selectedImage : any[]=[];
  isImageChange : boolean =false;





  isAddForm : boolean =false;
  isEdit : boolean =false;
  isView :boolean =false;
  onAdd(){
    this.isAddForm= true;
  }

  onClose(){
    this.isAddForm=false;
    this.isEdit = false;
    this.isView=  false;
    this.selectedImage=[];
  }

  

  onSaveEmp(formVal : NgForm){
    if(formVal.invalid)
      return

    this.autoId=this.autoId+1;
    

    this.employee.push({
      id : this.autoId,
      fName: formVal.value.fname,
      lName: formVal.value.lname,
      email: formVal.value.email,
      age: formVal.value.age,
      phone: formVal.value.phone,
      image: this.selectedImage[0],
    })

    this.isAddForm=false;
    this.selectedImage=[];

  }

  onView(id :Number){
    this.isView=true;
    let emp =this.employee.filter((emp)=> emp.id === id);
    console.log(emp);
    this.isEdit = true;
    this.ngFname =emp[0].fName;
    this.ngLname = emp[0].lName;
    this.ngEmail = emp[0].email;
    this.ngPhone = emp[0].phone;
    this.ngAge = emp[0].age
    this.isImageEdit =emp[0].image

    emp=[]

  }

  editId ?:number;
  onEdit(id :number){
    this.selectedImage=[];
    let emp =this.employee.filter((emp)=> emp.id === id);

    this.isEdit = true;
    this.ngFname =emp[0].fName;
    this.ngLname = emp[0].lName;
    this.ngEmail = emp[0].email;
    this.ngPhone = emp[0].phone;
    this.ngAge = emp[0].age;
    
    this.isImageEdit =emp[0].image

    this.editId =id;
    emp =[]

  }
  onUpdate(formVal : NgForm){
    let empIndex =this.employee.findIndex((emp)=> emp.id === this.editId);
    this.employee[empIndex].id =  this.editId!;
    this.employee[empIndex].fName =  formVal.value.fname;
    this.employee[empIndex].lName =  formVal.value.lname;
    this.employee[empIndex].email =  formVal.value.email;
    this.employee[empIndex].age =  formVal.value.age;
    this.employee[empIndex].phone =  formVal.value.phone;

   if( this.isImageChange){
      this.employee[empIndex].image =this.selectedImage[0];
   }
    else{
     this.employee[empIndex].image =this.isImageEdit;
    }



    this.isEdit = false;

    this.editId=0;


  }



  onDelete(id : number){
   
    let empIndex =this.employee.findIndex((emp)=> emp.id === id);
    this.employee.splice(empIndex,1);
  
  }
  onImageUpload(event: any) {
    this.isImageChange=true;
    this.selectedImage= event.target.files;

  }


  isEven =false;
  isOdd =false;

  evenCount: number =10;

  rotateEven(){
    if(this.evenCount === 1){
      this.isEven =true;
      this.isOdd = false;
      alert("Reached maximum speed")
    }
    
    else{
      this.evenCount-=1;
      this.isEven =true;
      this.isOdd = false;
    }
  }
  rotateOdd(){
    if(this.evenCount === 1){
      this.isEven = false;
      this.isOdd =true
      alert("Reached maximum speed")
     
    }
    
    else{
    this.evenCount-=1;
    this.isEven = false;
    this.isOdd =true
    }
  }


  rotateStop(){
    this.isEven = false;
    this.isOdd =false;
    this.evenCount=10;
  }


  repeatID =0
  addCircle(){
    let circle = document.getElementById('circle');
    if(circle){
      let clonedCircle = (circle as HTMLElement).cloneNode(true);
      this.repeatID++; 
      (clonedCircle as HTMLElement).id = "circle" +this.repeatID;
      (clonedCircle as HTMLElement).draggable =true;
      document.getElementById('copyContainer')?.appendChild(clonedCircle);
      clonedCircle.addEventListener('dragstart', (event) => this.ondragstart(event));
    }
  }
  addSquare(){
    let square = document.getElementById('square');
    if(square){
      let clonedSquare = (square as HTMLElement).cloneNode(true);
      this.repeatID++; 
      (clonedSquare as HTMLElement).id = "square" +this.repeatID;
      (clonedSquare as HTMLElement).draggable =true;
      document.getElementById('copyContainer')?.appendChild(clonedSquare);
      clonedSquare.addEventListener('dragstart', (event) => this.ondragstart(event));
      
    }
  }

  addTriangle(){
    let triangle = document.getElementById('triangle');
    if(triangle){
      let clonedTriangle = (triangle as HTMLElement).cloneNode(true);
      this.repeatID++; 
      (clonedTriangle as HTMLElement).id = "triangle" +this.repeatID;
      (clonedTriangle as HTMLElement).draggable =true;
      document.getElementById('copyContainer')?.appendChild(clonedTriangle);
      clonedTriangle.addEventListener('dragstart', (event) => this.ondragstart(event));
      
    }

  }

  ondragstart(event : any){  
    event.dataTransfer.setData('text', event.target.id);
  }

  dragoverHandler(event: any) {
    event.preventDefault();
  }




  dropEvent(event: any) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    console.log(data);
    
    const draggedElement = document.getElementById(data);
    const copyContainer = document.getElementById('copyContainer');

    if (draggedElement && copyContainer) {
  
      const container = copyContainer.getBoundingClientRect();
      const elementWidth = draggedElement.offsetWidth;
      const elementHeight = draggedElement.offsetHeight;

      console.log(container.left);
      console.log(elementHeight);

      let left = event.screenX - 25;
      let top = event.screenY - 105;
      console.log(left);
      
      if (left < container.left)
        left = container.left;  
  
      if (top < container.top) 
        top = container.top;  
      
      if (left + elementWidth > container.right) 
        left = container.right - elementWidth;  
      
      if (top + elementHeight > container.bottom) 
        top = container.bottom - elementHeight;  
      

      console.log(left);
      console.log(top);
      
      draggedElement.style.position = 'absolute';
      draggedElement.style.left = `${left}px`;
      draggedElement.style.top = `${top}px`;
    }
 }




}