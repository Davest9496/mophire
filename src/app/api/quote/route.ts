export const runtime = "nodejs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { sendEmail } from "@/lib/email/nodemailer-oauth";
import {
  createQuoteConfirmationEmail,
  createQuoteNotificationEmail,
} from "@/lib/email/templates/quote-notification";
import type { QuoteEmailData } from "@/lib/types";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as QuoteEmailData;

    // Validate required fields
    if (
      !body.fullName ||
      !body.email ||
      !body.phone ||
      !body.service ||
      !body.message
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Sanitize input to prevent XSS
    const sanitizedData: QuoteEmailData = {
      fullName: body.fullName.trim().slice(0, 100),
      email: body.email.trim().toLowerCase().slice(0, 255),
      phone: body.phone.trim().slice(0, 20),
      service: body.service.trim().slice(0, 100),
      message: body.message.trim().slice(0, 5000),
    };

    // Send notification email to your Google Workspace inbox
    const notificationResult = await sendEmail({
      to: process.env.GMAIL_USER ?? "info@mophire.com",
      subject: `New Quote Request from ${sanitizedData.fullName} - ${sanitizedData.service}`,
      html: createQuoteNotificationEmail(sanitizedData),
      replyTo: sanitizedData.email,
    });

    if (!notificationResult.success) {
      console.error(
        "Failed to send quote notification:",
        notificationResult.error,
      );
      return NextResponse.json(
        { error: "Failed to submit quote request. Please try again later." },
        { status: 500 },
      );
    }

    // Send confirmation email to customer
    const confirmationResult = await sendEmail({
      to: sanitizedData.email,
      subject: "Quote Request Received - Mophire Cleaning Services",
      html: createQuoteConfirmationEmail(sanitizedData.fullName),
      replyTo: process.env.GMAIL_USER ?? "info@mophire.com",
    });

    // Log if confirmation fails but don't fail the request
    if (!confirmationResult.success) {
      console.error(
        "Failed to send quote confirmation:",
        confirmationResult.error,
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Quote request submitted successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 },
    );
  }
}
