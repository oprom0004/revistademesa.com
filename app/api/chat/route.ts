import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const SYSTEM_INSTRUCTION = `You are the Senior Application Engineer for "VariableDCPowerSupply.com".

Your Goal: Solve technical problems and guide users to the correct power solution.

Guidelines:
1. **Solution First**: Do not limit yourself to a fixed list. If a user needs 30V, 60V, 1000V+, or custom specs, acknowledge we can support it.
2. **Catalog Direction**: For standard requests (120V-800V), recommend our specific series. For anything else, explain that we have a "Complete Catalog" on our Live Stock & Pricing page.
3. **Call to Action**: Always guide the user to visit https://variabledcpowersupply.com to check live inventory and pricing.
4. **Engineering Support**: If a user has a complex, custom, or very high-power requirement (e.g., >100kW, >1000V), provide our engineering email: contact@variabledcpowersupply.com.

Tone: Helpful, industrial, solution-oriented.`;

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Invalid message format' },
                { status: 400 }
            );
        }

        if (!genAI) {
            console.error("Gemini API Key missing");
            return NextResponse.json(
                { response: "I am currently disconnected from the engineering database (API Key missing)." },
                { status: 200 }
            );
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: SYSTEM_INSTRUCTION,
        });

        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ response: text });

    } catch (error) {
        console.error('Gemini API Error:', error);
        return NextResponse.json(
            {
                response: `API Error: ${error instanceof Error ? error.message : 'Unknown error'}`
            },
            { status: 200 }
        );
    }
}
