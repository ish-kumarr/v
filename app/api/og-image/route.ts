import { NextRequest, NextResponse } from 'next/server';
import { createCanvas, loadImage, registerFont } from 'canvas';
import path from 'path';

export const config = {
  runtime: 'edge',
};

registerFont(path.join(process.cwd(), 'public/fonts/Inter-Regular.ttf'), { family: 'Inter' });

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Ish Kumar - Visuals and Designs';
  const subtitle = searchParams.get('subtitle') || 'Pre-Opening Offers';

  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);

  // Load logo image
  const logoPath = path.join(process.cwd(), 'public/logo.png');
  const logo = await loadImage(logoPath);

  // Draw logo centered
  const logoSize = 150;
  ctx.drawImage(logo, (width - logoSize) / 2, 100, logoSize, logoSize);

  // Text styles
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';

  // Title
  ctx.font = 'bold 64px Inter';
  ctx.fillText(title, width / 2, 320);

  // Subtitle
  ctx.font = '32px Inter';
  ctx.fillText(subtitle, width / 2, 380);

  // Return image response
  const buffer = canvas.toBuffer('image/png');
  return new NextResponse(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
    },
  });
}
