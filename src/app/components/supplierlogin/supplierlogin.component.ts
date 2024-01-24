import { Component } from '@angular/core';
import { SupplierUser } from '../../models/SupplierUser';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierlogin',
  templateUrl: './supplierlogin.component.html',
  styleUrl: './supplierlogin.component.css'
})
export class SupplierloginComponent {

  supplieruser=new SupplierUser();
  msg='';
  loginformat:string="Supplier@gmail.com";

  constructor(private _service:RegistrationService,private _router:Router){}

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  loginSupplierUser(){
    this._service.LoginSupplierUserFromRemote(this.supplieruser).subscribe((data)=>{
      console.log("Response received");
      this._router.navigate(['/supplierloginsuccess'])
    
    },error=>{
      console.log("Exception occured");
      this.msg="Bad Credentials, please enter valid data";
    });
  };

  gotosupplierregistration(){
    console.log("Navigate to registration");
    this._router.navigate(['/supplierregistration'])
  }

  gotosupplierloginsuccess(){
    this._router.navigate(['supplierloginsuccess'])
  }
  

}
