import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/Product';
import { DistributorProductServiceService } from '../../services/distributor-product-service.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {

  productId: number=0;
  product: Product=new Product();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: DistributorProductServiceService) { }

onSubmit() {
  this. updatePrduct();
}

  updatePrduct() {
    this.service.updateProduct(this.product).subscribe((data: any)=>{
      console.log(data);
      this.product= new Product();
      this.gotoList();
    })
  }
  gotoList() {
    this.router.navigate(['list']);
  }

}
