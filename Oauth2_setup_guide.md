# Email Setup Guide: Nodemailer + Google OAuth2

## Overview

Since App Passwords are disabled on your Google Workspace account, we'll use **OAuth2** instead. This is actually Google's **recommended approach** for server applications and is more secure!

**What you'll get:**

- ✅ Use your existing Google Workspace (info@mophire.com)
- ✅ More secure than App Passwords
- ✅ 2,000 emails/day limit
- ✅ No additional costs
- ✅ Works with managed Google Workspace accounts

**Setup time:** 20-25 minutes (one-time setup)

---

## Step 1: Create Google Cloud Project (5 min)

### 1.1 Go to Google Cloud Console

1. Visit [console.cloud.google.com](https://console.cloud.google.com)
2. Sign in with your Google Workspace account (info@mophire.com)

### 1.2 Create New Project

1. Click the project dropdown at the top (says "Select a project")
2. Click **"New Project"**
3. Project name: `Mophire Email Service`
4. Location: Keep default or select your organization
5. Click **"Create"**
6. Wait for project to be created (~30 seconds)
7. Select your new project from the dropdown

---

## Step 2: Enable Gmail API (2 min)

### 2.1 Enable the API

1. In the Google Cloud Console, go to **"APIs & Services"** → **"Library"**
   - Or visit: https://console.cloud.google.com/apis/library
2. Search for: `Gmail API`
3. Click on **"Gmail API"**
4. Click **"Enable"**
5. Wait for it to enable (~10 seconds)

---

## Step 3: Configure OAuth Consent Screen (3 min)

### 3.1 Set Up Consent Screen

1. Go to **"APIs & Services"** → **"OAuth consent screen"**
   - Or visit: https://console.cloud.google.com/apis/credentials/consent
2. Choose **"Internal"** (if available) or **"External"**
   - **Internal** = Only users in your Google Workspace
   - **External** = Anyone with Google account (you'll need to add test users)
3. Click **"Create"**

### 3.2 Fill Out App Information

**OAuth consent screen:**

- App name: `Mophire Email Service`
- User support email: `info@mophire.com` (select from dropdown)
- App logo: (optional - skip for now)

**App domain (optional - can skip):**

- Application home page: `https://mophire.com`
- Application privacy policy: `https://mophire.com/privacy` (if you have one)
- Application terms of service: `https://mophire.com/terms` (if you have one)

**Developer contact information:**

- Email: `info@mophire.com`

4. Click **"Save and Continue"**

### 3.3 Scopes

1. Click **"Add or Remove Scopes"**
2. Manually add this scope by typing it in the "Manually add scopes" box:
   ```
   https://www.googleapis.com/auth/gmail.send
   ```
3. Click **"Add to Table"**
4. Click **"Update"**
5. Click **"Save and Continue"**

### 3.4 Test Users (if using "External")

If you chose "External" user type:

1. Click **"Add Users"**
2. Add: `info@mophire.com`
3. Click **"Add"**
4. Click **"Save and Continue"**

### 3.5 Summary

1. Review your settings
2. Click **"Back to Dashboard"**

---

## Step 4: Create OAuth2 Credentials (3 min)

### 4.1 Create Credentials

1. Go to **"APIs & Services"** → **"Credentials"**
   - Or visit: https://console.cloud.google.com/apis/credentials
2. Click **"+ Create Credentials"** at the top
3. Select **"OAuth client ID"**

### 4.2 Configure OAuth Client

1. Application type: **"Web application"**
2. Name: `Mophire Website Backend`
3. **Authorized redirect URIs**: Click **"+ Add URI"**
   - Add: `https://developers.google.com/oauthplayground`
4. Click **"Create"**

### 4.3 Save Credentials

A popup will appear with your credentials:

- **Client ID**: (looks like: `123456789-xxxxx.apps.googleusercontent.com`)
- **Client Secret**: (looks like: `GOCSPX-xxxxxxxxxxxxx`)

**IMPORTANT:**

- Click **"Download JSON"** (backup)
- **Copy both values** - you'll need them in the next step
- Keep them secure!

---

## Step 5: Get Refresh Token (7 min)

This is the trickiest part but follow carefully:

### 5.1 Go to OAuth2 Playground

1. Visit [OAuth2 Playground](https://developers.google.com/oauthplayground)
2. Click the ⚙️ (Settings icon) in the top right
3. Check ✅ **"Use your own OAuth credentials"**
4. Enter:
   - **OAuth Client ID**: (from Step 4.3)
   - **OAuth Client Secret**: (from Step 4.3)
5. Click **"Close"**

### 5.2 Select Gmail API Scope

1. On the left side, find **"Gmail API v1"** and expand it
2. Select: ✅ `https://www.googleapis.com/auth/gmail.send`
3. Click **"Authorize APIs"** (blue button at bottom left)

### 5.3 Authorize Access

1. You'll be redirected to Google sign-in
2. Sign in with: **info@mophire.com**
3. You may see a warning: "Google hasn't verified this app"
   - Click **"Advanced"**
   - Click **"Go to Mophire Email Service (unsafe)"**
4. Review permissions
5. Click **"Continue"** or **"Allow"**
6. You'll be redirected back to OAuth Playground

### 5.4 Get Refresh Token

1. Click **"Exchange authorization code for tokens"** (Step 2)
2. You'll see a response with:
   - Access token
   - **Refresh token** ← This is what you need!
3. **Copy the Refresh Token** (looks like: `1//0xxxxx-xxxxx`)

⚠️ **CRITICAL:** Save this refresh token securely. You can't get the same one again, but you can generate a new one by repeating Step 5.

---

## Step 6: Configure Environment Variables

### 6.1 Local Development (.env.local)

Create `.env.local` in your project root:

```bash
# Google Workspace Email
GMAIL_USER=info@mophire.com

# OAuth2 Credentials (from Google Cloud Console)
GOOGLE_CLIENT_ID=123456789-xxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-xxxxxxxxxxxxx
GOOGLE_REFRESH_TOKEN=1//0xxxxx-xxxxx
```

Replace the values with your actual:

- Client ID (from Step 4)
- Client Secret (from Step 4)
- Refresh Token (from Step 5)

⚠️ **Never commit `.env.local` to Git!** (already in `.gitignore`)

### 6.2 Vercel Production

Add environment variables in Vercel:

1. Go to **Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**

2. Add these 4 variables:

```
Variable 1:
Name: GMAIL_USER
Value: info@mophire.com
Environment: Production, Preview, Development

Variable 2:
Name: GOOGLE_CLIENT_ID
Value: 123456789-xxxxx.apps.googleusercontent.com
Environment: Production, Preview, Development

Variable 3:
Name: GOOGLE_CLIENT_SECRET
Value: GOCSPX-xxxxxxxxxxxxx
Environment: Production, Preview, Development

Variable 4:
Name: GOOGLE_REFRESH_TOKEN
Value: 1//0xxxxx-xxxxx
Environment: Production, Preview, Development
```

3. **Redeploy** your project

---

## Step 7: Update Code Files

### 7.1 Update API Routes

You need to change the import in both API route files:

**In `src/app/api/contact/route.ts`:**

Change:

```typescript
import { sendEmail } from "@/lib/email/nodemailer";
```

To:

```typescript
import { sendEmail } from "@/lib/email/nodemailer-oauth";
```

**In `src/app/api/quote/route.ts`:**

Change:

```typescript
import { sendEmail } from "@/lib/email/nodemailer";
```

To:

```typescript
import { sendEmail } from "@/lib/email/nodemailer-oauth";
```

That's it! Everything else stays the same.

---

## Step 8: Test Everything

### 8.1 Test Locally

```bash
npm run dev
```

### 8.2 Test Contact Form

1. Go to `http://localhost:3000/contact`
2. Fill out the form
3. Submit
4. Check your Gmail inbox for notification
5. Check form submitter's email for confirmation

### 8.3 Check for Errors

If there are errors, check:

```bash
# Terminal will show OAuth2 errors
# Common issues:
# - Wrong Client ID/Secret
# - Wrong Refresh Token
# - Scope not authorized
```

### 8.4 Deploy to Production

```bash
vercel --prod
```

Test forms on your live site.

---

## How It Works

### OAuth2 Flow:

```
Next.js API needs to send email
↓
Nodemailer uses OAuth2 credentials
↓
Google verifies:
  - Client ID (your app)
  - Client Secret (your app's password)
  - Refresh Token (permission to send on your behalf)
↓
Google issues temporary Access Token (valid 1 hour)
↓
Nodemailer sends email via Gmail API
↓
Email sent from info@mophire.com
↓
Appears in your Gmail Sent folder
```

### Key Points:

- **Refresh Token** never expires (until you revoke it)
- **Access Token** auto-renewed by Nodemailer
- More secure than App Passwords
- Works with managed Google Workspace accounts

---

## Troubleshooting

### Problem: "Invalid grant" error

**Possible causes:**

1. Refresh Token is wrong
2. Refresh Token has expired (rare)
3. Scopes changed

**Solutions:**

1. Re-do Step 5 to get a new refresh token
2. Ensure the scope is exactly: `https://www.googleapis.com/auth/gmail.send`
3. Update environment variables with new token

### Problem: "Access denied" error

**Solutions:**

1. Verify Gmail API is enabled (Step 2)
2. Check OAuth consent screen is configured (Step 3)
3. Ensure you authorized the correct account (info@mophire.com)

### Problem: "Redirect URI mismatch"

**Solution:**

1. Go back to Google Cloud Console → Credentials
2. Edit your OAuth client
3. Ensure `https://developers.google.com/oauthplayground` is in Authorized redirect URIs
4. Save and try Step 5 again

### Problem: Can't get refresh token

**Solutions:**

1. Make sure you checked "Use your own OAuth credentials" in OAuth Playground settings
2. Ensure you're signed in with the correct Google account
3. Try revoking access and re-authorizing:
   - Go to: https://myaccount.google.com/permissions
   - Remove "OAuth2 Playground"
   - Re-do Step 5

### Problem: Emails going to spam

**Solutions:**

1. Sending from your own Google Workspace = excellent deliverability
2. Wait 1-2 weeks for reputation
3. Ask recipients to mark as "Not Spam"
4. Verify SPF/DKIM configured in Google Workspace

---

## Security Best Practices

### ✅ What We're Doing Right:

1. **OAuth2** - Industry standard, most secure
2. **Refresh Token** - Never expires, stored securely
3. **Environment Variables** - Credentials never in code
4. **Minimal Scopes** - Only `gmail.send` permission
5. **HTTPS** - All data encrypted
6. **Type Safety** - Strict TypeScript

### 🔒 Additional Security:

1. **Rotate Refresh Token** - Generate new one annually
2. **Monitor Usage** - Check Gmail API usage in Google Cloud Console
3. **Rate Limiting** - Add Upstash to prevent abuse
4. **Audit Trail** - All emails in Gmail Sent folder

---

## Advantages of OAuth2

| Feature                  | OAuth2                 | App Password           |
| ------------------------ | ---------------------- | ---------------------- |
| **Security**             | ⭐⭐⭐⭐⭐ Most secure | ⭐⭐⭐ Secure          |
| **Managed Workspace**    | ✅ Works               | ❌ Often disabled      |
| **Revocable**            | ✅ Instant             | ✅ Instant             |
| **Granular permissions** | ✅ Only send emails    | ❌ Full account access |
| **Auto-renewal**         | ✅ Automatic           | N/A (doesn't expire)   |
| **Google recommended**   | ✅ Yes                 | ⚠️ Legacy method       |
| **Setup complexity**     | 🟡 Medium              | 🟢 Easy                |

**Bottom line:** OAuth2 is more secure and works with your managed Google Workspace account.

---

## Cost & Limits

| Item                     | Amount                             |
| ------------------------ | ---------------------------------- |
| **Google Cloud Project** | Free                               |
| **Gmail API usage**      | Free (within quotas)               |
| **Daily email limit**    | 2,000 emails                       |
| **API calls**            | 1,000,000,000/day (won't hit this) |
| **Cost**                 | **£0** (beyond Google Workspace)   |

---

## Monitoring

### Check API Usage:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your project
3. **APIs & Services** → **Dashboard**
4. See Gmail API usage over time

### Check Sent Emails:

- All sent emails appear in Gmail "Sent" folder
- Search by customer email anytime
- Perfect audit trail

---

## Next Steps

1. ✅ Create Google Cloud Project
2. ✅ Enable Gmail API
3. ✅ Configure OAuth consent screen
4. ✅ Create OAuth2 credentials
5. ✅ Get refresh token (OAuth Playground)
6. ✅ Add environment variables
7. ✅ Update import in API routes
8. ✅ Test locally
9. ✅ Deploy to production

---

## Quick Reference

### Your Credentials:

- Client ID: In Google Cloud Console → Credentials
- Client Secret: In Google Cloud Console → Credentials
- Refresh Token: From OAuth Playground (one-time)

### Environment Variables:

```bash
GMAIL_USER=info@mophire.com
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REFRESH_TOKEN=your_refresh_token
```

### Import Change:

```typescript
// OLD:
import { sendEmail } from "@/lib/email/nodemailer";

// NEW:
import { sendEmail } from "@/lib/email/nodemailer-oauth";
```

---

## Summary

✅ **Works with managed Google Workspace** (App Passwords not needed)
✅ **More secure** than App Passwords
✅ **Free** - No additional costs
✅ **2,000 emails/day** - Same high limit
✅ **One-time setup** - Then it just works
✅ **Google recommended** approach

**Setup time:** 20-25 minutes (one-time)
**Monthly cost:** £0 extra
**Email capacity:** 60,000/month

Once configured, OAuth2 works automatically. The refresh token never expires (until you revoke it), and access tokens are auto-renewed by Nodemailer!

---

## Support Resources

**Google Cloud Console:**

- https://console.cloud.google.com

**OAuth2 Playground:**

- https://developers.google.com/oauthplayground

**Gmail API Documentation:**

- https://developers.google.com/gmail/api

**Nodemailer OAuth2:**

- https://nodemailer.com/smtp/oauth2/

---

Your cleaning business email will be production-ready with the most secure authentication method! 🎉
