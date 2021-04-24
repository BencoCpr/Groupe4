import { Chapters } from "./chapters.model";

export class Courses{
  constructor(
    public id?: String,
    public title?:String,
    public description?:String,
    public imageUrl?:String,
    public chapters?: Chapters []
  ){}
  }
