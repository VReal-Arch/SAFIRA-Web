'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// This is the clean questions array
const dass21Questions = [
  "1. Saya merasa sulit untuk menenangkan diri", 
  "2. Saya menyadari mulut saya kering", 
  "3. Saya sepertinya tidak bisa mengalami perasaan positif sama sekali", 
  "4. Saya mengalami kesulitan bernapas (misalnya, napas terlalu cepat, sesak napas tanpa aktivitas fisik)", 
  "5. Saya merasa sulit untuk berinisiatif melakukan sesuatu", 
  "6. Saya cenderung bereaksi berlebihan terhadap situasi", 
  "7. Saya mengalami gemetar (misalnya, di tangan)", 
  "8. Saya merasa bahwa saya menggunakan banyak energi gugup", 
  "9. Saya khawatir tentang situasi di mana saya mungkin panik dan mempermalukan diri sendiri", 
  "10. Saya merasa tidak ada yang bisa dinanti-nantikan", 
  "11. Saya menyadari diri saya menjadi gelisah", 
  "12. Saya merasa sulit untuk rileks", 
  "13. Saya merasa sedih dan murung", 
  "14. Saya tidak toleran terhadap apa pun yang menghalangi saya untuk melanjutkan apa yang sedang saya lakukan", 
  "15. Saya merasa hampir panik", 
  "16. Saya tidak bisa antusias tentang apa pun", 
  "17. Saya merasa saya tidak berharga sebagai seseorang", 
  "18. Saya merasa bahwa saya agak mudah tersinggung", 
  "19. Saya menyadari aksi jantung saya tanpa adanya aktivitas fisik (misalnya, rasa peningkatan detak jantung, jantung berdebar)", 
  "20. Saya merasa takut tanpa alasan yang jelas", 
  "21. Saya merasa bahwa hidup tidak ada artinya"
];

const options = [
  { value: 0, label: "0 - Tidak sesuai dengan saya sama sekali" },
  { value: 1, label: "1 - Sesuai dengan saya sampai tingkat tertentu, atau kadang-kadang" },
  { value: 2, label: "2 - Sesuai dengan saya sampai tingkat yang cukup besar, atau sering" },
  { value: 3, label: "3 - Sesuai dengan saya sangat banyak, atau hampir setiap saat" }
];

// This is the exported component that was missing
export default function DASS21Page() {
  const router = useRouter();
  const [answers, setAnswers] = useState<number[]>(Array(21).fill(-1));

  const handleOptionChange = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answers.includes(-1)) {
      alert("Mohon jawab semua pertanyaan.");
      return;
    }
    console.log("DASS-21 Answers:", answers);
    // Proceed to the next test (PSQI)
    router.push('/test/psqi'); 
  };

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">DASS-21 Kuesioner</h1>
      <p className="mb-8 text-sm text-gray-600">
        [cite_start]Silakan baca setiap pernyataan dan pilih angka 0, 1, 2 atau 3 yang menunjukkan seberapa besar pernyataan tersebut sesuai dengan Anda <strong>selama seminggu terakhir</strong>[cite: 118]. [cite_start]Tidak ada jawaban benar atau salah[cite: 119].
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        {dass21Questions.map((question, qIndex) => (
          <div key={qIndex} className="border-b border-gray-100 pb-6 last:border-0">
            <p className="mb-3 font-medium text-gray-800">{question}</p>
            <div className="space-y-2">
              {options.map((option) => (
                <label key={option.value} className="flex cursor-pointer items-center space-x-3 rounded-md p-2 hover:bg-gray-50">
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    value={option.value}
                    checked={answers[qIndex] === option.value}
                    onChange={() => handleOptionChange(qIndex, option.value)}
                    className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="w-full rounded-md bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700">
          Lanjut ke Kuesioner Berikutnya (PSQI)
        </button>
      </form>
    </div>
  );
}