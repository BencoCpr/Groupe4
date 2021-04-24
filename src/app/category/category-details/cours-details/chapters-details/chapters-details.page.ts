import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { Chapters } from 'src/app/category/chapters.model';

@Component({
  selector: 'app-chapters-details',
  templateUrl: './chapters-details.page.html',
  styleUrls: ['./chapters-details.page.scss'],
})
export class ChaptersDetailsPage implements OnInit {
  selectedChapters:Chapters;
  constructor(private route:ActivatedRoute,private categoryService:CategoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(CategoryId=>{
      let id= CategoryId.get("idCours");
      let idCat=CategoryId.get("idCategory");
      let idChap=CategoryId.get("idChapter")
      this.selectedChapters=this.categoryService.getOnecategorylist(idCat).courses.find(found=>found.id==id).chapters.find(found2=>found2.id==idChap);
    })
  }

}
