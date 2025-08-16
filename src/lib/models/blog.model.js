import { Schema,model,models } from "mongoose";
const blogSchema = new Schema({
      title:{
            type:String,
            required:true
      },
      description:{
            type:String,
            required:true
      },
      category:{
            type:String,
            required:true
      },
      author:{
            required:true,
            type:String
      },
      image:{
            type:String,
            required:true,
      },
      author_img:{
            type:String,
            required:true
      },
      date:{
            type:Date,
            default:Date.now
      }
}) 
export const blogModel = models.blog || model("blog",blogSchema)
