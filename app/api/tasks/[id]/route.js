import { mongoConnect } from "@/helper/MongoDb";
import { taskModel } from "@/models/tasks";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  let id = params.id;
  try {
    await mongoConnect();
    let data = await taskModel.find({ userId: id });
    if(data.length==0){ return NextResponse.json(
        { status: false, message:'No Task Found'},
        { status: "200" }
      );}
    return NextResponse.json(
      { status: true, message: `ALL Tasks of ${id}`, data: data },
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

// //Delete all
// export async function DELETE(request, { params }) {
//   let id = params.id;
//   try {
//     await mongoConnect();
//     let data = await taskModel.find({ userId: id });
//     if(data.length==0){ return NextResponse.json(
//         { status: false, message:'No Task Found'},
//         { status: "200" }
//       );}
//       await taskModel.deleteMany({userId : id});
//     return NextResponse.json(
//       { status: true, message: `ALL Tasks of ${id} Deleted` },
//       { status: "200" }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       {
//         status: false,
//         message: "Error",
//         data: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }
