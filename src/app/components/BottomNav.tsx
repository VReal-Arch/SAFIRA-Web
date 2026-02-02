'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-sm px-1 py-3 transition-colors duration-300 dark:border-gray-800 dark:bg-[#121212]">
      
      {/* GRID 7 KOLOM: Agar semua tombol muat dalam satu baris */}
      <div className="grid grid-cols-7 gap-0">
        
        <Link href="/dashboard" className="group flex flex-col items-center justify-center">
          <span className="mb-1 text-lg group-hover:scale-110 transition">🏠</span>
          <span className="text-[9px] text-gray-500 dark:text-gray-400">Home</span>
        </Link>

        <Link href="/dashboard?tab=jurnal" className="group flex flex-col items-center justify-center">
          <span className="mb-1 text-lg group-hover:scale-110 transition">📓</span>
          <span className="text-[9px] text-gray-500 dark:text-gray-400">Journal</span>
        </Link>

        <Link href="/dashboard?tab=program" className="group flex flex-col items-center justify-center">
          <span className="mb-1 text-lg group-hover:scale-110 transition">🧭</span>
          <span className="text-[9px] text-gray-500 dark:text-gray-400">Progs</span>
        </Link>

        {/* AI Chat di Tengah */}
        <Link href="/ai-chat" className="group flex flex-col items-center justify-center">
          <span className="mb-1 text-lg group-hover:scale-110 transition">🤖</span>
          <span className="text-[9px] text-gray-500 dark:text-gray-400">AI Chat</span>
        </Link>

        <Link href="/doctors" className="group flex flex-col items-center justify-center">
          <span className="mb-1 text-lg group-hover:scale-110 transition">🩺</span>
          <span className="text-[9px] text-gray-500 dark:text-gray-400">Docs</span>
        </Link>

        <Link href="/" className="group flex flex-col items-center justify-center">
          <span className="mb-1 text-lg group-hover:scale-110 transition">📋</span>
          <span className="text-[9px] text-gray-500 dark:text-gray-400">Check</span>
        </Link>

        <Link href="/dashboard?tab=jurnal" className="group flex flex-col items-center justify-center">
          <span className="mb-1 text-lg group-hover:scale-110 transition">➕</span>
          <span className="text-[9px] text-gray-500 dark:text-gray-400">New Entry</span>
        </Link>

      </div>
    </div>
  );
}