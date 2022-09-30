import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { MsgService } from "../services/msg.service";
declare let alertify: any;



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private mService: MsgService;
  constructor() {
    this.mService = new MsgService();
  }
  title = "Ürün Listesi";
  filterText = "";
  products: Product[] =
    [
      { id: 1, name: "Asus ZenBook 13", price: 25000, categoryId: 1, description: "asus zen book 13 inch wonder full", imageUrl: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
      { id: 3, name: "Toshiba Satalite 15,6", price: 27000, categoryId: 1, description: "toshiba notebook is wonder full", imageUrl: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
      { id: 10, name: "Poco X3 NFC", price: 6000, categoryId: 3, description: "POCO X3 NFC is wonder full", imageUrl: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }
    ]

  ngOnInit(): void {
  }

  AddToCart(product: Product) {

    //alertify.success(product.name + " ürünü sepete eklendi");
    this.mService.Success(product.name + " ürünü sepete eklendi");
  }


}
