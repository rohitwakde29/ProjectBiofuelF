import { RawMaterial } from "./RawMaterial";

export class Supplier{
    supplierId:number;
    supplierName:string;
    email:string;
    phoneNo:string;
    quantity:number;
    rawmaterial:RawMaterial[];

    constructor(){
        this.supplierId=0;
		this.supplierName="";
		this.email="";
		this.phoneNo="";
        this.quantity=0;
		this.rawmaterial=[];
    }
}