// @ts-nocheck
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function AIChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // FUNGSI PENGIRIM MANUAL (Tanpa Alert Berisik)
  async function kirimPesan(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [...messages, { role: 'user', content: input }];
    setMessages(newHistory);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newHistory }),
      });

      if (!response.ok) throw new Error("Gagal menghubungi Safira.");

      const data = await response.json();
      
      // Tampilkan Jawaban
      setMessages([...newHistory, { role: 'assistant', content: data.content }]);

    } catch (err) {
      console.error(err);
      // Opsional: alert("Maaf, Safira sedang gangguan.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex h-screen flex-col bg-gray-50 dark:bg-[#121212]">
      {/* HEADER CANTIK KEMBALI */}
      <div className="flex items-center border-b border-gray-200 bg-white p-4 shadow-sm dark:bg-[#181818] dark:border-gray-800">
        <Link href="/dashboard" className="mr-4 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-[#282828]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-600 dark:text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">Safira AI Assistant</h1>
          <p className="text-xs text-green-500 flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Online
          </p>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center text-center opacity-50">
            <div className="text-6xl mb-4">🤖</div>
            <p className="text-lg font-medium dark:text-gray-300">Hello! I'm Safira.</p>
            <p className="text-sm text-gray-500">I'm here to listen.</p>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm ${
              m.role === 'user' 
                ? 'bg-teal-600 text-white rounded-br-none' 
                : 'bg-white text-gray-800 dark:bg-[#252525] dark:text-gray-200 rounded-bl-none border border-gray-100 dark:border-gray-700'
            }`}>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{m.content}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-[#252525] rounded-2xl px-4 py-2 text-xs text-gray-500 animate-pulse">
              Safira is typing...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT AREA */}
      <div className="border-t border-gray-200 bg-white p-4 dark:bg-[#181818] dark:border-gray-800">
        <form onSubmit={kirimPesan} className="mx-auto max-w-3xl flex items-center gap-2">
          <input
            className="flex-1 rounded-full border border-gray-300 bg-gray-50 p-3 pl-5 text-sm focus:border-teal-500 focus:outline-none dark:border-gray-700 dark:bg-[#252525] dark:text-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tell me what's on your mind..."
          />
          <button
            type="submit"
            disabled={isLoading || !input}
            className="rounded-full bg-teal-600 p-3 text-white transition hover:bg-teal-700 disabled:opacity-50 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}