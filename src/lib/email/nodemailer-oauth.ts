import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import { Resend } from "resend";

// Create reusable transporter
// Priority:
// 1) Generic SMTP via SMTP_HOST (works with SendGrid, Postmark, Mailgun, Gmail SMTP relay)
// 2) Gmail SMTP with App Password when available (simple and reliable)
// 3) Gmail OAuth2 (existing flow)
export const useCustomSmtp = Boolean(process.env.SMTP_HOST);
export const useResend = Boolean(process.env.RESEND_API_KEY);
export const useSmtpPassword = Boolean(process.env.GMAIL_APP_PASSWORD);
export const authMode = useResend
  ? "resend"
  : useCustomSmtp
    ? "smtp-custom"
    : useSmtpPassword
      ? "smtp-app-password"
      : "oauth2";

if (!process.env.GMAIL_USER) {
  // Fail fast with a clear message if sender is missing
  // This will surface in server logs during startup or first send attempt
  console.warn(
    "GMAIL_USER is not set. Emails cannot be sent without a sender address.",
  );
}

const transporter = useResend
  ? undefined
  : useCustomSmtp
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST!,
        port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
        secure: process.env.SMTP_SECURE
          ? /^(1|true|yes)$/i.test(process.env.SMTP_SECURE)
          : false,
        auth:
          process.env.SMTP_USER || process.env.SMTP_PASS
            ? {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
              }
            : undefined, // allow IP-authenticated relays with no auth
      })
    : useSmtpPassword
      ? nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        })
      : nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.GMAIL_USER,
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
          },
        });

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: SendEmailOptions): Promise<{
  success: boolean;
  messageId?: string;
  error?: string;
}> {
  try {
    const from = `Mophire Cleaning <${process.env.GMAIL_USER ?? "info@mophire.com"}>`;

    if (useResend) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      type ResendSendResult = {
        error?: { message?: string } | null;
        data?: { id?: string } | null;
      };
      const result = (await resend.emails.send({
        from,
        to,
        subject,
        html,
        reply_to: replyTo,
      })) as unknown as ResendSendResult;
      if (result?.error) {
        throw new Error(result.error.message || "Resend send error");
      }
      return {
        success: true,
        messageId: result?.data?.id,
      };
    } else {
      const mailOptions: Mail.Options = {
        from,
        to,
        subject,
        html,
        replyTo,
      };

      const info = await transporter!.sendMail(mailOptions);

      return {
        success: true,
        messageId: info.messageId,
      };
    }
  } catch (error) {
    // Provide structured diagnostics without exposing secrets
    const e = error as unknown as {
      code?: string;
      responseCode?: number;
      command?: string;
      response?: string;
      message?: string;
    };
    console.error("Email send error:", {
      authMode,
      code: e?.code,
      responseCode: e?.responseCode,
      command: e?.command,
      response: e?.response?.split("\n")[0],
      message: e?.message,
    });
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}

// Verify connection on startup (optional but recommended)
export async function verifyEmailConnection(): Promise<boolean> {
  try {
    if (useResend) {
      console.log("✅ Resend (HTTP API) will be used for emails");
      return true; // actual send will validate the key
    }
    await transporter!.verify();
    const modeMsg =
      authMode === "smtp-custom"
        ? "✅ SMTP (custom) connection is ready"
        : authMode === "smtp-app-password"
          ? "✅ Gmail SMTP (App Password) connection is ready"
          : "✅ Gmail OAuth2 connection is ready";
    console.log(modeMsg);
    return true;
  } catch (error) {
    const modeMsg =
      authMode === "smtp-custom"
        ? "❌ SMTP (custom) connection failed:"
        : authMode === "smtp-app-password"
          ? "❌ Gmail SMTP (App Password) connection failed:"
          : "❌ Gmail OAuth2 connection failed:";
    console.error(modeMsg, error);
    return false;
  }
}

// Optional: attempt a non-blocking verification on module load to surface config issues early
void verifyEmailConnection();
