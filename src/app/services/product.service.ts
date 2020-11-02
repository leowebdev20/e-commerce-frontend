import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ServerResponse, ProductModelServer } from 'src/app/models/product.model';
// import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

 // Fetch products from the backend
 getAllProducts(numberOfResults = 10): Observable<ServerResponse> {
  return this.http.get<ServerResponse>(this.SERVER_URL + '/products', {
    params: {
      limit: numberOfResults.toString()
    }
  });
 }

// GET SINGLE PRODUCT FROM SERVER
 getSingleProduct(id: number): Observable<ProductModelServer> {
  return this.http.get<ProductModelServer>(this.SERVER_URL + '/products' + id);
 }

// GET PRODUCTS FROM ONE CATEGORY
getProductsFromCategory(catName: string): Observable<ProductModelServer[]> {
  return this.http.get<ProductModelServer[]>(this.SERVER_URL + '/products/category/' + catName);
}


}
