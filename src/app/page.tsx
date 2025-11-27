import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto mt-20 max-w-md rounded-lg bg-white p-8 text-center shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Check-in Mingguan</h1>
      <p className="mb-8 text-gray-600">
        Mari luangkan waktu sejenak untuk mengetahui kondisi kesehatan mental dan kualitas tidur Anda minggu ini dengan mengisi kuesioner lengkap.
      </p>
      
      <Link href="/agreement" className="block w-full rounded-md bg-teal-600 py-3 text-center font-semibold text-white hover:bg-teal-700">
        Mulai Analisis Kondisi Saya
      </Link>
      <p className="mt-4 text-xs text-gray-400">
        *Analisis ini menggunakan DASS-21 dan PSQI.
      </p>
    </div>
  );
}