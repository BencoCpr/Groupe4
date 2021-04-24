import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Categories } from '../../category.model';
import { CategoryService } from '../../category.service';
import { Courses } from '../../courses.model';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.page.html',
  styleUrls: ['./cours-details.page.scss'],
})
export class CoursDetailsPage implements OnInit {
  selectedCourse:Courses;
  constructor(private route:ActivatedRoute,private categoryService:CategoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(CategoryId=>{
      let id= CategoryId.get("idCours");
      let idCat=CategoryId.get("idCategory");
      this.selectedCourse=this.categoryService.getOnecategorylist(idCat).courses.find(found=>found.id==id);
    })
  }

}
