import { Component } from '@angular/core';
import { RawMaterial } from '../../models/RawMaterial';
import { SuppliermaterialserviceService } from '../../services/suppliermaterialservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrawmaterial',
  templateUrl: './addrawmaterial.component.html',
  styleUrl: './addrawmaterial.component.css'
})
export class AddrawmaterialComponent {

  rawmaterial=new RawMaterial();
  constructor(private service:SuppliermaterialserviceService,
    private router: Router) {
    
     }

  onSubmit()
  {
      this.save();
  }

  save()
  {
    this.service.addRawMaterial(this.rawmaterial).subscribe();
   
      this.gotoHomePage();
   
  }

  gotoHomePage(){
    this.router.navigate(['raw']);
  }

  Material(){
    this.router.navigate(['companyrawlist']);
  }


  supplierHome(){
    this.router.navigate(['raw'])
  }


addRawmaterial(){
  this.router.navigate(['add']);
}

// addSupplier()
// {
//   this.router.navigate(['addSupplier']);
// }

supplierList()
{
  this.router.navigate(['supplierlist']);
}

rawmaterialList()
{
  this.router.navigate(['rawlist']);
}

companymaterialList()
{
  this.router.navigate(['companyrawlist']);
}

}
