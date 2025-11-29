import Link from 'next/link';
import Image from 'next/image';

export default function OnboardingPage() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center text-center px-4">
      
      <div className="mb-6">
        <Image 
          src="/logo.jpg"      
          alt="Logo SAFIRA"
          width={150}
          height={150}
          className="mx-auto h-auto w-auto object-contain rounded-full"
          priority
        />
      </div>

      {/* TEXT COLOR FIX:
          text-gray-900 = Hitam (saat Light Mode)
          dark:text-white = Putih (saat Dark Mode)
      */}
      <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Welcome to SAFIRA</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">Your AI Mind and Care System.</p>
      
      <Link href="/name" className="rounded-md bg-teal-600 px-8 py-3 font-semibold text-white hover:bg-teal-700 transition">
        Start Journey
      </Link>
    </div>
  );
}