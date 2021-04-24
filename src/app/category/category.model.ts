import { Courses } from "./courses.model";

export class Categories{
constructor(
  public id?: String,
  public title?:String,
  public description?:String,
  public imageUrl?:String,
  public courses?:Courses [],
){}
}
