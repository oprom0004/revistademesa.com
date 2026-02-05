import fs from 'fs';
import path from 'path';

// Manual env parsing
function getEnv(key) {
    try {
        const envPath = path.resolve(process.cwd(), '.env.local');
        const envContent = fs.readFileSync(envPath, 'utf8');
        const match = envContent.match(new RegExp(`^${key}=(.*)$`, 'm'));
        return match ? match[1].trim() : null;
    } catch (e) {
        return null;
    }
}

const apiKey = getEnv('GEMINI_API_KEY') || getEnv('API_KEY');

const systemInstruction = "You are a helpful assistant.";

async function testChat() {
    const modelName = "gemini-2.0-flash";
    console.log(`Testing Chat Generation with model: ${modelName}`);

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
        const body = {
            contents: [{ parts: [{ text: "Hello, are you working?" }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] }
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (data.error) {
            console.error("GENERATION FAILED:", JSON.stringify(data.error, null, 2));
        } else if (data.candidates && data.candidates[0].content) {
            console.log("\nSUCCESS! Response:");
            console.log(data.candidates[0].content.parts[0].text);
            console.log("------------------\n");
        } else {
            console.log("Unexpected response format:", JSON.stringify(data, null, 2));
        }

    } catch (error) {
        console.error("Network Failure:", error);
    }
}

testChat();
