import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  console.log("Getting request");
  return new NextResponse("ack!");
}