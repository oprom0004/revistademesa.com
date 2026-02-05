import fs from 'fs';
import path from 'path';

// Manual env parsing to avoid dotenv dependency issues
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

if (!apiKey) {
    console.error("No API KEY found in .env.local");
    process.exit(1);
}

async function listModels() {
    console.log("Checking available models for key ending in...", apiKey.slice(-4));
    console.log("Endpoint: https://generativelanguage.googleapis.com/v1beta/models");

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.models) {
            console.log("\n--- AVAILABLE GEMINI MODELS ---");
            const geminiModels = data.models.filter(m => m.name.includes('gemini'));
            if (geminiModels.length === 0) {
                console.log("NO GEMINI MODELS FOUND. (Only " + data.models.map(m => m.name).join(', ') + ")");
            } else {
                geminiModels.forEach(m => console.log(m.name));
            }
            console.log("------------------------\n");
        }

    } catch (error) {
        console.error("Network/Fetch Failure:", error);
    }
}

listModels();
