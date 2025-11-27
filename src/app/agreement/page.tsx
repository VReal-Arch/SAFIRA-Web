import Link from 'next/link';

export default function AgreementPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-xl font-bold text-gray-800">Persetujuan Pengguna</h2>
        <ul className="mb-8 list-inside list-decimal space-y-3 text-sm text-gray-700">
          <li>
            <strong>Privasi Data:</strong> Data jurnal dan survei Anda dienkripsi dan dijaga kerahasiaannya.
          </li>
          <li>
            <strong>Analisis AI:</strong> Anda mengizinkan AI menganalisis pola bahasa untuk mendeteksi risiko kesehatan mental.
          </li>
          <li>
            <strong>Protokol Krisis:</strong> Jika terdeteksi risiko tinggi bunuh diri, sistem akan memberikan opsi kontak darurat.
          </li>
        </ul>
        <Link href="/onboarding" className="block w-full rounded-md bg-teal-600 py-3 text-center font-semibold text-white hover:bg-teal-700">
          Saya Setuju & Lanjutkan
        </Link>
      </div>
    </div>
  );
}