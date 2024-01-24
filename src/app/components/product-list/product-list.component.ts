import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Product } from '../../models/Product';
import { DistributorProductServiceService } from '../../services/distributor-product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  public products: Observable<Product[]> =of([]);
  
  constructor(private service: DistributorProductServiceService ,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.products = this.service.getAllProduct();
  }


  addDistributor()
  {
    this.router.navigate(['addDistributor']);
  }

  // updateDetails(id:number)
  //   {
  //     this.router.navigate(['update', id]);
  //   }

  // playerDetails(id: number){
  //   this.router.navigate(['details', id]);
  // }

  // deletePlayer(id:number)
  //   {
  //     return this.service.deletePlayer(id).subscribe((data)=>{
  //       console.log(data);
  //       this.getAll();
  //     })

  //   }


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

}
