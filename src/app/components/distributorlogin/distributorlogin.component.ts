import { Component } from '@angular/core';
import { DistributorUser } from '../../models/DistributorUser';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distributorlogin',
  templateUrl: './distributorlogin.component.html',
  styleUrl: './distributorlogin.component.css'
})
export class DistributorloginComponent {

  distributoruser=new DistributorUser();
  msg='';
  loginformat:string="Distributor@gmail.com";

  constructor(private _service:RegistrationService,private _router:Router){}

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  
  loginDistributorUser(){
    this._service.LoginDistributorUserFromRemote(this.distributoruser).subscribe((data)=>{
      console.log("Response received");
      this._router.navigate(['/distributorloginsuccess'])
    
    },error=>{
      console.log("Exception occured");
      this.msg="Bad Credentials, please enter valid data";
    });
  };


  gotodistributorregistration(){
    console.log("Navigate to registration");
    this._router.navigate(['/distributorregistration'])
  }

  gotodistributorloginsuccess(){
    this._router.navigate(['distributorloginsuccess'])
  }

}
