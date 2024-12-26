import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const { challenge, phoneNumber } = body;

  console.log("Recv challenge: ", challenge, phoneNumber);

  if (challenge !== "123456" || phoneNumber !== "5719699603") {
    return NextResponse.json(
      { error: 'Challenge is incorrect.' },
      { status: 400 }
    );
  }

  return NextResponse.json({
    jwt: "This is a JWT token"
  });
}