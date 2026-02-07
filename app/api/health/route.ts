import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
    return NextResponse.json({
        status: 'ok',
        model: 'gemini-1.5-flash',
        timestamp: new Date().toISOString(),
        env: {
            hasApiKey: !!(process.env.GEMINI_API_KEY || process.env.API_KEY),
        }
    });
}
