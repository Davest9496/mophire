export const runtime = "nodejs";
import { NextResponse } from "next/server";
import {
  authMode,
  useSmtpPassword,
  verifyEmailConnection,
} from "@/lib/email/nodemailer-oauth";

export async function GET() {
  const missing: string[] = [];

  if (!process.env.GMAIL_USER) missing.push("GMAIL_USER");

  if (useSmtpPassword) {
    if (!process.env.GMAIL_APP_PASSWORD) missing.push("GMAIL_APP_PASSWORD");
  } else {
    if (!process.env.GOOGLE_CLIENT_ID) missing.push("GOOGLE_CLIENT_ID");
    if (!process.env.GOOGLE_CLIENT_SECRET) missing.push("GOOGLE_CLIENT_SECRET");
    if (!process.env.GOOGLE_REFRESH_TOKEN) missing.push("GOOGLE_REFRESH_TOKEN");
  }

  const ok = await verifyEmailConnection();

  return NextResponse.json({
    ok,
    mode: authMode,
    missing,
  });
}
