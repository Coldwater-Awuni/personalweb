import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const toEmail = process.env.CONTACT_EMAIL_TO;
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

export async function POST(request: Request) {
  // Check for required environment variables
  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.error('Missing SMTP configuration');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }
  if (!toEmail) {
    console.error('Missing CONTACT_EMAIL_TO');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  try {
    const { name, email, subject, message, projectType, budget } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Verify connection
    await transporter.verify();

    // Email content for portfolio owner
    const ownerHtmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
        <div style="background: linear-gradient(135deg, #FF4500 0%, #FF6B35 50%, #FF8C00 100%); padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff;">New Portfolio Inquiry</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Daniel Awuni - Full-Stack Developer & Technical Maker</p>
        </div>

        <div style="padding: 40px 30px;">
          <div style="background: rgba(255, 255, 255, 0.05); padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid rgba(255, 255, 255, 0.1);">
            <h2 style="color: #FF6B35; margin-top: 0; font-size: 20px; border-bottom: 2px solid #FF6B35; padding-bottom: 10px;">Contact Details</h2>
            <div style="display: table; width: 100%;">
              <div style="display: table-row;">
                <div style="display: table-cell; padding: 8px 0; font-weight: 600; color: #FF6B35;">Name:</div>
                <div style="display: table-cell; padding: 8px 0; color: #ffffff;">${name}</div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell; padding: 8px 0; font-weight: 600; color: #FF6B35;">Email:</div>
                <div style="display: table-cell; padding: 8px 0; color: #ffffff;"><a href="mailto:${email}" style="color: #06B6D4; text-decoration: none;">${email}</a></div>
              </div>
              ${projectType ? `<div style="display: table-row;">
                <div style="display: table-cell; padding: 8px 0; font-weight: 600; color: #FF6B35;">Project Type:</div>
                <div style="display: table-cell; padding: 8px 0; color: #ffffff;">${projectType}</div>
              </div>` : ''}
              ${budget ? `<div style="display: table-row;">
                <div style="display: table-cell; padding: 8px 0; font-weight: 600; color: #FF6B35;">Budget Range:</div>
                <div style="display: table-cell; padding: 8px 0; color: #ffffff;">${budget}</div>
              </div>` : ''}
            </div>
          </div>

          <div style="background: rgba(255, 255, 255, 0.05); padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid rgba(255, 255, 255, 0.1);">
            <h2 style="color: #FF6B35; margin-top: 0; font-size: 20px; border-bottom: 2px solid #FF6B35; padding-bottom: 10px;">Subject</h2>
            <p style="font-weight: 600; font-size: 18px; color: #ffffff; margin: 0;">${subject}</p>
          </div>

          <div style="background: rgba(255, 255, 255, 0.05); padding: 25px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
            <h2 style="color: #FF6B35; margin-top: 0; font-size: 20px; border-bottom: 2px solid #FF6B35; padding-bottom: 10px;">Message</h2>
            <div style="background: rgba(255, 255, 255, 0.03); padding: 20px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05); color: #ffffff; white-space: pre-wrap; line-height: 1.6;">
              ${message}
            </div>
          </div>
        </div>

        <div style="background: rgba(255, 255, 255, 0.05); padding: 20px 30px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
          <p style="margin: 0; color: #cccccc; font-size: 14px;">
            This message was sent from your portfolio contact form • <a href="mailto:${email}" style="color: #06B6D4; text-decoration: none;">Reply to ${name}</a>
          </p>
        </div>
      </div>
    `;

    const ownerTextContent = `
Portfolio Contact Form Submission

Daniel Awuni - Full-Stack Developer & Digital Fabricator

CONTACT DETAILS:
Name: ${name}
Email: ${email}
${projectType ? `Project Type: ${projectType}` : ''}
${budget ? `Budget Range: ${budget}` : ''}

SUBJECT: ${subject}

MESSAGE:
${message}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to ${name}.
    `;

    // Send email to portfolio owner
    const ownerInfo = await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: ownerTextContent,
      html: ownerHtmlContent,
    });

    // Confirmation email to sender
    const confirmationHtmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
        <div style="background: linear-gradient(135deg, #FF4500 0%, #FF6B35 50%, #FF8C00 100%); padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff;">Thank You, ${name}!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Daniel Awuni - Full-Stack Developer & Technical Maker</p>
        </div>

        <div style="padding: 40px 30px; text-align: center;">
          <div style="background: rgba(255, 255, 255, 0.05); padding: 30px; border-radius: 12px; margin-bottom: 25px; border: 1px solid rgba(255, 255, 255, 0.1);">
            <div style="font-size: 48px; margin-bottom: 20px;">✉️</div>
            <h2 style="color: #10B981; margin: 0 0 15px 0; font-size: 24px;">Message Received Successfully!</h2>
            <p style="color: #cccccc; font-size: 16px; line-height: 1.6; margin: 0;">
              Thank you for reaching out. I've received your message and will get back to you within 24 hours.
            </p>
          </div>

          <div style="background: rgba(255, 255, 255, 0.05); padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid rgba(255, 255, 255, 0.1);">
            <h3 style="color: #FF6B35; margin-top: 0; font-size: 18px;">What happens next?</h3>
            <div style="text-align: left; color: #cccccc; line-height: 1.6;">
              <p style="margin: 10px 0;"><span style="color: #06B6D4;">✓</span> I'll review your message and project requirements</p>
              <p style="margin: 10px 0;"><span style="color: #06B6D4;">✓</span> Prepare a thoughtful response with next steps</p>
              <p style="margin: 10px 0;"><span style="color: #06B6D4;">✓</span> Contact you within 24 hours (usually much sooner!)</p>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #10B981 0%, #06B6D4 100%); padding: 20px; border-radius: 12px;">
            <h3 style="color: #ffffff; margin: 0 0 10px 0; font-size: 18px;">Your Message Summary</h3>
            <p style="color: #ffffff; margin: 0; opacity: 0.9;"><strong>Subject:</strong> ${subject}</p>
            ${projectType ? `<p style="color: #ffffff; margin: 5px 0 0 0; opacity: 0.9;"><strong>Project Type:</strong> ${projectType}</p>` : ''}
            ${budget ? `<p style="color: #ffffff; margin: 5px 0 0 0; opacity: 0.9;"><strong>Budget Range:</strong> ${budget}</p>` : ''}
          </div>
        </div>

        <div style="background: rgba(255, 255, 255, 0.05); padding: 20px 30px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
          <p style="margin: 0 0 10px 0; color: #cccccc; font-size: 14px;">
            <strong>Daniel Awuni</strong> • Full-Stack Developer & Technical Maker
          </p>
          <p style="margin: 0; color: #888888; font-size: 12px;">
            Portfolio: <a href="https://awunidevs.vercel.app" style="color: #06B6D4; text-decoration: none;">awunidevs.vercel.app/</a> •
            Email: <a href="mailto:danielawuni53@gmail.com" style="color: #06B6D4; text-decoration: none;">danielawuni53@gmail.com</a>
          </p>
        </div>
      </div>
    `;

    const confirmationTextContent = `
Thank You, ${name}!

Daniel Awuni - Full-Stack Developer & Digital Fabricator

Your message has been received successfully! I'll get back to you within 24 hours.

WHAT HAPPENS NEXT:
✓ I'll review your message and project requirements
✓ Prepare a thoughtful response with next steps
✓ Contact you within 24 hours (usually much sooner!)

YOUR MESSAGE SUMMARY:
Subject: ${subject}
${projectType ? `Project Type: ${projectType}` : ''}
${budget ? `Budget Range: ${budget}` : ''}

---
Daniel Awuni • Full-Stack Developer & Digital Fabricator
Portfolio: https://awunidevs.vercel.app
Email: danielawuni53@gmail.com
    `;

    // Send confirmation email to sender
    const confirmationInfo = await transporter.sendMail({
      from: `"Daniel Awuni" <${smtpUser}>`,
      to: email,
      subject: `Thank you for contacting me, ${name}!`,
      text: confirmationTextContent,
      html: confirmationHtmlContent,
    });

    console.log('Emails sent successfully:', {
      owner: ownerInfo.messageId,
      confirmation: confirmationInfo.messageId
    });

    return NextResponse.json({
      message: 'Message sent successfully! Check your email for confirmation.',
      messageId: ownerInfo.messageId
    });

  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json({
      error: 'Failed to send message. Please try again later.'
    }, { status: 500 });
  }
}
