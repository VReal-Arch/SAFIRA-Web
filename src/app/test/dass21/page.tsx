'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Standard English DASS-21 Questions
const dass21Questions = [
  "1. I found it hard to wind down",
  "2. I was aware of dryness of my mouth",
  "3. I couldn't seem to experience any positive feeling at all",
  "4. I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)",
  "5. I found it difficult to work up the initiative to do things",
  "6. I tended to over-react to situations",
  "7. I experienced trembling (e.g. in the hands)",
  "8. I felt that I was using a lot of nervous energy",
  "9. I was worried about situations in which I might panic and make a fool of myself",
  "10. I felt that I had nothing to look forward to",
  "11. I found myself getting agitated",
  "12. I found it difficult to relax",
  "13. I felt down-hearted and blue",
  "14. I was intolerant of anything that kept me from getting on with what I was doing",
  "15. I felt I was close to panic",
  "16. I was unable to become enthusiastic about anything",
  "17. I felt I wasn't worth much as a person",
  "18. I felt that I was rather touchy",
  "19. I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)",
  "20. I felt scared without any good reason",
  "21. I felt that life was meaningless"
];

const options = [
  { value: 0, label: "0 - Did not apply to me at all" },
  { value: 1, label: "1 - Applied to me to some degree, or some of the time" },
  { value: 2, label: "2 - Applied to me to a considerable degree or a good part of time" },
  { value: 3, label: "3 - Applied to me very much or most of the time" }
];

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
      alert("Please answer all questions.");
      return;
    }

    const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
    localStorage.setItem('dassScore', totalScore.toString());
    
    router.push('/test/psqi'); 
  };

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md dark:bg-[#181818] dark:border dark:border-gray-800">
      <h1 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">DASS-21 Questionnaire</h1>
      <p className="mb-8 text-sm text-gray-600 dark:text-gray-400">
        Please read each statement and circle a number 0, 1, 2 or 3 which indicates how much the statement applied to you <strong>over the past week</strong>. There are no right or wrong answers.
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        {dass21Questions.map((question, qIndex) => (
          <div key={qIndex} className="border-b border-gray-100 pb-6 last:border-0 dark:border-gray-800">
            <p className="mb-3 font-medium text-gray-800 dark:text-gray-200">{question}</p>
            <div className="space-y-2">
              {options.map((option) => (
                <label key={option.value} className="flex cursor-pointer items-center space-x-3 rounded-md p-2 hover:bg-gray-50 dark:hover:bg-[#252525]">
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    value={option.value}
                    checked={answers[qIndex] === option.value}
                    onChange={() => handleOptionChange(qIndex, option.value)}
                    className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-400">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="w-full rounded-md bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700 transition">
          Next: Sleep Quality (PSQI)
        </button>
      </form>
    </div>
  );
}