import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.formData();

  console.log("Recv challenge: ", body);

  return NextResponse.json({
    jwt: "This is a JWT token"
  });
}