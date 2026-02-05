import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are an expert Electrical Engineer specializing in Variable DC Power Supplies. 
You are the assistant for the website "Revista De Mesa". 
Your goal is to help users select the correct voltage rating (120V, 150V, 220V, 500V, 600V, 800V) based on their application.
- If they ask about US standard testing, recommend 120V.
- If they ask about industrial/export, recommend 220V.
- If they ask about aging/burn-in, recommend 500V.
- If they ask about standard Solar/EVs (400V architecture), recommend 600V.
- If they ask about High Performance EVs (800V architecture), Silicon Carbide (SiC), or DC Fast Charging, recommend 800V.
Keep answers concise, technical but accessible, and always refer back to safety.`;

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    const response = await ai.models.generateContent({
      model: model,
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I couldn't generate a response regarding power supplies at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing technical difficulties connecting to the engineering database.";
  }
};