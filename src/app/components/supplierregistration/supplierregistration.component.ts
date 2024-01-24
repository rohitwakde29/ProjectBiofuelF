import { Component } from '@angular/core';
import { SupplierUser } from '../../models/SupplierUser';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-supplierregistration',
  templateUrl: './supplierregistration.component.html',
  styleUrl: './supplierregistration.component.css'
})
export class SupplierregistrationComponent {

  supplieruser=new SupplierUser();
  msg=' ';

  constructor(private _router:Router,private _service:RegistrationService){}

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  registerSupplierUser()
  {
    this._service.RegisterSupplierUserFromRemote(this.supplieruser).subscribe((data)=>{
      console.log("Response received");
      this.msg="Registration successfull";
      this._router.navigate(['/supplierloginsuccess'])
      
    },error=>{
      console.log("Exception occured");
      this.msg=error.error;
    });
  };


  gotosupplierlogin(){
    this._router.navigate(['/supplierlogin'])
  }

  gotosupplierloginsuccess(){
    this._router.navigate(['/supplierloginsuccess'])
  }

}
