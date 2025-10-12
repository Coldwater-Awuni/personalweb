import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

async function testSMTPConnection() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_EMAIL_TO;

  console.log('Testing SMTP Configuration...\n');

  // Check environment variables
  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.error('❌ Missing required environment variables:');
    if (!smtpHost) console.log('  - SMTP_HOST');
    if (!smtpPort) console.log('  - SMTP_PORT');
    if (!smtpUser) console.log('  - SMTP_USER');
    if (!smtpPass) console.log('  - SMTP_PASS');
    process.exit(1);
  }

  if (!toEmail) {
    console.error('❌ Missing CONTACT_EMAIL_TO environment variable');
    process.exit(1);
  }

  console.log('✅ Environment variables found');
  console.log(`📧 SMTP Host: ${smtpHost}`);
  console.log(`🔌 SMTP Port: ${smtpPort}`);
  console.log(`👤 SMTP User: ${smtpUser}`);
  console.log(`📬 Recipient: ${toEmail}\n`);

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: parseInt(smtpPort) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    console.log('🔗 Testing SMTP connection...');

    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');

    // Send test emails (both owner notification and sender confirmation)
    console.log('📤 Sending test emails...');

    // Test data
    const testData = {
      name: 'Test User',
      email: toEmail, // Send confirmation to same email for testing
      subject: 'SMTP Configuration Test',
      message: 'This is a test message to verify both notification and confirmation emails work correctly.',
      projectType: 'Web Development',
      budget: '$5,000 - $10,000'
    };

    // Owner notification email
    const ownerHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
        <div style="background: linear-gradient(135deg, #FF4500 0%, #FF6B35 50%, #FF8C00 100%); padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff;">SMTP Test - Owner Notification</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Daniel Awuni - Full-Stack Developer & Technical Maker</p>
        </div>
        <div style="padding: 40px 30px; text-align: center;">
          <div style="background: rgba(16, 185, 129, 0.2); padding: 20px; border-radius: 12px; border: 1px solid #10B981;">
            <h2 style="color: #10B981; margin: 0;">✅ SMTP Configuration Working!</h2>
            <p style="color: #cccccc; margin: 10px 0 0 0;">Both notification and confirmation emails are configured correctly.</p>
          </div>
        </div>
      </div>
    `;

    const ownerInfo = await transporter.sendMail({
      from: `"Portfolio Contact Test" <${smtpUser}>`,
      to: toEmail,
      replyTo: testData.email,
      subject: `SMTP Test: ${testData.subject}`,
      text: `Test notification email sent successfully!\n\nTest Data:\n${JSON.stringify(testData, null, 2)}`,
      html: ownerHtml,
    });

    // Confirmation email
    const confirmationHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
        <div style="background: linear-gradient(135deg, #FF4500 0%, #FF6B35 50%, #FF8C00 100%); padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff;">Thank You, ${testData.name}!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Daniel Awuni - Full-Stack Developer & Technical Maker</p>
        </div>
        <div style="padding: 40px 30px; text-align: center;">
          <div style="background: rgba(255, 255, 255, 0.05); padding: 30px; border-radius: 12px; margin-bottom: 25px; border: 1px solid rgba(255, 255, 255, 0.1);">
            <div style="font-size: 48px; margin-bottom: 20px;">✉️</div>
            <h2 style="color: #10B981; margin: 0 0 15px 0; font-size: 24px;">SMTP Test Successful!</h2>
            <p style="color: #cccccc; font-size: 16px; line-height: 1.6; margin: 0;">
              This is a test confirmation email. Your SMTP configuration is working perfectly!
            </p>
          </div>
        </div>
      </div>
    `;

    const confirmationInfo = await transporter.sendMail({
      from: `"Daniel Awuni" <${smtpUser}>`,
      to: testData.email,
      subject: `SMTP Test: Thank you for contacting me, ${testData.name}!`,
      text: `Test confirmation email sent successfully!\n\nThis confirms your SMTP setup is working.`,
      html: confirmationHtml,
    });

    console.log('✅ Test emails sent successfully!');
    console.log(`📧 Owner notification: ${ownerInfo.messageId}`);
    console.log(`📧 Confirmation email: ${confirmationInfo.messageId}`);
    console.log(`📬 Check your inbox at: ${toEmail}`);

  } catch (error) {
    console.error('❌ SMTP test failed:');
    console.error(error.message);

    if (error.code === 'EAUTH') {
      console.log('\n💡 Authentication failed. Common solutions:');
      console.log('  - For Gmail: Use an App Password instead of your regular password');
      console.log('  - Enable 2-Factor Authentication on your Google account');
      console.log('  - Verify your SMTP credentials are correct');
    }

    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Connection refused. Common solutions:');
      console.log('  - Check your SMTP_HOST and SMTP_PORT');
      console.log('  - Verify your internet connection');
      console.log('  - Some networks block SMTP ports');
    }

    process.exit(1);
  }
}

testSMTPConnection();