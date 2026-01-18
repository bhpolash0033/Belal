
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are an AI assistant for "ToolsBD", a web platform offering various free online utility tools (calculators, text tools, SEO tools, image converters). 
        Your goal is to help users find the right tool or perform simple calculations.
        If a user asks for a tool we have (Age Calculator, BMI, Word Counter, Password Gen, EMI), direct them to use the interface.
        Be helpful, concise, and professional.`,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};
