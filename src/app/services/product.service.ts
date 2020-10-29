import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

 // Fetch products from the backend
 getAllProducts(numberOfResults = 10) {
  return this.http.get(this.SERVER_URL + '/products', {
    params: {
      limit: numberOfResults.toString()
    }
  })
 }
}
