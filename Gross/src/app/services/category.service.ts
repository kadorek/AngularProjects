import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Category } from '../category/category';
import { tap, catchError, Observable, throwError } from 'rxjs';
@Injectable()
/* {
  providedIn: 'root'
} */
export class CategoryService {
  path: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getAllCategories(): Category[] {
    let allProducts = this.http.get<Product[]>(this.path);
    let result: Category[] = [];
    let categoryIndex:number=1;

    allProducts.forEach((ps) =>
      ps.map((v, i) => result.findIndex(x=>x.name==v.category.toUpperCase())==-1? result.push({ id: categoryIndex++, name: v.category.toUpperCase() }):null)
    );
    allProducts.pipe(
      catchError(this.handleError)
    ).subscribe()
    //console.log(result);
    return result;
    /* return this.http.get<Product[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    ); */
  }

  handleError(e: HttpErrorResponse) {
    //throw new Error('Method not implemented.');
    let msgError: string = '';
    if (e.error instanceof ErrorEvent) {
      msgError = 'Bir hata oluştu. ' + e.error.message;
    } else {
      msgError = 'Sistem hatası oluştu.';
    }
    return throwError(msgError);
  }
}
