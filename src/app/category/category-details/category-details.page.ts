import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {

  selectedCategory:Categories;
  constructor(private route:ActivatedRoute,private categoryService:CategoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(CategoryId=>{
      let id= CategoryId.get("idCategory");
      this.selectedCategory=this.categoryService.getOnecategorylist(id);
    })
  }
}
