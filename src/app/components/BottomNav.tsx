'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// PERHATIKAN: Wajib ada 'export default' di sini
export default function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 px-6 py-4 flex justify-between items-center z-50 border-t border-gray-200 bg-white/95 backdrop-blur-sm dark:bg-gradient-to-t dark:from-black dark:to-[#121212] dark:border-gray-800 transition-colors duration-300">
      <Link href="/dashboard" className="flex flex-col items-center space-y-1 group">
        <span className="text-xl group-hover:scale-110 transition">🏠</span>
        <span className="text-[10px] text-gray-600 dark:text-gray-400">Home</span>
      </Link>
      <Link href="/dashboard?tab=program" className="flex flex-col items-center space-y-1 group">
        <span className="text-xl group-hover:scale-110 transition">🧭</span>
        <span className="text-[10px] text-gray-600 dark:text-gray-400">Explore</span>
      </Link>
      <Link href="/dashboard?tab=jurnal" className="flex flex-col items-center space-y-1 group">
        <span className="text-xl group-hover:scale-110 transition">📚</span>
        <span className="text-[10px] text-gray-600 dark:text-gray-400">Library</span>
      </Link>
    </div>
  );
}