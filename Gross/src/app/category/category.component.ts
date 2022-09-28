import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Kategoriler";
  categories: Category[] = [
    { id: 1, name: "Bilgisayar" },
    { id: 2, name: "Telefon" },
    { id: 3, name: "Elektronik" },
    { id: 4, name: "Yaşam" },
    { id: 5, name: "Giyim" }
  ];
  ngOnInit(): void {
  }

}
