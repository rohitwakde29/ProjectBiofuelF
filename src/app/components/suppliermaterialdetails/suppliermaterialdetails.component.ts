import { Component } from '@angular/core';
import { SuppliermaterialserviceService } from '../../services/suppliermaterialservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../../models/Supplier';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-suppliermaterialdetails',
  templateUrl: './suppliermaterialdetails.component.html',
  styleUrl: './suppliermaterialdetails.component.css'
})
export class SuppliermaterialdetailsComponent {





  supplierId: number = 0;
  supplier: Supplier = new Supplier();

  constructor(private route: ActivatedRoute, private router: Router,
    private service: SuppliermaterialserviceService) { }

  ngOnInit() {
    this.supplier = new Supplier();

    this.supplierId = this.route.snapshot.params['supplierId'];

    this.service.getOneSupplier(this.supplierId).subscribe((data) => {
      console.log(data);
      this.supplier = data;

    })
  }

  list() {
    this.router.navigate(['supplierlist']);
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
