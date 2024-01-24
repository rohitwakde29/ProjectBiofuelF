import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Router } from '@angular/router';
import { Distributor } from '../../models/Distributor';
import { Product } from '../../models/Product';
import { DistributorProductServiceService } from '../../services/distributor-product-service.service';

@Component({
  selector: 'app-add-distributor',
  templateUrl: './add-distributor.component.html',
  styleUrl: './add-distributor.component.css'
})
export class AddDistributorComponent {

  dist=new Distributor();
  newproduct=new Product();

  public products: Observable<Product[]> =of([]);
 
  constructor(private service:DistributorProductServiceService,
    private router: Router) {
    
      this.dist.products[0]=new Product();
     }


     ngOnInit() {
      this.getAll();
    }
  
    getAll() {
      this.products = this.service.getAllProduct();
    }
    onSubmit()
    {
      this.save();
    }
  
    save()
    {
      console.log(this.dist);
      this.service.addDistributor(this.dist).subscribe();
      this.gotoHomePage();
  }

  gotoHomePage(){
    this.router.navigate(['/']);
  }

  Product(){
    this.router.navigate(['']);
  }

 
}
