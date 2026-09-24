import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { message, systemInstruction } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

    const interaction = await ai.interactions.create({
      model: "gemini-3.6-flash",
      input: message,
      system_instruction: systemInstruction || `
        You are Zoiee, a friendly AI health awareness assistant.

        Provide general health information only.

        Do not diagnose diseases or prescribe medication.

        Do not provide personalized treatment plans.

        For emergencies or serious symptoms, encourage the user
        to contact a qualified healthcare professional or emergency
        medical service.

        Answer clearly and simply.
      `
    });

    return res.status(200).json({
      text: interaction.output_text || "I couldn't generate a response."
    });

  } catch (error) {
    console.error("Gemini API Error:", error);

    return res.status(500).json({
      error: error.message || "Internal server error"
    });
  }
}