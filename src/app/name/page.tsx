'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NamePage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleNext = () => {
    if (!name.trim()) return;
    // Save name to LocalStorage so Dashboard can find it later
    localStorage.setItem('userName', name);
    // Go to the first test
    router.push('/test/dass21');
  };

  return (
    <div className="flex h-[80vh] flex-col items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800">Siapa nama panggilan Anda?</h1>
        <p className="mb-8 text-center text-sm text-gray-600">
          Agar SAFIRA bisa menyapa Anda dengan lebih akrab.
        </p>
        
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan nama Anda..."
          className="mb-6 block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          onKeyDown={(e) => e.key === 'Enter' && handleNext()}
        />

        <button
          onClick={handleNext}
          disabled={!name.trim()}
          className={`w-full rounded-md py-3 font-semibold text-white transition-colors ${
            !name.trim() ? 'bg-gray-300 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'
          }`}
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}