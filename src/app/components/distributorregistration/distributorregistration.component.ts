import { Component } from '@angular/core';
import { DistributorUser } from '../../models/DistributorUser';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-distributorregistration',
  templateUrl: './distributorregistration.component.html',
  styleUrl: './distributorregistration.component.css'
})
export class DistributorregistrationComponent {

  distributoruser=new DistributorUser();
  msg=' ';

  constructor(private _router:Router,private _service:RegistrationService){}

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  registerDistributorUser()
  {
    this._service.RegisterDistributorUserFromRemote(this.distributoruser).subscribe((data)=>{
      console.log("Response received");
      this.msg="Registration successfull";
      this._router.navigate(['/distributorloginsuccess'])
      
    },error=>{
      console.log("Exception occured");
      this.msg=error.error;
    });
  };


  gotodistributorlogin(){
    this._router.navigate(['/distributorlogin'])
  }

  gotodistributorloginsuccess(){
    this._router.navigate(['/distributorloginsuccess'])
  }

}
