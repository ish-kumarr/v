export const runtime = "edge";

import { ImageResponse } from '@vercel/og';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Ish Kumar - Visuals and Designs';
  const subtitle = searchParams.get('subtitle') || 'Pre-Opening Offers';

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#000000',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: '"Inter", sans-serif',
          padding: 40,
          boxSizing: 'border-box',
          backgroundImage: 'url("/logo.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: '150px 150px',
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 0,
            padding: 0,
            marginTop: 180,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 32,
            marginTop: 20,
            textAlign: 'center',
            maxWidth: 600,
          }}
        >
          {subtitle}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
