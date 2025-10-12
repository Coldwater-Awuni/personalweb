# Email Configuration Guide

## Google SMTP Setup (Gmail)

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. Go to Google Account settings
2. Navigate to Security > 2-Step Verification > App passwords
3. Select "Mail" and "Other (custom name)"
4. Enter "Portfolio Contact Form" as the custom name
5. Copy the generated 16-character password

### Step 3: Configure Environment Variables
Create a `.env.local` file in your project root with:

```bash
# Contact Form Configuration
CONTACT_EMAIL_TO=your-email@gmail.com

# Google SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-character-app-password
```

### Step 4: Test the Configuration
Run the development server and test the contact form:

```bash
npm run dev
```

## Features

The contact form sends **two professional emails**:

### 1. **Portfolio Owner Notification**
- Beautiful HTML template matching your app's dark theme and orange gradient
- Includes all contact details, project type, budget, and message
- Professional branding with your name and title
- Easy reply functionality

### 2. **Sender Confirmation Email**
- Personalized thank you message using the sender's name
- Matches your app's color scheme (dark background, orange gradients)
- Professional branding and contact information
- Clear next steps and response timeline

## Email Templates

Both emails feature:
- **Dark theme** matching your portfolio design
- **Orange gradient headers** (#FF4500 to #FF6B35 to #FF8C00)
- **Glassmorphism-inspired styling** with subtle borders and shadows
- **Professional typography** using Segoe UI font family
- **Responsive design** that works on all email clients
- **Your branding** prominently displayed

## Testing

Run the comprehensive test:

```bash
npm run test:smtp
```

This will send both email types to your configured email address so you can see exactly how they look.

### Alternative SMTP Providers

#### Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

#### Yahoo
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

#### Custom SMTP Server
```bash
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
```

## Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords instead of your main account password
- Consider using dedicated email services for production (SendGrid, Mailgun, etc.)
- The contact form includes rate limiting and input validation

## Troubleshooting

### Common Issues

1. **"Authentication failed"**
   - Verify your app password is correct
   - Ensure 2FA is enabled on your Google account
   - Check that you're using the app password, not your regular password

2. **"Connection timeout"**
   - Verify SMTP_HOST and SMTP_PORT are correct
   - Check your internet connection
   - Some networks block SMTP ports - consider using port 465 with SSL

3. **"Invalid recipient"**
   - Ensure CONTACT_EMAIL_TO is a valid email address
   - Check that the recipient email accepts emails from your sender

### Testing

You can test the SMTP connection by running:

```bash
node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});
transporter.verify().then(() => console.log('SMTP connection successful')).catch(console.error);
"
```