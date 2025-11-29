import Link from 'next/link';
import Image from 'next/image';

export default function OnboardingPage() {
  return (
    // 1. BACKGROUND: Forced to Gray-50 (Light) always. Removed 'dark:bg-black'.
    <div className="flex h-screen flex-col items-center justify-center text-center px-4 bg-gray-50">
      
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

      {/* 2. TEXT: Forced to Black/Gray-900 always. Removed 'dark:text-white'. */}
      <h1 className="mb-2 text-2xl font-bold text-gray-900">
        Welcome to SAFIRA
      </h1>
      
      <p className="mb-8 text-gray-600">
        Your Mind and Care System.
      </p>
      
      <Link href="/name" className="rounded-md bg-teal-600 px-8 py-3 font-semibold text-white hover:bg-teal-700 transition hover:scale-105">
        Start Journey
      </Link>
    </div>
  );
}