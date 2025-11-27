import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-3xl font-bold text-teal-600">
        S
      </div>
      <h1 className="mb-2 text-2xl font-bold text-gray-800">Selamat Datang di SAFIRA</h1>
      <p className="mb-8 text-gray-600">Sistem AI Pikiran dan Perawatan Anda.</p>
      
      {/* UPDATE: Link now goes to /name */}
      <Link href="/name" className="rounded-md bg-teal-600 px-8 py-3 font-semibold text-white hover:bg-teal-700">
        Mulai Perjalanan
      </Link>
    </div>
  );
}