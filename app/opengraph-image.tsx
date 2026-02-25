import { ImageResponse } from 'next/og';
import { join } from 'path';
import { readFileSync } from 'fs';

// Image metadata
export const alt = 'BendingWaters';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
    const logoPath = join(process.cwd(), 'public/images/logo.png');
    const logoData = readFileSync(logoPath);
    const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

    const fontPath = join(process.cwd(), 'app/fonts/bierika.otf');
    const fontData = readFileSync(fontPath);

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '60px',
                    fontFamily: 'Bierika',
                    position: 'relative',
                }}
            >
                {/* Subtle background decoration */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0a0a0a 100%)',
                        zIndex: -1,
                    }}
                />

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '48px',
                    textAlign: 'center'
                }}>
                    <img
                        src={logoBase64}
                        alt="BendingWaters Logo"
                        width="400"
                    />
                    <div style={{
                        fontSize: 48,
                        color: 'white',
                        maxWidth: '1000px',
                        lineHeight: 1.2,
                        letterSpacing: '-0.02em',
                        fontWeight: 600
                    }}>
                        We build strategic growth infrastructure for real business outcomes
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'Bierika',
                    data: fontData,
                    style: 'normal',
                },
            ],
        }
    );
}