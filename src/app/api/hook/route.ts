import {NextRequest, NextResponse} from "next/server";
import { ipAddress } from '@vercel/functions';

const TRADING_VIEW_IPS: Set<string> = new Set([
  "52.89.214.238",
  "34.212.75.30",
  "54.218.53.128",
  "52.32.178.7",
])

export async function POST(
  request: NextRequest,
): Promise<NextResponse> {
  const ipAddr: string | undefined = ipAddress(request);

  if (ipAddr && TRADING_VIEW_IPS.has(ipAddr)) {
    console.log("Woa! TradingView is here!");
  }
  return new NextResponse("ack!");
}