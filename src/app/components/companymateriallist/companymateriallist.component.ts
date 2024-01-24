import { Component } from '@angular/core';
import { SuppliermaterialserviceService } from '../../services/suppliermaterialservice.service';
import { Observable, of } from 'rxjs';
import { RawMaterial } from '../../models/RawMaterial';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companymateriallist',
  templateUrl: './companymateriallist.component.html',
  styleUrl: './companymateriallist.component.css'
})
export class CompanymateriallistComponent {

  public rawmaterials: Observable<RawMaterial[]> =of([]);
  
  constructor(private service: SuppliermaterialserviceService,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.rawmaterials = this.service.getAllRawMaterial();
  }




  updateDetails(id:number)
    {
      this.router.navigate(['update', id]);
    }

  // playerDetails(id: number){
  //   this.router.navigate(['details', id]);
  // }

  deletePlayer(id:number)
    {
      return this.service.deleteRawMaterial(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })

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
