import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceComponent } from '../../service/service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone : true,
  imports :[ReactiveFormsModule,FormsModule],
 
 
})
export class LoginComponent {


  reactiveForm !:FormGroup

  service : ServiceComponent =inject(ServiceComponent);
  router : Router =inject(Router);

  ngOnInit(){

    localStorage.clear();

    this.reactiveForm =new FormGroup({
      email : new FormControl(null,[Validators.required, Validators.email]),
      password : new FormControl(null,Validators.required)
    }) 
    this.router.navigate(['']);

    if(Boolean(localStorage.getItem("isLogged"))){
      this.service.isLogged =true;
      this.router.navigate([localStorage.getItem('currentPath')]);
    }
  }


  onLogin(){

    

    if(this.reactiveForm.controls['email'].invalid)
    {
      alert("Email is not valid....!");
      return;
    }
    
    if(this.reactiveForm.controls['password'].invalid)
      {
        alert("Password is Required....!");
        return;
      }
   

    if(this.reactiveForm.invalid){
      alert("Email Address and Password required");
    }
    else{
      let email = this.reactiveForm.controls['email'].value;
      let password = this.reactiveForm.controls['password'].value;
   
      this.service.onLogin(email , password).subscribe({
        next :(res)=>{
            localStorage.setItem(Object.keys(res).toString(),Object.values(res).toString());
            
     
          if( localStorage.getItem('token'))
          {
            this.router.navigateByUrl('dashboard');
            this.service.isLogged =true;
          }
        },
        error : (err)=>{
            alert("User Not found");
        },
        complete :()=>{
          
          
        }
        
    }) 

    }
    
  }

}
