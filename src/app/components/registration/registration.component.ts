import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  user = new User();
  msg=' ';

  
  constructor(private _router : Router,private _service:RegistrationService){}

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  showConfirmPassword: boolean = false;

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }


  registerUser()
  {
    this._service.RegisterUserFromRemote(this.user).subscribe((data)=>{
      console.log("Response received");
      this.msg="Registration successfull";
      this._router.navigate(['/loginsuccess'])
      
    },error=>{
      console.log("Exception occured");
      this.msg=error.error;
    });
  };



  gotologin(){
    this._router.navigate(['/login'])

  }

  gotologinsuccess(){
    this._router.navigate(['/loginsuccess'])

  }


}
