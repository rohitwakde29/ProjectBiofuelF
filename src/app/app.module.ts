import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuppliermaterialdetailsComponent } from './components/suppliermaterialdetails/suppliermaterialdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { AddrawmaterialComponent } from './components/addrawmaterial/addrawmaterial.component';
import { AddsupplierComponent } from './components/addsupplier/addsupplier.component';
import { FormsModule } from '@angular/forms';
import { RawmateriallistComponent } from './components/rawmateriallist/rawmateriallist.component';
import { SupplierlistComponent } from './components/supplierlist/supplierlist.component';
import { CompanymateriallistComponent } from './components/companymateriallist/companymateriallist.component';
import { UpdateplayerComponent } from './components/updateplayer/updateplayer.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SupplierregistrationComponent } from './components/supplierregistration/supplierregistration.component';
import { SupplierloginComponent } from './components/supplierlogin/supplierlogin.component';
import { DistributorloginComponent } from './components/distributorlogin/distributorlogin.component';
import { DistributorregistrationComponent } from './components/distributorregistration/distributorregistration.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddDistributorComponent } from './components/add-distributor/add-distributor.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DistributorListComponent } from './components/distributor-list/distributor-list.component';
import { DistributorProductDetailsComponent } from './components/distributor-product-details/distributor-product-details.component';
import { DistributorHeaderComponent } from './components/distributor-header/distributor-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SuppliermaterialdetailsComponent,
    AddrawmaterialComponent,
    AddsupplierComponent,
    RawmateriallistComponent,
    SupplierlistComponent,
    CompanymateriallistComponent,
    UpdateplayerComponent,
    
    AddProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    AddDistributorComponent,
    DistributorListComponent,
    DistributorProductDetailsComponent,
    DistributorHeaderComponent,


    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    FeedbackComponent,
    ServiceComponent,
    LoginComponent,
    RegistrationComponent,
    SupplierregistrationComponent,
    SupplierloginComponent,
    DistributorloginComponent,
    DistributorregistrationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
