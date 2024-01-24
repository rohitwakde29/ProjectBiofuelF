import { Component } from '@angular/core';
import { User } from '../../models/user';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user=new User();
   msg='';
   loginformat:string="Admin@gmail.com";


  constructor(private _service:RegistrationService, private _router : Router){}

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  loginUser(){
    this._service.LoginUserFromRemote(this.user).subscribe((data)=>{
      console.log("Response received");
      this._router.navigate(['/loginsuccess'])
      
    },error=>{
      console.log("Exception occured");
      this.msg="Bad Credentials, please enter valid data";
    });
  };

  gotoregistration(){
    console.log("NAvigate to registration");
    this._router.navigate(['/registration'])

  }

  gotologinsuccess(){
    this._router.navigate(['/loginsuccess'])

  }
    

}
