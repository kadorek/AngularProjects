import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { MsgService } from '../services/msg.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { VirtualTimeScheduler } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  private mService: MsgService;
  constructor(
    private http: HttpClient,
    private proService: ProductService,
    private routeData: ActivatedRoute
  ) {
    this.mService = new MsgService();
  }
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[];

  ngOnInit(): void {
    this.routeData.params.subscribe((p) => {
      
      console.log("product Route data");      
      console.log(p);
      if (p['categoryName']) {
        this.proService
          .getAllProductsByName(p['categoryName'])
          .subscribe((data) => (this.products = data));
      } else {
        this.proService
          .getAllProducts()
          .subscribe((data) => (this.products = data));
      }
    });
  }

  AddToCart(product: Product) {
    this.mService.Success(product.title + ' ürünü sepete eklendi');
  }
}
