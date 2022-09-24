import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title="Ürün Listesi"
  products:any[]=
  [
    {id:1,name:"Asus ZenBook 13",price:25000,categoryId:1,description:"asus zen book 13 inch wonder full"},
    {id:3,name:"Toshiba Satalite 15,6",price:27000,categoryId:1,description:"toshiba notebook is wonder full"},
    {id:10,name:"Poco X3 NFC",price:6000,categoryId:3,description:"POCO X3 NFC is wonder full"}
  ]

  ngOnInit(): void {
  }

}
