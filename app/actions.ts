'use server';

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

// Initialize GoogleGenerativeAI
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const SYSTEM_INSTRUCTION = `You are the Senior Application Engineer for "VariableDCPowerSupply.com".

Your Goal: Solve technical problems and guide users to the correct power solution.

Guidelines:
1. **Solution First**: Do not limit yourself to a fixed list. If a user needs 30V, 60V, 1000V+, or custom specs, acknowledge we can support it.
2. **Catalog Direction**: For standard requests (120V-800V), recommend our specific series. For anything else, explain that we have a "Complete Catalog" on our Live Stock & Pricing page.
3. **Call to Action**: Always guide the user to visit https://variabledcpowersupply.com to check live inventory and pricing.
4. **Engineering Support**: If a user has a complex, custom, or very high-power requirement (e.g., >100kW, >1000V), provide our engineering email: contact@variabledcpowersupply.com.

Tone: Helpful, industrial, solution-oriented.`;

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
    if (!genAI) {
        console.error("Gemini API Key missing");
        return "I am currently disconnected from the engineering database (API Key missing).";
    }

    // Using the confirmed working model from diagnostic test
    const candidateModels = [
        "gemini-2.5-flash"
    ];

    let lastError = null;

    for (const modelName of candidateModels) {
        try {
            console.log(`Attempting to connect with model: ${modelName}`);
            const model = genAI.getGenerativeModel({
                model: modelName,
                systemInstruction: SYSTEM_INSTRUCTION,
            });

            const result = await model.generateContent(userPrompt);
            const response = await result.response;
            const text = response.text();

            if (text) return text;
        } catch (error) {
            console.error(`Failed with model ${modelName}:`, error);
            lastError = error;
            // Continue to next model
        }
    }

    // If all models fail
    console.error("All Gemini models failed. Last error:", lastError);

    // Return the specific error message to the user for better debugging
    // @ts-expect-error - error structure
    if (lastError?.message) {
        // @ts-expect-error - error structure
        return `API Error: ${lastError.message}`;
    }

    return "I am currently experiencing technical difficulties connecting to the engineering database.";
};
