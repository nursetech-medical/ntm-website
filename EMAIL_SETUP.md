# Email Submission Setup Guide

This guide explains how form submissions are sent to your email (info@nursetechmedical.com).

## Overview

The website uses **Web3Forms** (free service) to send form submissions directly to your email without requiring a backend server.

### Forms That Submit via Email:
1. **Newsletter Subscription** (Footer)
2. **Trial Request Form** (`/trial-request`)
3. **Sample Request Form** (`/sample-request`)
4. **Contact Form** (`/contact`)

---

## Setup Instructions

### Step 1: Create Web3Forms Account

1. Go to: https://web3forms.com/
2. Enter your email: `info@nursetechmedical.com`
3. Click "Get Free Access Key"
4. Check your email for the Access Key
5. Save this key - you'll need it in the next step

### Step 2: Add Access Key to Your Project

#### Option A: Using Environment Variable (Recommended for Production)

1. Create or edit `.env` file in `/frontend/` directory:
   ```
   REACT_APP_WEB3FORMS_KEY=your_access_key_here
   ```

2. Replace `your_access_key_here` with the key from Step 1

3. Restart your development server

#### Option B: Direct in Code (Quick Testing Only)

1. Open: `/frontend/src/services/emailService.js`
2. Find line 12:
   ```javascript
   const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual key
4. **Note:** This method exposes your key in the code. Use only for testing.

### Step 3: Test the Forms

1. Start your development server:
   ```bash
   npm start
   ```

2. Navigate to a form page (e.g., `/trial-request`)

3. Fill out and submit the form

4. Check `info@nursetechmedical.com` for the submission email

---

## How It Works

### Dual Submission System

The forms try two methods in order:

1. **Primary:** Sends to your backend API (if available)
2. **Fallback:** Sends via Web3Forms to email

This ensures forms always work, even if the backend is down.

### Code Flow

```javascript
try {
  // Try backend API first
  response = await contactApi.trialRequest(data);
} catch (apiError) {
  // If backend fails, use email service
  response = await emailService.sendTrialRequest(data);
}
```

---

## Email Format

### Newsletter Subscription Email
```
Subject: New Newsletter Subscription
From: Cordflex Website

New newsletter subscription from: user@example.com
```

### Trial Request Email
```
Subject: New Trial Request
From: John Doe <john@example.com>

Trial Request Details:

Name: John Doe
Title: Nurse Manager
Email: john@example.com
Phone: (555) 123-4567
Hospital: Sample Hospital
Department: ICU
Number of Beds: 30
Current Solution: Manual management
Challenges: Line tangles, Patient safety
Preferred Start Date: 2026-01-15
Timeline: 3 months
Stakeholders: Nursing staff
Additional Comments: Need immediate solution
```

### Sample Request Email
```
Subject: New Sample Request
From: Jane Smith <jane@example.com>

Sample Request Details:

Name: Jane Smith
Email: jane@example.com
Phone: (555) 987-6543
Hospital: Sample Hospital
Department: ICU
Number of Beds: 30
Source: Website
Additional Comments: Interested in trial
```

---

## Web3Forms Features

### Free Tier Includes:
- ✅ Unlimited form submissions
- ✅ No monthly fees
- ✅ File uploads (up to 5MB)
- ✅ Spam protection
- ✅ Email notifications
- ✅ Auto-response emails
- ✅ GDPR compliant

### Upgrade Options (if needed):
- Multiple email recipients
- Custom branding
- Webhooks
- API access
- Priority support

---

## Troubleshooting

### Forms Not Sending

**Check 1: Access Key**
- Verify key is correctly added to `.env` file
- Restart development server after adding key
- Check for typos in the key

**Check 2: Email Address**
- Confirm Web3Forms account uses `info@nursetechmedical.com`
- Check spam folder for submission emails

**Check 3: Console Errors**
- Open browser console (F12)
- Look for error messages when submitting form
- Common errors:
  - "Invalid access key" - Check your key
  - "Network error" - Check internet connection
  - "CORS error" - This shouldn't happen with Web3Forms

### Emails Going to Spam

If emails are landing in spam:

1. **Add to Safe Senders:**
   - Add `noreply@web3forms.com` to your safe senders list

2. **Contact Web3Forms:**
   - They can help improve deliverability

3. **Alternative Solution:**
   - Set up a custom email forwarding rule
   - Use a different email service provider

### Testing Email Delivery

Use this test form submission:
```javascript
// Open browser console on your website and run:
await emailService.sendSampleRequest({
  name: 'Test User',
  email: 'test@example.com',
  phone: '555-0000',
  hospital: 'Test Hospital',
  department: 'Test Dept',
  source: 'Test',
  comments: 'This is a test submission'
});
```

---

## Alternative: Using Your Own Backend

If you prefer to use your backend API instead:

### Option 1: Update Backend Endpoint

The backend endpoint should handle POST requests to:
- `/api/newsletter/subscribe`
- `/api/contact/trial-request`
- `/api/contact/sample-request`

### Option 2: Disable Web3Forms Fallback

In each form file, remove the `catch` block that uses `emailService`:

```javascript
// Before (with fallback)
try {
  response = await contactApi.trialRequest(data);
} catch (apiError) {
  response = await emailService.sendTrialRequest(data);  // Remove this
}

// After (backend only)
response = await contactApi.trialRequest(data);
```

---

## Security Notes

### Environment Variables
- **Never commit** `.env` file to git
- `.env` is already in `.gitignore`
- Use different keys for development and production

### Access Key Protection
- Keys are only used server-side by Web3Forms
- Safe to use in frontend code
- Each key is tied to your domain
- Rate-limited to prevent abuse

---

## FAQ

**Q: Does this cost money?**
A: No, Web3Forms is free for unlimited submissions.

**Q: Do I need a backend server?**
A: No, forms work entirely in the frontend.

**Q: Can I customize the email format?**
A: Yes, edit the `message` field in `/frontend/src/services/emailService.js`

**Q: Can forms send to multiple emails?**
A: Free tier sends to one email. Upgrade for multiple recipients.

**Q: Is my data secure?**
A: Yes, Web3Forms uses HTTPS and is GDPR compliant.

**Q: What happens if Web3Forms is down?**
A: Forms will show an error. Consider setting up backup backend.

**Q: Can I see submission history?**
A: Check your email inbox. Web3Forms dashboard shows recent submissions.

---

## Production Deployment

### Before Deploying:

1. ✅ Add `REACT_APP_WEB3FORMS_KEY` to production environment variables
2. ✅ Test all forms in production
3. ✅ Verify emails arrive at `info@nursetechmedical.com`
4. ✅ Check spam folder initially
5. ✅ Add Web3Forms to safe senders

### Deployment Platforms:

**Vercel:**
```
Settings → Environment Variables → Add:
Name: REACT_APP_WEB3FORMS_KEY
Value: your_key_here
```

**Netlify:**
```
Site Settings → Environment → Add variable:
Key: REACT_APP_WEB3FORMS_KEY
Value: your_key_here
```

**Other Platforms:**
- Add environment variable in platform settings
- Must start with `REACT_APP_` for React

---

## Support

**Web3Forms Support:**
- Email: support@web3forms.com
- Docs: https://docs.web3forms.com/

**Project Issues:**
- Check console for errors
- Verify API key is correct
- Test with simple form first
- Contact your developer

---

**Last Updated:** January 2026
