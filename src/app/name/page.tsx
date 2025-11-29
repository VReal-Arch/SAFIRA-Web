'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NamePage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleNext = () => {
    if (!name.trim()) return;
    localStorage.setItem('userName', name);
    router.push('/test/dass21');
  };

  return (
    <div className="flex h-[80vh] flex-col items-center justify-center px-6">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md dark:bg-[#181818] dark:border dark:border-gray-800">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white">What should we call you?</h1>
        <p className="mb-8 text-center text-sm text-gray-600 dark:text-gray-400">
          So SAFIRA can address you properly.
        </p>
        
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
          className="mb-6 block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-[#121212] dark:border-gray-700 dark:text-white"
          onKeyDown={(e) => e.key === 'Enter' && handleNext()}
        />

        <button
          onClick={handleNext}
          disabled={!name.trim()}
          className={`w-full rounded-md py-3 font-semibold text-white transition-colors ${
            !name.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}