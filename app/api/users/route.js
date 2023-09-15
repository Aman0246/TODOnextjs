import { useModel } from "../../../models/userModel";
import { NextResponse } from "next/server";
import {mongoConnect}  from '@/helper/MongoDb'

export async function POST(req) {
  try {
   await mongoConnect()
    let { name, email, password, about, profileURL } = await req.json();
console.log(name, email, password, about, profileURL )
const olduser=await useModel.findOne({email:email})
if (olduser){return NextResponse.json(
  {
    status: false,
    message: "Email Already used",
  },
  { status: 201 }
)}
    let newUser = await useModel.create({
      name: name,
      email: email,
      password: password,
      about: about,
      profileURL: profileURL,
    });
    return NextResponse.json(
      {
        status: true,
        message: "Register done",
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        message: "Error",
        data: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(){
  await mongoConnect()
  try {
    let allUser = await useModel.find().select({password:0,__v:0})
    return NextResponse.json({status:true,message:'All_User',data:allUser},{status : 200})
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        message: "Error",
        data: error.message,
      },
      { status: 500 }
    );
  }
}


export async function DELETE(req){
  await mongoConnect()
try {
    let id=req.nextUrl.searchParams.get('id')
    console.log(id)
    let user=await useModel.findOne({_id:id})
    if(!user){return NextResponse.json({status:false,message:'Wrong Param Id'},{status:404})}
    await useModel.findByIdAndDelete(id)
    return NextResponse.json({status:true,message:'User Deleted'},{status:200})
  
} catch (error) {
    return NextResponse.json(
      {
        status: false,
        message: "Error",
        data: error.message,
      },
      { status: 500 }
    );
  }
}
