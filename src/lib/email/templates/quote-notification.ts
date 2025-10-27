import type { QuoteEmailData } from "@/lib/types";

export function createQuoteNotificationEmail(data: QuoteEmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #4682B4; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">New Quote Request</h1>
  </div>
  
  <div style="background-color: #f9f9f9; padding: 30px; margin-top: 20px;">
    <h2 style="color: #102A43; margin-top: 0;">Client Details</h2>
    
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${data.fullName}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <a href="mailto:${data.email}" style="color: #4682B4;">${data.email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <a href="tel:${data.phone}" style="color: #4682B4;">${data.phone}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Service:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <span style="background-color: #008080; color: white; padding: 4px 12px; border-radius: 4px; font-size: 14px;">
            ${data.service}
          </span>
        </td>
      </tr>
    </table>
    
    <h3 style="color: #102A43; margin-top: 30px;">Requirements</h3>
    <div style="background-color: white; padding: 20px; border-left: 4px solid #4682B4;">
      ${data.message.replace(/\n/g, "<br>")}
    </div>
    
    <div style="margin-top: 30px; padding: 20px; background-color: #fff4e6; border-left: 4px solid #ff9800;">
      <p style="margin: 0; color: #e65100;"><strong>⏰ Action Required:</strong> Please respond with a quote within 24 hours.</p>
    </div>
  </div>
  
  <div style="margin-top: 30px; padding: 20px; background-color: #f0f0f0; text-align: center; font-size: 14px; color: #666;">
    <p style="margin: 0;">This email was sent from the Mophire quote request form.</p>
    <p style="margin: 10px 0 0 0;">Reply directly to respond to ${data.fullName}.</p>
  </div>
</body>
</html>
  `.trim();
}

export function createQuoteConfirmationEmail(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote Request Received</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #4682B4; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Quote Request Received!</h1>
  </div>
  
  <div style="padding: 30px; margin-top: 20px;">
    <p style="font-size: 16px;">Hi ${name},</p>
    
    <p style="font-size: 16px;">Thank you for requesting a quote from Mophire Cleaning Services!</p>
    
    <div style="background-color: #e3f2fd; padding: 20px; margin: 20px 0; border-left: 4px solid #4682B4;">
      <p style="margin: 0; font-size: 16px; color: #102A43;">
        <strong>✓ Your request has been received</strong><br>
        <strong>✓ We'll send you a personalised quote within 24 hours</strong><br>
        <strong>✓ Check your inbox (and spam folder) for our response</strong>
      </p>
    </div>
    
    <h3 style="color: #102A43;">What happens next?</h3>
    <ol style="font-size: 16px; line-height: 1.8;">
      <li>Our team will review your requirements</li>
      <li>We'll prepare a detailed, personalised quote</li>
      <li>You'll receive the quote via email within 24 hours</li>
      <li>You can accept, modify, or discuss the quote with us</li>
    </ol>
    
    <div style="background-color: #f9f9f9; padding: 20px; margin: 30px 0; border-left: 4px solid #008080;">
      <p style="margin: 0; color: #102A43;"><strong>Need urgent assistance?</strong></p>
      <p style="margin: 10px 0 0 0; color: #102A43;">Email: info@mophire.com</p>
    </div>
    
    <p style="font-size: 16px;">We look forward to serving you!</p>
    
    <p style="font-size: 16px;">Best regards,<br>
    <strong>The Mophire Team</strong></p>
  </div>
  
  <div style="margin-top: 30px; padding: 20px; background-color: #f0f0f0; text-align: center; font-size: 14px; color: #666;">
    <p style="margin: 0;">© 2025 Mophire Cleaning Services. All rights reserved.</p>
  </div>
</body>
</html>
  `.trim();
}
