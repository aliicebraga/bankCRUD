import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransferService {
  url = '/transfer'

  constructor(private http:HttpClient) {

   }

  getTransfer(){
    return this.http.get(this.url)
  }
  addTransfer(transfer:Transferencia){
    return this.http.post(this.url, transfer)
  }
  getUmaTransfer(id:any){
    return this.http.get(this.url + '/' + id)
  }
  editTransfer(id:any, transfer:Transferencia){
    return this.http.put(this.url + '/' + id, transfer)
  }
  deleteTransfer(id:any){
    return this.http.delete(this.url + '/' + id)
  }
}

export interface Transferencia{
  id_transfer?:string
  nome_cliente?:string
  conta_cliente?:string
  valor?:string
}
