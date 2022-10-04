import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {
  constructor(
    private catService: CategoryService,
    private routeData: ActivatedRoute,
    private router:Router
  ) {}
  selectedCategory="";
  title = 'Kategoriler';
  categories: Category[] = [];
  ngOnInit(): void {
    
    this.routeData.params.subscribe((p) => {
      //alert(p['categoryName']);
      console.log("category Route data");      
      console.log(p);
      if (p['categoryName']) {
        this.selectedCategory=p['categoryName'];
      }
      console.log("selected categorry : "+ this.selectedCategory);
      
      this.categories = this.catService.getAllCategories();
      //if (p['categoryName']) {this.selectedCategory = p['categoryName'].toLowerCase()};
    });
  }


  RouteTry(){
    this.routeData.params.subscribe((p) => {
      //alert(p['categoryName']);
      console.log("category Route data");      
      console.log(p);
      if (p['categoryName']) {
        this.selectedCategory=p['categoryName'];
      }
      console.log("selected categorry : "+ this.selectedCategory);
      
      this.categories = this.catService.getAllCategories();
      //if (p['categoryName']) {this.selectedCategory = p['categoryName'].toLowerCase()};
    });


  }

}
