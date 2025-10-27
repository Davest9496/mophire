import type { ContactEmailData } from "@/lib/types";

export function createContactNotificationEmail(data: ContactEmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #008080; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">New Contact Message</h1>
  </div>
  
  <div style="background-color: #f9f9f9; padding: 30px; margin-top: 20px;">
    <h2 style="color: #102A43; margin-top: 0;">Contact Details</h2>
    
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${data.fullName}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <a href="mailto:${data.email}" style="color: #008080;">${data.email}</a>
        </td>
      </tr>
    </table>
    
    <h3 style="color: #102A43; margin-top: 30px;">Message</h3>
    <div style="background-color: white; padding: 20px; border-left: 4px solid #008080;">
      ${data.message.replace(/\n/g, "<br>")}
    </div>
  </div>
  
  <div style="margin-top: 30px; padding: 20px; background-color: #f0f0f0; text-align: center; font-size: 14px; color: #666;">
    <p style="margin: 0;">This email was sent from the Mophire contact form.</p>
    <p style="margin: 10px 0 0 0;">Reply directly to this email to respond to ${data.fullName}.</p>
  </div>
</body>
</html>
  `.trim();
}

export function createContactConfirmationEmail(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Mophire</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #008080; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Thank You for Contacting Us!</h1>
  </div>
  
  <div style="padding: 30px; margin-top: 20px;">
    <p style="font-size: 16px;">Hi ${name},</p>
    
    <p style="font-size: 16px;">Thank you for reaching out to Mophire Cleaning Services. We've received your message and will get back to you within 24 hours.</p>
    
    <p style="font-size: 16px;">In the meantime, if you have any urgent queries, please don't hesitate to contact us directly via email.</p>
    
    <div style="background-color: #f9f9f9; padding: 20px; margin: 30px 0; border-left: 4px solid #008080;">
      <p style="margin: 0; color: #102A43;"><strong>Service Area:</strong> Greater London Area</p>
      <p style="margin: 10px 0 0 0; color: #102A43;"><strong>Email:</strong> info@mophire.com</p>
    </div>
    
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
