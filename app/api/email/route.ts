import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

function formatLeadDetails(data: any) {
  let details = `
Name: ${data.name}
Contact: ${data.email || data.phone}
Service Type: ${data.serviceType}
Budget Range: ${data.budget}
`;

  // Add service-specific details
  switch (data.serviceType) {
    case 'youtube':
      details += `
Channel Niche: ${data.channelNiche}
Video Length: ${data.videoLength}`;
      break;
    case 'reels':
      details += `
Platform: ${data.reelPlatform}
Number of Reels: ${data.reelCount}`;
      break;
    case 'music':
      details += `
Track Type: ${data.trackType}
Visual Type: ${data.visualType}`;
      break;
    case 'other':
      details += `
Project Description: ${data.projectDescription}`;
      break;
  }

  return details;
}

function formatLeadDetailsHTML(data: any) {
  let specificDetails = '';
  switch (data.serviceType) {
    case 'youtube':
      specificDetails = `
        <tr><td style="padding: 8px 0; color: #4a4a4a;"><strong>Channel Niche:</strong></td><td style="padding: 8px 0; color: #4a4a4a;">${data.channelNiche}</td></tr>
        <tr><td style="padding: 8px 0; color: #4a4a4a;"><strong>Video Length:</strong></td><td style="padding: 8px 0; color: #4a4a4a;">${data.videoLength}</td></tr>`;
      break;
    case 'reels':
      specificDetails = `
        <tr><td style="padding: 8px 0; color: #4a4a4a;"><strong>Platform:</strong></td><td style="padding: 8px 0; color: #4a4a4a;">${data.reelPlatform}</td></tr>
        <tr><td style="padding: 8px 0; color: #4a4a4a;"><strong>Number of Reels:</strong></td><td style="padding: 8px 0; color: #4a4a4a;">${data.reelCount}</td></tr>`;
      break;
    case 'music':
      specificDetails = `
        <tr><td style="padding: 8px 0; color: #4a4a4a;"><strong>Track Type:</strong></td><td style="padding: 8px 0; color: #4a4a4a;">${data.trackType}</td></tr>
        <tr><td style="padding: 8px 0; color: #4a4a4a;"><strong>Visual Type:</strong></td><td style="padding: 8px 0; color: #4a4a4a;">${data.visualType}</td></tr>`;
      break;
    case 'other':
      specificDetails = `
        <tr><td style="padding: 8px 0; color: #4a4a4a;"><strong>Project Description:</strong></td><td style="padding: 8px 0; color: #4a4a4a;">${data.projectDescription}</td></tr>`;
      break;
  }

  return `
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #4a4a4a;"><strong>Name:</strong></td><td style="padding: 8px 0; color: #4a4a4a;">${data.name}</td></tr>
      <tr><td style="padding: 8px 0; color: #4a4a4a;"><strong>Contact:</strong></td><td style="padding: 8px 0; color: #4a4a4a;">${data.email || data.phone}</td></tr>
      <tr><td style="padding: 8px 0; color: #4a4a4a;"><strong>Service Type:</strong></td><td style="padding: 8px 0; color: #4a4a4a;">${data.serviceType}</td></tr>
      <tr><td style="padding: 8px 0; color: #4a4a4a;"><strong>Budget Range:</strong></td><td style="padding: 8px 0; color: #4a4a4a;">${data.budget}</td></tr>
      ${specificDetails}
    </table>
  `;
}

export async function POST(request: Request) {
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200 });
  }

  try {
    const data = await request.json();

    // Send admin notification email (plain text)
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Project Inquiry: ${data.name} - ${data.serviceType}`,
      text: formatLeadDetails(data),
    });

    // Only send client email if they provided an email address
    if (data.email) {
      await transporter.sendMail({
        from: process.env.SMTP_EMAIL,
        to: data.email,
        subject: "Thanks for Reaching Out! - Ish's Visuals",
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You for Your Inquiry</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table align="center" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <tr>
                <td style="padding: 20px; text-align: center; background-color: #007bff; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Ish's Visuals</h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 30px;">
                  <h2 style="color: #333333; font-size: 20px; margin-top: 0;">Hi ${data.name},</h2>
                  <p style="color: #4a4a4a; font-size: 16px; line-height: 1.5;">
                    Thank you for reaching out! I'm excited to discuss how we can bring your vision to life. I'll review your requirements and get back to you within 24 hours with next steps.
                  </p>
                  <h3 style="color: #333333; font-size: 18px; margin-top: 20px;">Here's a summary of what you've shared:</h3>
                  ${formatLeadDetailsHTML(data)}
                  <p style="color: #4a4a4a; font-size: 16px; line-height: 1.5; margin-top: 20px;">
                    Feel free to reach out if you have any additional details or questions in the meantime!
                  </p>
                  <p style="color: #4a4a4a; font-size: 16px; line-height: 1.5;">
                    Best regards,<br>
                    <strong>Ish Kumar</strong><br>
                    Visual Effects Artist
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px; text-align: center; background-color: #f4f4f4; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                  <p style="color: #777777; font-size: 14px; margin: 0;">
                    &copy; ${new Date().getFullYear()} Ish's Visuals. All rights reserved.<br>
                    <a href="https://ishsvisuals.com" style="color: #007bff; text-decoration: none;">Visit our website</a>
                  </p>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
        text: `Hi ${data.name},

Thank you for reaching out! I've received your project inquiry and I'm excited to discuss how we can bring your vision to life. I'll review your requirements and get back to you within 24 hours with next steps.

Here's a summary of what you've shared with me:

${formatLeadDetails(data)}

Best regards,
Ish Kumar
Visual Effects Artist`,
      });
    }

    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to send email' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}