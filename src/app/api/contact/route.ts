export const runtime = "nodejs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { sendEmail } from "@/lib/email/nodemailer-oauth";
import {
  createContactConfirmationEmail,
  createContactNotificationEmail,
} from "@/lib/email/templates/contact-notification";
import type { ContactEmailData } from "@/lib/types";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as ContactEmailData;

    // Validate required fields
    if (!body.fullName || !body.email || !body.message) {
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
    const sanitizedData: ContactEmailData = {
      fullName: body.fullName.trim().slice(0, 100),
      email: body.email.trim().toLowerCase().slice(0, 255),
      message: body.message.trim().slice(0, 5000),
    };

    // Send notification email to your Google Workspace inbox
    const notificationResult = await sendEmail({
      to: process.env.GMAIL_USER ?? "info@mophire.com",
      subject: `New Contact Message from ${sanitizedData.fullName}`,
      html: createContactNotificationEmail(sanitizedData),
      replyTo: sanitizedData.email,
    });

    if (!notificationResult.success) {
      console.error(
        "Failed to send notification email:",
        notificationResult.error,
      );
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 },
      );
    }

    // Send confirmation email to customer
    const confirmationResult = await sendEmail({
      to: sanitizedData.email,
      subject: "Thank You for Contacting Mophire Cleaning Services",
      html: createContactConfirmationEmail(sanitizedData.fullName),
      replyTo: process.env.GMAIL_USER ?? "info@mophire.com",
    });

    // Log if confirmation fails but don't fail the request
    if (!confirmationResult.success) {
      console.error(
        "Failed to send confirmation email:",
        confirmationResult.error,
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 },
    );
  }
}
