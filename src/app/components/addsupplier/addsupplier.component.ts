import { Component } from '@angular/core';
import { Supplier } from '../../models/Supplier';
import { RawMaterial } from '../../models/RawMaterial';
import { Observable, of } from 'rxjs';
import { SuppliermaterialserviceService } from '../../services/suppliermaterialservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrl: './addsupplier.component.css'
})
export class AddsupplierComponent {

  supp=new Supplier();
  newrawmaterial=new RawMaterial();

  public rawmaterial: Observable<RawMaterial[]> =of([]);
 
  constructor(private service:SuppliermaterialserviceService,
    private router: Router) {
    
      this.supp.rawmaterial[0]=new RawMaterial();
     }


     ngOnInit() {
      this.getAll();
    }
  
    getAll() {
      this.rawmaterial = this.service.getAllRawMaterial();
    }
    onSubmit()
    {
      this.save();
    }
  
    save()
    {
      console.log(this.supp);
      this.service.addSupplier(this.supp).subscribe();
      this.gotoHomePage();
  }

  gotoHomePage(){
    this.router.navigate(['/']);
  }

  RawMaterial(){
    this.router.navigate(['']);
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
