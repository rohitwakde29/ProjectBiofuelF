import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { SupplierUser } from '../models/SupplierUser';
import { DistributorUser } from '../models/DistributorUser';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public LoginUserFromRemote(user:User):Observable<any>{

    return this._http.post<any>("http://localhost:9090/adminLogin/login",user)

  }

  public RegisterUserFromRemote(user:User):Observable<any>{

    return this._http.post<any>("http://localhost:9090/adminLogin/register",user)

  }

  public LoginSupplierUserFromRemote(supplieruser:SupplierUser):Observable<any>{

    return this._http.post<any>("http://localhost:9090/suppliersLogin/suppLogin",supplieruser)

  }

  public RegisterSupplierUserFromRemote(supplieruser:SupplierUser):Observable<any>{

    return this._http.post<any>("http://localhost:9090/suppliersLogin/suppRegister",supplieruser)

  }

  public LoginDistributorUserFromRemote(distributoruser:DistributorUser):Observable<any>{

    return this._http.post<any>("http://localhost:9090/distributorsLogin/distLogin",distributoruser)

  }

  public RegisterDistributorUserFromRemote(distributoruser:DistributorUser):Observable<any>{

    return this._http.post<any>("http://localhost:9090/distributorsLogin/distRegister",distributoruser)

  }

}
