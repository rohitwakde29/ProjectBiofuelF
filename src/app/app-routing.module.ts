import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliermaterialdetailsComponent } from './components/suppliermaterialdetails/suppliermaterialdetails.component';
import { AddrawmaterialComponent } from './components/addrawmaterial/addrawmaterial.component';
import { AddsupplierComponent } from './components/addsupplier/addsupplier.component';
import { RawmateriallistComponent } from './components/rawmateriallist/rawmateriallist.component';
import { SupplierlistComponent } from './components/supplierlist/supplierlist.component';
import { CompanymateriallistComponent } from './components/companymateriallist/companymateriallist.component';
import { UpdateplayerComponent } from './components/updateplayer/updateplayer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ServiceComponent } from './components/service/service.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AddDistributorComponent } from './components/add-distributor/add-distributor.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DistributorProductDetailsComponent } from './components/distributor-product-details/distributor-product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DistributorListComponent } from './components/distributor-list/distributor-list.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {path:'add', component:AddrawmaterialComponent},
  {path:'addSupplier', component:AddsupplierComponent},
  {path:'details/:supplierId', component:SuppliermaterialdetailsComponent},
  {path:'raw', component:RawmateriallistComponent},
  {path:'supplierlist', component:SupplierlistComponent},
  {path:'companyrawlist', component:CompanymateriallistComponent},
  {path:'update/:rawMaterialId', component:UpdateplayerComponent},


  {path:'addd', component:AddProductComponent},
  {path:'addDistributor', component:AddDistributorComponent},
  {path:'details/:distributorId', component:DistributorProductDetailsComponent},
  {path:'product', component:ProductListComponent},
  {path:'distributorList', component:DistributorListComponent },
  // {path:'companyrawlist', component:CompanymateriallistComponent},
  {path:'update/:productId', component:UpdateProductComponent},

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },



  {path:'login',  component:LoginComponent},
  {path:'registration',  component:RegistrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
