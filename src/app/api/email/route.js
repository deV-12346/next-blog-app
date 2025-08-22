import { connectDB } from "@/lib/config/db"
import EmailModel from "@/lib/models/email.model"
import { NextResponse } from "next/server"
const loadDb = async()=>{
      await connectDB()
}
loadDb()
export async function POST(req){
      const formData = await req.formData()
      const email = formData.get("email")
      if(!email){
            return NextResponse.json({
            success:false,
            message:"Email is required"
            })
      }
      await EmailModel.create({email});
      return NextResponse.json({
            success:true,
            message:"Email subscribed"
      })
}
export async function GET(req) {
      const emails = await EmailModel.find({}).sort({createdAt:-1})
      return NextResponse.json({
            success:true,
            message:"Success",
            data:emails
      })

}
export async function DELETE(req){
     const id = req.nextUrl.searchParams.get("id")
     if(!id){
      return NextResponse.json({
            success:false,
            message:"Something went wrong"
      })
     }
      await EmailModel.findByIdAndDelete(id)
      return NextResponse.json({
            success:true,
            message:"Email deleted"
      })
}