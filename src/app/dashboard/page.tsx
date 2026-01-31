'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

function DashboardContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'beranda';
  
  const [activeTab, setActiveTab] = useState(initialTab);
  const [userName, setUserName] = useState(''); 
  const [wellnessScore, setWellnessScore] = useState(0); 
  const [streak, setStreak] = useState(1);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) setActiveTab(tab);
    else setActiveTab('beranda');
  }, [searchParams]);

  useEffect(() => {
    // ... (Keep existing localStorage logic for Name, Greeting, Score, Streak) ...
    const savedName = localStorage.getItem('userName');
    if (savedName) setUserName(savedName);

    const hour = new Date().getHours();
    if (hour >= 4 && hour < 12) setGreeting('Good Morning');
    else if (hour >= 12 && hour < 17) setGreeting('Good Afternoon');
    else if (hour >= 17 && hour < 21) setGreeting('Good Evening');
    else setGreeting('Good Night');

    const savedDass = localStorage.getItem('dassScore');
    const savedPsqi = localStorage.getItem('psqiScore');
    
    let total = 0;
    let count = 0;
    if (savedDass) { total += 100 - ((parseInt(savedDass) / 63) * 100); count++; }
    if (savedPsqi) { 
        let val = 100 - ((parseInt(savedPsqi) / 39) * 100);
        if(val < 0) val = 0;
        total += val; count++; 
    }
    if (count > 0) setWellnessScore(Math.round(total / count));

    const today = new Date().toISOString().split('T')[0];
    const lastVisit = localStorage.getItem('lastVisitDate');
    let currentStreak = parseInt(localStorage.getItem('streakCount') || '0');

    if (lastVisit !== today) {
        const yesterdayDate = new Date();
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);
        const yesterday = yesterdayDate.toISOString().split('T')[0];

        if (lastVisit === yesterday) {
            currentStreak += 1;
        } else {
            currentStreak = 1;
        }
        localStorage.setItem('lastVisitDate', today);
        localStorage.setItem('streakCount', currentStreak.toString());
    } else {
        if (currentStreak === 0) currentStreak = 1;
    }
    setStreak(currentStreak);
    // ... (End of logic) ...
  }, []);

  const StatCard = ({ title, value, icon, colorClass }: any) => (
    <div className="group relative flex items-center overflow-hidden rounded-md transition cursor-pointer pr-4 
                    bg-white shadow-sm border border-gray-100 hover:shadow-md 
                    dark:bg-[#2a2a2a] dark:border-transparent dark:hover:bg-[#3a3a3a]">
      <div className={`flex h-20 w-20 items-center justify-center shadow-inner ${colorClass}`}>
        <span className="text-3xl">{icon}</span>
      </div>
      <div className="ml-4 flex-1 py-4">
        <h4 className="text-sm font-bold text-gray-500 dark:text-gray-200">{title}</h4>
        <p className="mt-1 text-2xl font-black text-gray-800 dark:text-white">{value}</p>
      </div>
    </div>
  );

  // UPDATED: ProgramCard handles External Links
  const ProgramCard = ({ title, desc, imageSrc, href = "#" }: any) => {
    const isExternal = href.startsWith('http');
    
    // Inner Content helper
    const CardContent = () => (
      <>
        <div className="relative mb-4 h-32 w-full overflow-hidden rounded-md shadow-sm bg-gray-200 dark:bg-gray-800">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-cover transition duration-500 group-hover:scale-110"
            onError={(e) => { e.currentTarget.src = "https://placehold.co/300x200?text=No+Image"; }}
          />
          <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/0"></div>
        </div>
        <h3 className="mb-1 text-base font-bold text-gray-800 dark:text-white truncate">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{desc}</p>
      </>
    );

    // If external, use <a> with target blank, else use Next.js <Link>
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="group block p-4 rounded-lg transition cursor-pointer bg-white border border-gray-100 hover:border-teal-500 hover:shadow-lg dark:bg-[#181818] dark:border-transparent dark:hover:bg-[#282828]">
          <CardContent />
        </a>
      );
    }
    return (
      <Link href={href} className="group block p-4 rounded-lg transition cursor-pointer bg-white border border-gray-100 hover:border-teal-500 hover:shadow-lg dark:bg-[#181818] dark:border-transparent dark:hover:bg-[#282828]">
        <CardContent />
      </Link>
    );
  };

  return (
    <div className="min-h-screen p-6 md:p-8 transition-colors duration-300 bg-gradient-to-b from-teal-50 to-gray-50 dark:from-[#1e4e46] dark:to-[#121212]">
      
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {greeting}{userName ? `, ${userName}` : ''}.
        </h1>
        <div className="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center border-2 border-white dark:border-black font-bold text-white">
          {userName ? userName.charAt(0).toUpperCase() : 'U'}
        </div>
      </div>

      {activeTab === 'beranda' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StatCard title="Resilience" value={`${wellnessScore}%`} icon="❤️" colorClass="bg-teal-100 text-teal-700 dark:bg-teal-800 dark:text-teal-100" />
            <StatCard title="Daily Streak" value={`${streak} Days`} icon="🔥" colorClass="bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-100" />
            <StatCard title="Points" value="150" icon="💎" colorClass="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100" />
          </div>

          {/* --- UPDATED: CONDITIONAL ALERT FOR LOW SCORE (< 50%) --- */}
          {wellnessScore > 0 && wellnessScore < 50 && (
             <div className="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 p-6 shadow-sm dark:bg-yellow-900/20 dark:border-yellow-500/50 animate-in slide-in-from-top-5 duration-500">
                <div className="flex items-start">
                   <span className="text-3xl mr-4">🤖</span>
                   <div className="flex-1">
                      <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-1">Feeling a bit down?</h3>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-4">
                        Your resilience score is lower than usual. Sometimes it helps to just talk it out. 
                        Safira AI is here to listen to you, 24/7.
                      </p>
                      <div className="flex gap-3">
                        <Link href="/ai-chat" className="inline-flex items-center rounded-md bg-yellow-600 px-4 py-2 text-sm font-bold text-white hover:bg-yellow-700 transition shadow-md active:scale-95">
                           Talk to AI
                        </Link>
                        <Link href="/doctors" className="inline-flex items-center rounded-md bg-white border border-gray-300 px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 transition shadow-sm">
                           See a Doctor
                        </Link>
                      </div>
                   </div>
                </div>
             </div>
          )}
          {/* --------------------------------------------------------- */}

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">Ready to Check-in?</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <Link href="/" className="flex-1 p-6 rounded-lg transition group bg-white border border-gray-200 hover:border-teal-500 hover:shadow-lg dark:bg-[#181818] dark:border-transparent dark:hover:bg-[#282828]">
                <div className="mb-2 text-teal-600 dark:text-teal-400 font-bold tracking-wider text-xs uppercase">WEEKLY</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Mental Condition Evaluation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Measure your stress levels and sleep quality this week.</p>
                <span className="font-bold text-sm underline decoration-teal-500 underline-offset-4 text-teal-700 dark:text-white dark:group-hover:text-teal-400">Start Now</span>
              </Link>

              <div className="flex-1 p-6 rounded-lg transition bg-white border border-gray-200 hover:border-orange-400 hover:shadow-lg dark:bg-[#181818] dark:border-transparent dark:hover:bg-[#282828]">
                 <div className="mb-2 text-orange-500 dark:text-orange-400 font-bold tracking-wider text-xs uppercase">DAILY</div>
                 <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">How do you feel?</h3>
                 <div className="flex space-x-4 text-4xl">
                    <button className="hover:scale-125 transition grayscale hover:grayscale-0">😐</button>
                    <button className="hover:scale-125 transition grayscale hover:grayscale-0">🙂</button>
                    <button className="hover:scale-125 transition grayscale hover:grayscale-0">😊</button>
                 </div>
              </div>
            </div>
          </div>

          {/* UPDATED: Programs with External Links */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">Curated for {userName || 'You'}</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
              
              {/* External Article */}
              <ProgramCard 
                title="Sleep Hygiene 101" 
                desc="Read: Tips for better sleep (Sleep Foundation)." 
                imageSrc="/program-sleep.jpg" 
                href="https://www.sleepfoundation.org/sleep-hygiene" 
              />
              
              {/* External Article */}
              <ProgramCard 
                title="5-Minute Meditation" 
                desc="Watch: Guided meditation for beginners." 
                imageSrc="/program-meditation.jpg" 
                href="https://www.calm.com/blog/5-minute-mindfulness"
              />
              
              {/* Internal Link (Journal) */}
              <ProgramCard 
                title="Journaling" 
                desc="Start writing down your feelings." 
                imageSrc="/program-journal.jpg" 
                href="https://positivepsychology.com/benefits-of-journaling/" 
              />
              
              {/* External Article/Video */}
              <ProgramCard 
                title="Relaxing Music" 
                desc="Listen: Calming nature sounds." 
                imageSrc="/program-music.jpg" 
                href="https://www.youtube.com/watch?v=lFcSrYw-ARY"
              />
              
              {/* Internal Link (Doctors) */}
              <ProgramCard 
                title="SOS Crisis" 
                desc="Emergency assistance & Doctors." 
                imageSrc="/program-sos.jpg" 
                href="/doctors" 
              />
            </div>
          </div>
        </div>
      )}

      {/* (Keep Journal and Program Tabs same as before...) */}
      {(activeTab === 'jurnal') && (
        <div className="max-w-4xl mx-auto animate-in fade-in duration-300">
           {/* ... Paste your Journal Tab code here ... */}
           <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">My Journal</h2>
           <div className="p-6 rounded-xl border transition bg-white border-gray-200 shadow-sm dark:bg-[#181818] dark:border-gray-800">
             <textarea className="w-full p-4 rounded-lg border focus:outline-none min-h-[200px] transition bg-gray-50 border-gray-300 text-gray-900 focus:border-teal-500 dark:bg-[#121212] dark:border-gray-700 dark:text-white dark:focus:border-teal-500" placeholder="Write your story today..."></textarea>
             <div className="mt-4 flex justify-end">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-md">Save Entry</button>
             </div>
           </div>
        </div>
      )}
      {(activeTab === 'program') && (
        <div className="space-y-6 animate-in fade-in duration-300">
           {/* ... Paste your Program Tab code here ... */}
           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Programs & Therapy</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProgramCard title="CBT Guide" desc="External: Mayo Clinic Guide." imageSrc="/program-meditation.jpg" href="https://www.mayoclinic.org/tests-procedures/cognitive-behavioral-therapy/about/pac-20384610" />
              <ProgramCard title="Mindfulness" desc="Daily mindfulness practice." imageSrc="/program-sleep.jpg" href="https://www.mindful.org/how-to-meditate/" />
           </div>
        </div>
      )}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}