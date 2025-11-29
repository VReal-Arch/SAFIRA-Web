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
    
    let psqiRawScore = 0;
    const keysToSum = ['q5a', 'q5b', 'q5c', 'q5d', 'q5e', 'q5f', 'q5g', 'q5h', 'q5i', 'q6', 'q7', 'q8', 'q9'];

    keysToSum.forEach(key => {
      if (answers[key] !== undefined) {
        psqiRawScore += parseInt(answers[key]);
      }
    });

    localStorage.setItem('psqiScore', psqiRawScore.toString());
    router.push('/dashboard'); 
  };

  const frequencyOptions = [
    "Not during the past month",
    "Less than once a week",
    "Once or twice a week",
    "Three or more times a week",
  ];

  const problemOptions = [
    "No problem at all",
    "Only a very slight problem",
    "Somewhat of a problem",
    "A very big problem",
  ];

  const qualityOptions = [
    "Very good",
    "Fairly good",
    "Fairly bad",
    "Very bad",
  ];

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md dark:bg-[#181818] dark:border dark:border-gray-800">
      <h1 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">Pittsburgh Sleep Quality Index (PSQI)</h1>
      <p className="mb-8 text-sm text-gray-600 dark:text-gray-400">
        The following questions relate to your usual sleep habits <strong>during the past month only</strong>. Your answers should indicate the most accurate reply for the majority of days and nights in the past month.
      </p>
      <form onSubmit={handleSubmit} className="space-y-8 text-gray-800 dark:text-gray-200">
        
        <div className="space-y-4">
          <div>
            <label htmlFor="q1" className="block text-sm font-medium">1. During the past month, what time have you usually gone to bed at night?</label>
            <input id="q1" type="time" required onChange={(e) => handleInputChange('q1', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:bg-[#121212] dark:border-gray-700" />
          </div>
          <div>
            <label htmlFor="q2" className="block text-sm font-medium">2. During the past month, how long (in minutes) has it usually taken you to fall asleep each night?</label>
            <input id="q2" type="number" min="0" required onChange={(e) => handleInputChange('q2', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:bg-[#121212] dark:border-gray-700" />
          </div>
          <div>
            <label htmlFor="q3" className="block text-sm font-medium">3. During the past month, what time have you usually gotten up in the morning?</label>
            <input id="q3" type="time" required onChange={(e) => handleInputChange('q3', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:bg-[#121212] dark:border-gray-700" />
          </div>
          <div>
            <label htmlFor="q4" className="block text-sm font-medium">4. During the past month, how many hours of actual sleep did you get at night? (This may be different than the number of hours you spent in bed.)</label>
            <input id="q4" type="number" min="0" step="0.5" required onChange={(e) => handleInputChange('q4', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:bg-[#121212] dark:border-gray-700" />
          </div>
        </div>
        
        <div>
          <p className="mb-4 font-medium">5. During the past month, how often have you had trouble sleeping because you...</p>
          {[
            ['a', 'Cannot get to sleep within 30 minutes'],
            ['b', 'Wake up in the middle of the night or early morning'],
            ['c', 'Have to get up to use the bathroom'],
            ['d', 'Cannot breathe comfortably'],
            ['e', 'Cough or snore loudly'],
            ['f', 'Feel too cold'],
            ['g', 'Feel too hot'],
            ['h', 'Have bad dreams'],
            ['i', 'Have pain'],
          ].map(([key, question]) => (
            <div key={key} className="mb-4 border-b border-gray-100 pb-4 last:border-0 dark:border-gray-800">
              <p className="mb-2 text-sm">{key}. {question}</p>
              <div className="space-y-1">
                {frequencyOptions.map((option, index) => (
                  <label key={index} className="flex cursor-pointer items-center space-x-2">
                    <input type="radio" name={`q5${key}`} value={index} required onChange={() => handleInputChange(`q5${key}`, index)} className="h-4 w-4 text-teal-600 focus:ring-teal-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="mb-2 font-medium">6. During the past month, how often have you taken medicine to help you sleep (prescribed or "over the counter")?</p>
          <div className="space-y-1">
            {frequencyOptions.map((option, index) => (
              <label key={index} className="flex cursor-pointer items-center space-x-2">
                <input type="radio" name="q6" value={index} required onChange={() => handleInputChange('q6', index)} className="h-4 w-4 text-teal-600 focus:ring-teal-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium">7. During the past month, how often have you had trouble staying awake while driving, eating meals, or engaging in social activity?</p>
          <div className="space-y-1">
            {frequencyOptions.map((option, index) => (
              <label key={index} className="flex cursor-pointer items-center space-x-2">
                <input type="radio" name="q7" value={index} required onChange={() => handleInputChange('q7', index)} className="h-4 w-4 text-teal-600 focus:ring-teal-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 font-medium">8. During the past month, how much of a problem has it been for you to keep up enough enthusiasm to get things done?</p>
          <div className="space-y-1">
            {problemOptions.map((option, index) => (
              <label key={index} className="flex cursor-pointer items-center space-x-2">
                <input type="radio" name="q8" value={index} required onChange={() => handleInputChange('q8', index)} className="h-4 w-4 text-teal-600 focus:ring-teal-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium">9. During the past month, how would you rate your sleep quality overall?</p>
          <div className="space-y-1">
            {qualityOptions.map((option, index) => (
              <label key={index} className="flex cursor-pointer items-center space-x-2">
                <input type="radio" name="q9" value={index} required onChange={() => handleInputChange('q9', index)} className="h-4 w-4 text-teal-600 focus:ring-teal-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="w-full rounded-md bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700 transition">
          Finish & Go to Dashboard
        </button>
      </form>
    </div>
  );
}