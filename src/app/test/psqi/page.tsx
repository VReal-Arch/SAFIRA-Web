'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PSQIPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<any>({});

  const handleInputChange = (questionId: string, value: any) => {
    setAnswers((prev: any) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("PSQI Answers:", answers);
    // After finishing PSQI, go to the Dashboard
    router.push('/dashboard'); 
  };

  const frequencyOptions = [
    "Tidak selama sebulan terakhir",
    "Kurang dari sekali seminggu",
    "Sekali atau dua kali seminggu",
    "Tiga kali atau lebih seminggu",
  ];

  const problemOptions = [
    "Tidak ada masalah sama sekali",
    "Hanya sedikit masalah",
    "Agak bermasalah",
    "Masalah yang sangat besar",
  ];

  const qualityOptions = [
    "Sangat baik",
    "Cukup baik",
    "Cukup buruk",
    "Sangat buruk",
  ];

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Pittsburgh Sleep Quality Index (PSQI)</h1>
      <p className="mb-8 text-sm text-gray-600">
        Pertanyaan berikut berkaitan dengan kebiasaan tidur Anda yang biasa <strong>selama sebulan terakhir saja</strong>. Jawaban Anda harus menunjukkan jawaban yang paling akurat untuk sebagian besar hari dan malam dalam sebulan terakhir.
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Q1 - Q4: Time and Number Inputs */}
        <div className="space-y-4">
          <div>
            <label htmlFor="q1" className="block text-sm font-medium text-gray-700">1. Selama sebulan terakhir, jam berapa biasanya Anda pergi tidur di malam hari?</label>
            <input id="q1" type="time" required onChange={(e) => handleInputChange('q1', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="q2" className="block text-sm font-medium text-gray-700">2. Selama sebulan terakhir, berapa lama (dalam menit) biasanya waktu yang Anda butuhkan untuk tertidur setiap malam?</label>
            <input id="q2" type="number" min="0" required onChange={(e) => handleInputChange('q2', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="q3" className="block text-sm font-medium text-gray-700">3. Selama sebulan terakhir, jam berapa biasanya Anda bangun di pagi hari?</label>
            <input id="q3" type="time" required onChange={(e) => handleInputChange('q3', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="q4" className="block text-sm font-medium text-gray-700">4. Selama sebulan terakhir, berapa jam tidur sebenarnya yang Anda dapatkan di malam hari? (Ini mungkin berbeda dengan jumlah jam yang Anda habiskan di tempat tidur.)</label>
            <input id="q4" type="number" min="0" step="0.5" required onChange={(e) => handleInputChange('q4', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" />
          </div>
        </div>
        
        {/* Q5: Frequency Questions */}
        <div>
          <p className="mb-4 font-medium text-gray-800">5. Selama sebulan terakhir, seberapa sering Anda mengalami kesulitan tidur karena Anda...</p>
          {[
            ['a', 'Tidak bisa tertidur dalam waktu 30 menit'],
            ['b', 'Bangun di tengah malam atau terlalu dini di pagi hari'],
            ['c', 'Harus bangun untuk menggunakan kamar mandi'],
            ['d', 'Tidak bisa bernapas dengan nyaman'],
            ['e', 'Batuk atau mendengkur keras'],
            ['f', 'Merasa terlalu dingin'],
            ['g', 'Merasa terlalu panas'],
            ['h', 'Mengalami mimpi buruk'],
            ['i', 'Merasakan sakit'],
          ].map(([key, question]) => (
            <div key={key} className="mb-4 border-b border-gray-100 pb-4 last:border-0">
              <p className="mb-2 text-sm text-gray-700">{key}. {question}</p>
              <div className="space-y-1">
                {frequencyOptions.map((option, index) => (
                  <label key={index} className="flex cursor-pointer items-center space-x-2">
                    <input type="radio" name={`q5${key}`} value={index} required onChange={() => handleInputChange(`q5${key}`, index)} className="h-4 w-4 text-teal-600 focus:ring-teal-500" />
                    <span className="text-sm text-gray-600">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Q6: Sleep Medication */}
        <div>
          <p className="mb-2 font-medium text-gray-800">6. Selama sebulan terakhir, seberapa sering Anda minum obat untuk membantu Anda tidur (diresepkan atau "dijual bebas")?</p>
          <div className="space-y-1">
            {frequencyOptions.map((option, index) => (
              <label key={index} className="flex cursor-pointer items-center space-x-2">
                <input type="radio" name="q6" value={index} required onChange={() => handleInputChange('q6', index)} className="h-4 w-4 text-teal-600 focus:ring-teal-500" />
                <span className="text-sm text-gray-600">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q7 & Q8: Daytime Dysfunction */}
        <div>
          <p className="mb-2 font-medium text-gray-800">7. Selama sebulan terakhir, seberapa sering Anda mengalami kesulitan untuk tetap terjaga saat mengemudi, makan, atau terlibat dalam aktivitas sosial?</p>
          <div className="space-y-1">
            {frequencyOptions.map((option, index) => (
              <label key={index} className="flex cursor-pointer items-center space-x-2">
                <input type="radio" name="q7" value={index} required onChange={() => handleInputChange('q7', index)} className="h-4 w-4 text-teal-600 focus:ring-teal-500" />
                <span className="text-sm text-gray-600">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 font-medium text-gray-800">8. Selama sebulan terakhir, seberapa besar masalah yang Anda hadapi dalam menjaga antusiasme yang cukup untuk menyelesaikan sesuatu?</p>
          <div className="space-y-1">
            {problemOptions.map((option, index) => (
              <label key={index} className="flex cursor-pointer items-center space-x-2">
                <input type="radio" name="q8" value={index} required onChange={() => handleInputChange('q8', index)} className="h-4 w-4 text-teal-600 focus:ring-teal-500" />
                <span className="text-sm text-gray-600">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q9: Overall Sleep Quality */}
        <div>
          <p className="mb-2 font-medium text-gray-800">9. Selama sebulan terakhir, bagaimana Anda menilai kualitas tidur Anda secara keseluruhan?</p>
          <div className="space-y-1">
            {qualityOptions.map((option, index) => (
              <label key={index} className="flex cursor-pointer items-center space-x-2">
                <input type="radio" name="q9" value={index} required onChange={() => handleInputChange('q9', index)} className="h-4 w-4 text-teal-600 focus:ring-teal-500" />
                <span className="text-sm text-gray-600">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="w-full rounded-md bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700">
          Selesai & Kembali ke Dashboard
        </button>
      </form>
    </div>
  );
}