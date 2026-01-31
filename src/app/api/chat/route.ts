import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('models/gemini-1.5-flash'), // Model gratis & cepat dari Google
    messages,
    system: "You are SAFIRA, a compassionate, empathetic, and professional mental health assistant. You listen actively, validate feelings, and provide calm, evidence-based advice. You are NOT a doctor, so for serious crises, always refer them to the 'SOS Crisis' feature or a real doctor. Keep responses concise and warm.",
  });

  return result.toTextStreamResponse();
}