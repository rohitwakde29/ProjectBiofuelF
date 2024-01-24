import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DistributorProductServiceService } from '../../services/distributor-product-service.service';

@Component({
  selector: 'app-distributor-header',
  templateUrl: './distributor-header.component.html',
  styleUrl: './distributor-header.component.css'
})
export class DistributorHeaderComponent {

  constructor(private service:DistributorProductServiceService,
    private router: Router) { }

    distributorHome(){
      this.router.navigate(['product'])
    }
  

  addProduct(){
    this.router.navigate(['addd']);
  }

  // addSupplier()
  // {
  //   this.router.navigate(['addSupplier']);
  // }

  distributorList()
  {
    this.router.navigate(['distributorList']);
  }

  productList()
  {
    this.router.navigate(['productList']);
  }

  // companymaterialList()
  // {
  //   this.router.navigate(['companyrawlist']);
  // }

}
