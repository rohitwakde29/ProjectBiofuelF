import { Component } from '@angular/core';
import { RawMaterial } from '../../models/RawMaterial';
import { SuppliermaterialserviceService } from '../../services/suppliermaterialservice.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rawmateriallist',
  templateUrl: './rawmateriallist.component.html',
  styleUrl: './rawmateriallist.component.css'
})
export class RawmateriallistComponent {

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


  addSupplier()
  {
    this.router.navigate(['addSupplier']);
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

  home(){
    this.router.navigate([''])
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
