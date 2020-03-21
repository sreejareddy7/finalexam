import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) {
    this.httpClient.get("http://localhost:5003/customer")
    .subscribe();
    
    this.httpClient.post("http://localhost:5003/customer",{
         
    });
}
}
  