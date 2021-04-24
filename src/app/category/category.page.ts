import { Component, OnInit } from '@angular/core';
import { Categories } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categoryList:Categories[]
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryList=this.categoryService.getcategorylist();
  }

}
