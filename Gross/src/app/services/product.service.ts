import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import {tap , catchError, Observable, throwError } from 'rxjs';
@Injectable(
  /* {
  providedIn: 'root'
} */
)
export class ProductService {

  path: string = "http://localhost:3000/products";
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(e: HttpErrorResponse) {
    //throw new Error('Method not implemented.');
    let msgError: string = "";
    if (e.error instanceof ErrorEvent) {

      msgError = "Bir hata oluştu. " + e.error.message;
    } else {
      msgError = "Sistem hatası oluştu.";

    }
    return throwError(msgError);
  }


}
