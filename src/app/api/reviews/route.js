import connectMongoDB from "@/libs/mongodb";
import Review from "@/models/review"; // Assuming you have a Review model for your reviews
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectMongoDB();
  const reviews = await Review.find({});
  return NextResponse.json(reviews);
};

export const POST = async (req) => {
  const { author, pictureUrl, position } = await req.json();
  await connectMongoDB();
  await Review.create({ author, pictureUrl, position });
  return NextResponse.json({ message: "Review Created" }, { status: 201 });
};
