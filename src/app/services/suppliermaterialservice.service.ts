import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuppliermaterialserviceService {

  baseUrl='http://localhost:9090';
  
  constructor(private http:HttpClient) { }

  getOneSupplier(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/suppliers/getSupplier/${id}`);
  }

  getOneRawMaterial(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/suppliers/getRawMaterial/${id}`);
  }

  getSupplier(email:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/suppliers/getemail/${email}`);
  }

  addRawMaterial(rawmaterial: Object): Observable<Object> {
    console.log(rawmaterial);
    return this.http.post(`${this.baseUrl}/suppliers/saveRawMaterial`, rawmaterial); 
  }

  getAllRawMaterial():any
  {
    return this.http.get(`${this.baseUrl}/suppliers/getAllRawMaterial`);
  }

  getAllSupplier():any
  {
    return this.http.get(`${this.baseUrl}/suppliers/getAllSupplier`);
  }

  addSupplier(supplier: Object): Observable<Object> {
    console.log(supplier);
    return this.http.post(`${this.baseUrl}/suppliers/saveSupplier`, supplier);
  }

  updateRawMaterial(rawmaterial:object){
    return this.http.put(`${this.baseUrl}/suppliers/updateRawMaterial`,rawmaterial);
  }

  deleteRawMaterial(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/suppliers/deleteRawMaterialbyid/${id}`, { responseType: 'text' });
  }

}
