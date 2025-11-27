'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function JournalPage() {
  const [entry, setEntry] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    if (!entry.trim()) return;
    
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert('Jurnal berhasil disimpan!');
      setEntry('');
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* Navigation Breadcrumb / Back Button */}
      <div className="mb-6">
        <Link href="/dashboard" className="text-sm font-medium text-teal-600 hover:text-teal-800">
          &larr; Kembali ke Dashboard
        </Link>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-sm">
        {/* Header Section */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-teal-800">🌿 Jurnal SAFIRA</span>
          </div>
          <span className="flex items-center space-x-1 rounded bg-green-50 px-2 py-1 text-xs font-medium text-green-700 border border-green-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Terenkripsi</span>
          </span>
        </div>

        <p className="mb-6 text-sm text-gray-600">
          Ceritakan hari Anda. AI akan menganalisis pola bahasa untuk memantau kesehatan Anda secara pasif.
        </p>

        {/* Input Area */}
        <div className="mb-4">
          <textarea
            className="h-48 w-full rounded-lg border border-gray-300 p-4 text-gray-800 placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
            placeholder="Apa yang ada di pikiran Anda hari ini?"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          ></textarea>
        </div>

        {/* Action Bar */}
        <div className="mb-8 flex items-center justify-between">
          <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600" title="Rekam Suara">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
          
          <button 
            onClick={handleSave}
            disabled={isSaving || !entry.trim()}
            className={`rounded-md px-6 py-2 font-semibold text-white transition-colors ${
              isSaving || !entry.trim() 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-teal-600 hover:bg-teal-700'
            }`}
          >
            {isSaving ? 'Menyimpan...' : 'Simpan Entri'}
          </button>
        </div>

        <hr className="my-6 border-gray-100" />

        {/* AI Analysis Demo Section */}
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Analisis Bahasa AI (Demo)
          </h3>
          <div className="flex space-x-2">
            <span className="rounded bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 border border-blue-100">
              Sentimen: Netral
            </span>
            <span className="rounded bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600 border border-purple-100">
              Fokus Waktu: Sekarang
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}