'use client';

import { useChat } from 'ai/react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AIChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex h-screen flex-col bg-gray-50 dark:bg-[#121212]">
      
      {/* HEADER */}
      <div className="flex items-center border-b border-gray-200 bg-white p-4 shadow-sm dark:bg-[#181818] dark:border-gray-800">
        <Link href="/dashboard" className="mr-4 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-[#282828]">
          ◀
        </Link>
        <div>
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">Safira AI Assistant</h1>
          <p className="text-xs text-green-500">● Online</p>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center text-center text-gray-400">
            <span className="text-6xl mb-4">🤖</span>
            <p className="text-lg">Hello! I'm Safira.</p>
            <p className="text-sm">I'm here to listen. How are you feeling today?</p>
          </div>
        )}

        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-md ${
              m.role === 'user' 
                ? 'bg-teal-600 text-white rounded-br-none' 
                : 'bg-white text-gray-800 dark:bg-[#2a2a2a] dark:text-gray-200 rounded-bl-none'
            }`}>
              {/* Simple Markdown Rendering (Line breaks) */}
              <div className="whitespace-pre-wrap leading-relaxed">{m.content}</div>
            </div>
          </div>
        ))}
        
        {/* Loading Indicator */}
        {isLoading && (
           <div className="flex justify-start">
             <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl rounded-bl-none px-5 py-3 shadow-sm">
                <span className="animate-pulse text-gray-500">Safira is typing...</span>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT AREA */}
      <div className="border-t border-gray-200 bg-white p-4 dark:bg-[#181818] dark:border-gray-800">
        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl relative flex items-center">
          <input
            className="w-full rounded-full border border-gray-300 bg-gray-100 py-3 pl-5 pr-12 text-gray-900 focus:border-teal-500 focus:outline-none dark:bg-[#2a2a2a] dark:border-gray-700 dark:text-white"
            value={input}
            placeholder="Tell me what's on your mind..."
            onChange={handleInputChange}
          />
          <button type="submit" disabled={isLoading || !input} className="absolute right-2 rounded-full bg-teal-600 p-2 text-white transition hover:bg-teal-700 disabled:opacity-50">
            ➤
          </button>
        </form>
      </div>
    </div>
  );
}