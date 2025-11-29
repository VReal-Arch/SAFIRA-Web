import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-md rounded-xl bg-[#181818] p-8 text-center shadow-2xl border border-gray-800">
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-teal-500 flex items-center justify-center text-3xl font-bold text-black">
          S
        </div>
        <h1 className="mb-4 text-3xl font-bold text-white">Weekly Check-in</h1>
        <p className="mb-8 text-gray-400">
          Let's take a moment to understand your mental health condition and sleep quality.
        </p>
        
        <Link href="/agreement" className="block w-full rounded-full bg-teal-500 py-3 text-center font-bold text-black hover:bg-teal-400 hover:scale-105 transition transform">
          Start Analysis
        </Link>
      </div>
    </div>
  );
}