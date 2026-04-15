//Basics of embedding and referencing 
const mongoose=require("mongoose")
async function main() {
    try{
       await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
       console.log("Connected to mongoDB");
       
       const orderSchema=new mongoose.Schema({
        product:String,
        prices:Number,
       });

       const userSchema=new mongoose.Schema({
        name:String,
        orders:[orderSchema]//embedded document
       });
       const User=mongoose.model("User",userSchema);
       const embeddedUser = await User.create({
        orders:[
            {product:"Laptop",price:5365},
            {product:"Printer",price:6879},
            {product:"Projector",price:4523}
        ]
       });
    //    const users = await User.find().lean();
    //    console.log(JSON.stringify(users,null,2));
       
       //Referencing 
       const userRefSchema = new mongoose.Schema({
            name:String
       });
       const orderRefSchema = new mongoose.Schema({
        product:String,
        price:Number,
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'UserRef'
        }
       });
       const UserRef = mongoose.model('UserRef',userRefSchema);
       const OrderRef = mongoose.model('orderRef',orderRefSchema);

       const refUser = await UserRef.create({name:"Rahul"});
       await OrderRef.create([
        {product:"Phone",price:70000,user:refUser._id},
        {product:"Charger",price:20000,user:refUser._id},
       ]);
       console.log("Referenced orders");
       console.log(await OrderRef.find().populate("user"));
    }
    catch(error){
       console.log(error.message);
    }
    finally{
        await mongoose.connection.disconnect;
           console.log("Connction Disconnected");
    }
}
main();
















