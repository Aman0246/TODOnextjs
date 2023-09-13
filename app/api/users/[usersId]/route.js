
import {mongoConnect}  from '@/helper/MongoDb'
import { useModel } from '@/models/userModel'
import { NextResponse } from 'next/server'

export async function PUT(request,{params}){
    await mongoConnect();
    const {usersId}=params;
    let { name, email, password, about, profileURL } = await request.json();
    let oldUser=await useModel.findOne({_id:usersId})
    if(!oldUser){
        return NextResponse.json({status:false,message:'User Not found'},{status:404})
    }
    await useModel.findByIdAndUpdate(usersId,{ name, email, password, about, profileURL },{new:true})
    return NextResponse.json({status:true,message:'User Updated'},{status:404})
  
}
