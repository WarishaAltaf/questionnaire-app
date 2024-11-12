import { NextResponse } from "next/server";
import connectDatabase from "@/utils/db/connectDatabase";
import User from "@/model/User";

export async function POST(req) {
  try {
    console.log("first", req);
    if (!req) {
      return new NextResponse(
        JSON.stringify({
          message: "All fields are required",
        }),
        { status: 400 }
      );
    }
    await connectDatabase();
    const body = await req.json();
    const { email, progress, status } = body;

    if (!email || !progress || !status) {
      return new NextResponse(
        JSON.stringify({
          message: "All fields are required",
        }),
        { status: 400 }
      );
    }
    const newUserProgress = await User.create({
      email,
      progress,
      status,
    });

    if (!newUserProgress) {
      return new NextResponse(
        JSON.stringify({ message: "User progress not saved" }),
        { status: 400 }
      );
    }
    return new NextResponse(
      JSON.stringify({
        message: "Success",
        data: newUserProgress,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving response:", error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
}
