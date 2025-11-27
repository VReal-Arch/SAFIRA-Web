'use client';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'beranda' | 'jurnal' | 'program'>('beranda');
  const [userName, setUserName] = useState('Pengguna');
  
  // Load the name from LocalStorage when the page loads
  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  // --- SUB-COMPONENTS FOR TABS ---

  // 1. Tab Beranda Content
  const BerandaContent = () => (
    <div className="animate-in fade-in duration-300">
      {/* Check-in Harian Banner */}
      <div className="flex items-center justify-between rounded-lg bg-teal-800 p-6 text-white shadow-md">
        <div>
          <h3 className="text-lg font-bold">Check-in Harian</h3>
          <p className="text-sm opacity-90">Catat emosi, dapatkan poin.</p>
        </div>
        <div className="flex space-x-4 text-3xl">
          <button className="hover:scale-110 transition-transform">😐</button>
          <button className="hover:scale-110 transition-transform">🙂</button>
          <button className="hover:scale-110 transition-transform">😊</button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
         {/* Placeholder for stats or quotes */}
         <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-700">Streak Mingguan</h4>
            <div className="mt-2 text-2xl font-bold text-teal-600">🔥 3 Hari</div>
         </div>
         <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-700">Poin Kesehatan</h4>
            <div className="mt-2 text-2xl font-bold text-teal-600">💎 150</div>
         </div>
      </div>
    </div>
  );

  // 2. Tab Jurnal Content (Migrated code)
  const JurnalContent = () => (
    <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100 animate-in fade-in duration-300">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-teal-800">📝 Jurnal SAFIRA</span>
        </div>
        <span className="rounded bg-green-50 px-2 py-1 text-xs font-medium text-green-700 border border-green-200">
          🔒 Terenkripsi
        </span>
      </div>
      <p className="mb-4 text-sm text-gray-600">
        Ceritakan hari Anda. AI akan menganalisis pola bahasa untuk memantau kesehatan Anda secara pasif.
      </p>
      <textarea
        className="mb-4 h-40 w-full rounded-lg border border-gray-300 p-4 text-gray-800 placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
        placeholder="Apa yang ada di pikiran Anda hari ini?"
      ></textarea>
      <div className="flex justify-between items-center">
        <button className="text-gray-400 hover:text-teal-600">
           🎤 {/* Icon placeholder */}
        </button>
        <button className="rounded-md bg-teal-600 px-6 py-2 font-semibold text-white hover:bg-teal-700">
          Simpan Entri
        </button>
      </div>
      <div className="mt-6 border-t pt-4">
        <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Analisis Bahasa AI (Demo)</h3>
        <div className="flex space-x-2">
          <span className="rounded bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 border border-blue-100">Sentimen: Netral</span>
          <span className="rounded bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600 border border-purple-100">Fokus Waktu: Sekarang</span>
        </div>
      </div>
    </div>
  );

  // 3. Tab Program & Terapi Content
  const ProgramContent = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <h3 className="font-bold text-gray-700">Modul Pembelajaran</h3>
      
      {/* Card 1 */}
      <div className="flex items-center rounded-lg bg-white p-4 shadow-sm border border-gray-100 hover:bg-gray-50 transition">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xl font-bold">
          🌙
        </div>
        <div className="ml-4 flex-1">
          <h4 className="font-bold text-gray-800">Sleep Hygiene 101</h4>
          <p className="text-xs text-gray-500">Teknik dasar memperbaiki kualitas tidur.</p>
        </div>
        <button className="rounded-full bg-teal-600 px-4 py-1 text-xs font-bold text-white">Mulai</button>
      </div>

      {/* Card 2 */}
      <div className="flex items-center rounded-lg bg-white p-4 shadow-sm border border-gray-100 hover:bg-gray-50 transition relative overflow-hidden">
        <span className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-bl-lg font-bold">Rekomendasi</span>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xl font-bold">
          🫁
        </div>
        <div className="ml-4 flex-1">
          <h4 className="font-bold text-gray-800">Biofeedback Pernapasan</h4>
          <p className="text-xs text-gray-500">Latihan napas berbasis HRV.</p>
        </div>
        <button className="rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white">Mulai Sesi</button>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-2xl space-y-6 pb-20">
      
      {/* TOP CARD: User Info & Resilience Score */}
      <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Halo, {userName}.</h1>
            <p className="text-gray-600 text-sm">Semoga harimu tenang.</p>
          </div>
          <span className="rounded bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">JENJANG 2</span>
        </div>
        <div className="mb-2">
          <div className="flex justify-between text-xs font-bold mb-1">
            <span className="text-gray-700">Indeks Resiliensi & Kesejahteraan</span>
            <span className="text-teal-600">60%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-100">
            <div className="h-2 rounded-full bg-yellow-400" style={{ width: '60%' }}></div>
          </div>
        </div>
        <p className="text-[10px] text-gray-400">AI menganalisis pola tidur dan jurnal harian Anda untuk skor ini.</p>
      </div>

      {/* NAVIGATION TABS */}
      <div className="flex space-x-2">
        <button 
          onClick={() => setActiveTab('beranda')}
          className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${
            activeTab === 'beranda' 
            ? 'bg-teal-600 text-white shadow-md' 
            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          Beranda
        </button>
        <button 
          onClick={() => setActiveTab('jurnal')}
          className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${
            activeTab === 'jurnal' 
            ? 'bg-teal-600 text-white shadow-md' 
            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          Jurnal SAFIRA
        </button>
        <button 
          onClick={() => setActiveTab('program')}
          className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${
            activeTab === 'program' 
            ? 'bg-teal-600 text-white shadow-md' 
            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          Program & Terapi
        </button>
      </div>

      {/* DYNAMIC CONTENT AREA */}
      <div>
        {activeTab === 'beranda' && <BerandaContent />}
        {activeTab === 'jurnal' && <JurnalContent />}
        {activeTab === 'program' && <ProgramContent />}
      </div>

    </div>
  );
}