import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: systemInstruction || `
        You are Zoiee, a friendly AI health awareness assistant.
        Provide general health information only.
        Do not diagnose diseases or prescribe medication.
        Encourage users to consult a qualified healthcare professional
        for diagnosis, treatment, emergencies, or serious symptoms.
      `
    });

    const result = await model.generateContent(message);

    const response = await result.response;
    const text = response.text();

    return res.status(200).json({
      text
    });

  } catch (error) {
    console.error("Gemini API Error:", error);

    return res.status(500).json({
      error: error.message || "Internal server error"
    });
  }
}