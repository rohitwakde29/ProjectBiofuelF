import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Router } from '@angular/router';
import { Distributor } from '../../models/Distributor';
import { DistributorProductServiceService } from '../../services/distributor-product-service.service';

@Component({
  selector: 'app-distributor-list',
  templateUrl: './distributor-list.component.html',
  styleUrl: './distributor-list.component.css'
})
export class DistributorListComponent {

  
  public distributor: Observable<Distributor[]> =of([]);
  
  constructor(private service: DistributorProductServiceService,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.distributor = this.service.getAllDistributor();
  }

  // updateDetails(id:number)
  //   {
  //     this.router.navigate(['update', id]);
  //   }

  distributorDetails(id: number){
    this.router.navigate(['details', id]);
  }

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
