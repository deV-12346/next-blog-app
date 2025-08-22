import { Schema,model, models } from "mongoose";
const subscriptionSchema = new Schema({
            email:{
                  type:String,
                  required:true
            },
},{timestamps:true})
const EmailModel = models.Email || model("Email",subscriptionSchema)
export default EmailModel