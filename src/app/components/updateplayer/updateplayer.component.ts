import { Component, OnInit } from '@angular/core';
import { SuppliermaterialserviceService } from '../../services/suppliermaterialservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RawMaterial } from '../../models/RawMaterial';

@Component({
  selector: 'app-updateplayer',
  templateUrl: './updateplayer.component.html',
  styleUrl: './updateplayer.component.css'
})
export class UpdateplayerComponent{



  rawmaterial: any = {}; // Assuming rawmaterial is an object to store form data

  constructor(private route: ActivatedRoute,private router: Router,
      private service: SuppliermaterialserviceService) { }

  ngOnInit() {
    // Fetch the raw material details using the route parameter
    const rawMaterialId = this.route.snapshot.params['rawMaterialId'];
    this.service.getOneRawMaterial(rawMaterialId).subscribe((data) => {
      this.rawmaterial = data; // Assuming your service has a method to get raw material details
    });
  }

  onSubmit() {
    // Call your service method to update the raw material
    this.service.updateRawMaterial(this.rawmaterial).subscribe((data) => {
      // Handle the result, maybe show a success message or navigate to a different page
      console.log('Raw material updated successfully', data);
      this.router.navigate(['companyrawlist']); // Navigate to the material list page
    });
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






  // rawMaterialId: number=0;
  // rawmaterial: RawMaterial=new RawMaterial();

  // constructor(private route: ActivatedRoute,private router: Router,
  //   private service: SuppliermaterialserviceService) { }


  //   ngOnInit() {
  //     this.rawmaterial = new RawMaterial();
  
  //     this. rawMaterialId = this.route.snapshot.params['rawMaterialId'];
      
      
  //     this.service.getOneRawMaterial(this.rawMaterialId).subscribe((data)=>{
  //       console.log(data);
  //       this.rawmaterial=data;
  //     })
            
  //   }

  //   onSubmit(){
  //     this. updateRawMaterial();
  //   }

  //   updateRawMaterial()
  //   {
  //     this.service.updateRawMaterial(this.rawmaterial).subscribe((data)=>{
  //       console.log(data);
  //       this.rawmaterial= new RawMaterial();
  //       this.gotoList();
  //     })
  //   }

  //   gotoList(){
  //     this.router.navigate(['companyrawlist']);
  //   }


