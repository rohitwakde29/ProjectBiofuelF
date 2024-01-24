import { Component } from '@angular/core';
import { Supplier } from '../../models/Supplier';
import { Observable, of } from 'rxjs';
import { SuppliermaterialserviceService } from '../../services/suppliermaterialservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrl: './supplierlist.component.css'
})
export class SupplierlistComponent {

  public supplier: Observable<Supplier[]> =of([]);
  
  constructor(private service: SuppliermaterialserviceService,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.supplier = this.service.getAllSupplier();
  }

  // updateDetails(id:number)
  //   {
  //     this.router.navigate(['update', id]);
  //   }

  supplierDetails(id: number){
    this.router.navigate(['details', id]);
  }

  // deletePlayer(id:number)
  //   {
  //     return this.service.deletePlayer(id).subscribe((data)=>{
  //       console.log(data);
  //       this.getAll();
  //     })

  //   }



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
