'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) => 
    `flex items-center space-x-4 px-2 py-2 transition rounded-md ${
      pathname === path 
        ? 'bg-gray-200 text-teal-700 font-bold dark:bg-[#282828] dark:text-white' 
        : 'text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-white'
    }`;

  const handleReset = () => {
    if (confirm('Are you sure you want to reset the app? All data (Name, Scores, Journal) will be deleted.')) {
      localStorage.clear();
      window.location.href = '/'; 
    }
  };

  return (
    <div className="hidden md:flex h-screen w-64 flex-col fixed left-0 top-0 z-40 border-r border-gray-200 bg-white p-6 dark:bg-black dark:border-gray-800 transition-colors duration-300">
      
      <div className="mb-8 flex items-center space-x-3 px-2">
        <Image 
          src="/logo.jpg"
          alt="SAFIRA Logo"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <span className="text-xl font-bold tracking-tight text-gray-800 dark:text-white">SAFIRA</span>
      </div>

      <nav className="space-y-2 flex-1">
        
        <Link href="/dashboard" className={linkClass('/dashboard')}>
          <span className="text-2xl">🏠</span>
          <span className="text-sm font-medium">Home</span>
        </Link>

        <Link href="/dashboard?tab=jurnal" className={linkClass('/dashboard?tab=jurnal')}>
          <span className="text-2xl">📚</span>
          <span className="text-sm font-medium">My Journal</span>
        </Link>

        <Link href="/dashboard?tab=program" className={linkClass('/dashboard?tab=program')}>
          <span className="text-2xl">🧭</span>
          <span className="text-sm font-medium">Programs</span>
        </Link>

        <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
          <Link href="/" className="flex items-center space-x-4 px-2 py-2 text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-white transition rounded-md hover:bg-gray-50 dark:hover:bg-[#181818]">
            <span className="text-2xl">📋</span>
            <span className="text-sm font-medium">Health Evaluation</span>
          </Link>
        </div>

      </nav>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-4 space-y-2">
        <Link href="/dashboard?tab=jurnal" className="flex items-center space-x-4 px-2 py-2 text-gray-400 hover:text-teal-600 dark:hover:text-white transition w-full text-left rounded-md hover:bg-gray-50 dark:hover:bg-[#181818]">
           <span className="text-2xl">➕</span>
           <span className="text-sm font-medium">New Entry</span>
        </Link>

        <button 
          onClick={handleReset} 
          className="flex items-center space-x-4 px-2 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition w-full text-left rounded-md"
        >
           <span className="text-2xl">🚪</span>
           <span className="text-sm font-medium">Reset / Logout</span>
        </button>
      </div>
    </div>
  );
}