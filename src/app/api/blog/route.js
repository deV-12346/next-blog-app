import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import {writeFile} from "fs/promises"
import {  blogModel } from "@/lib/models/blog.model";
const loadDB = async()=>{
      await connectDB()
}
loadDB()
export async function GET(req) {
      return NextResponse.json({msg:"Api is working"})
}

export async function  POST(req) {
     try {
      const formdata = await req.formData()
      const timestamp = Date.now()

      const image = formdata.get("image")
      console.log(image)
      
      const imageByteData = await image.arrayBuffer();
      const buffer=  Buffer.from(imageByteData)
      const path = `./public/uploads/${timestamp}_${image.name}`
      await writeFile(path,buffer)
      const imgURL = `/uploads/${timestamp}_${image.name}`
      console.log(imgURL)

      
            const title = formdata.get("title")
            const description= formdata.get("description")
            const category=formdata.get("category")
            const author= formdata.get("author")
            const author_img = formdata.get("author_img")
            const img = imgURL
      if([title,description,category,author,author_img].some((field)=>field.trim() ==="")){
            return NextResponse.json({
                  success:false,
                  message:"All fields are required"
            },{status:400})
      }
      
      const blogData = await blogModel.create({
            title,
            description,
            category,
            image:img,
            author,
            author_img
      })

      return NextResponse.json({
            success:true,
            message:"Blog added",
            blogData:blogData
      })
     } catch (error) {
      return NextResponse.json({
            success:false,
            message:error.message
      },{status:500})
     }
}