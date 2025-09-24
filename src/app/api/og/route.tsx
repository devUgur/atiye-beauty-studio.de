import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F3EEE8',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23B9917B" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
            maxWidth: '800px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#6B4A3A',
              margin: '0 0 20px 0',
              letterSpacing: '0.02em',
              lineHeight: '1.1',
            }}
          >
            Dauerhaft schön.
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#7A5241',
              margin: '0 0 40px 0',
              fontWeight: '400',
              lineHeight: '1.3',
            }}
          >
            Professionelle Laser-Haarentfernung
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              fontSize: '24px',
              color: '#7A5241',
            }}
          >
            <span>NiSV-zertifiziert</span>
            <span>•</span>
            <span>Für Frauen & Männer</span>
            <span>•</span>
            <span>Moderne Technologie</span>
          </div>
          <div
            style={{
              marginTop: '60px',
              padding: '20px 40px',
              backgroundColor: '#B08A6A',
              color: 'white',
              fontSize: '28px',
              fontWeight: 'bold',
              borderRadius: '8px',
            }}
          >
            ATIYE Beauty Studio
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}