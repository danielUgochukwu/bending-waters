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

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* @ts-ignore */}
                <img src={logoData.buffer} alt="BendingWaters" />
            </div>
        ),
        {
            ...size,
        }
    );
}