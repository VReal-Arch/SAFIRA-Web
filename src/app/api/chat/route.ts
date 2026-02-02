import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import { NextResponse } from 'next/server';

// 1. SETUP API KEY
const google = createGoogleGenerativeAI({
  // 👇 TEMPEL API KEY BARU ANDA DISINI 👇
  apiKey: 'AIzaSyAhFwg_CFVx3JYgDA_AS7Xaoj6MMncKFvc', 
});

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // 2. KITA GUNAKAN ALIAS 'LATEST' (JALUR AMAN/STABIL)
    // Ini otomatis memilih model Flash paling stabil yang punya kuota gratis
    const { text } = await generateText({
      model: google('gemini-flash-latest'), 
      messages,
    });

    return NextResponse.json({ role: 'assistant', content: text });

  } catch (error: any) {
    console.error("❌ ERROR SERVER:", error);
    // Tampilkan pesan error yang lebih bersahabat
    return NextResponse.json({ 
      error: "Maaf, server Google sedang sibuk atau kuota habis. Coba lagi nanti." 
    }, { status: 500 });
  }
}