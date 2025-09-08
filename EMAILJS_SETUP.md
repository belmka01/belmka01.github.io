# EmailJS Configuration Guide

## Current Configuration
Your contact form is currently configured with these EmailJS credentials:
- **Service ID**: `service_tox7kqs`
- **Template ID**: `template_nv7k7mj`
- **Public Key**: `SybVGsYS52j2TfLbi`

## To Set Up Your Own EmailJS Account:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New message from {{from_name}} - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy your **Template ID**

### 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### 5. Update Your Code
Replace the credentials in `src/components/sections/Contact.jsx`:

```javascript
emailjs
  .sendForm(
    "YOUR_SERVICE_ID",        // Replace with your Service ID
    "YOUR_TEMPLATE_ID",       // Replace with your Template ID
    form.current,
    "YOUR_PUBLIC_KEY"         // Replace with your Public Key
  )
```

### 6. Test Your Setup
1. Start your development server: `npm run dev`
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email for the message

## Features Added:
✅ **Loading State**: Button shows "Sending..." while processing
✅ **Form Validation**: All fields are required
✅ **Success/Error Messages**: User-friendly feedback
✅ **Form Reset**: Form clears after successful submission
✅ **Disabled State**: Form is disabled while sending
✅ **Better Error Handling**: Console logging for debugging

## Troubleshooting:
- Make sure your EmailJS service is active
- Check that your template variables match the form field names
- Verify your public key is correct
- Check browser console for any error messages
