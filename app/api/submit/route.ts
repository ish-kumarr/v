import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { saveLead } from '@/lib/leads';

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

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Save lead to JSON file
    const lead = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      serviceType: data.serviceType,
      budget: data.budget,
      details: data
    };
    
    saveLead(lead);

    // Send email notification
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Lead: ${data.name} - ${data.serviceType}`,
      html: formatLeadDetails(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}