import { mongoConnect } from "@/helper/MongoDb";
import { taskModel } from "@/models/tasks";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, content, userId } = await request.json();
  console.log("aman")
  await mongoConnect();
  try {
    let task = await taskModel.create({
      title: title,
      content: content,
      userId: userId,
    });
    return NextResponse.json(
      { status: true, message: "task created", data: task },
      { status: "201" }
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
