import fs from 'fs';
import path from 'path';

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

async function testAllModels() {
    console.log("Testing ALL available models for chat generation...\n");

    // Get list of models
    const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    const listResponse = await fetch(listUrl);
    const listData = await listResponse.json();

    if (!listData.models) {
        console.error("Failed to get model list");
        return;
    }

    const geminiModels = listData.models.filter(m => m.name.includes('gemini'));
    console.log(`Found ${geminiModels.length} Gemini models. Testing each for chat...\n`);

    for (const modelInfo of geminiModels) {
        const modelName = modelInfo.name.replace('models/', '');
        console.log(`Testing: ${modelName}`);

        try {
            const chatUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
            const body = {
                contents: [{ parts: [{ text: "Hello" }] }]
            };

            const response = await fetch(chatUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await response.json();

            if (data.candidates && data.candidates[0]) {
                console.log(`  ✅ SUCCESS! This model works for chat.`);
                console.log(`  Response: ${data.candidates[0].content.parts[0].text.substring(0, 50)}...\n`);
                return modelName; // Return first working model
            } else if (data.error) {
                console.log(`  ❌ Error: ${data.error.message}\n`);
            }
        } catch (e) {
            console.log(`  ❌ Failed: ${e.message}\n`);
        }
    }

    console.log("\n⚠️  NO WORKING CHAT MODELS FOUND");
    return null;
}

testAllModels().then(workingModel => {
    if (workingModel) {
        console.log(`\n✅ USE THIS MODEL: ${workingModel}`);
    } else {
        console.log(`\n❌ Your API key does not support any Gemini chat models.`);
        console.log(`   Recommendation: Disable the AI feature or get a different API key.`);
    }
});
