import { mongoConnect } from "@/helper/MongoDb";
import { taskModel } from "@/models/tasks";
import { NextResponse } from "next/server";

//Delete single
export async function DELETE(request, {params}) {
    let id = params.Taskid

    try {
      await mongoConnect();
      let data = await taskModel.find({_id: id });
      if(!data){ return NextResponse.json(
          { status: false, message:'No Task Found'},
          { status: "200" }
        );}
        await taskModel.deleteOne({_id: id});
      return NextResponse.json(
        { status: true, message: ` Tasks  Deleted` },
        { status: "200" }
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
  
//Update Task
export async function PUT(request, {params}) {
    let id = params.Taskid
    const {title,content,status} = request.json()
    try {
      await mongoConnect();
      let data = await taskModel.findOne({_id: id });
      if(!data){ return NextResponse.json(
          { status: false, message:'No Task Found'},
          { status: "400" }
        );}
        let updatedTask=await taskModel.findByIdAndUpdate(id,{title:title,content:content,status:status},{ new: true });
      return NextResponse.json(
        { status: true, message:'Updated',data:updatedTask },
        { status: "200" }
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
  