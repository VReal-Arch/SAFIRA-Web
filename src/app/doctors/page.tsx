'use client';
import Link from 'next/link';
import Image from 'next/image';

// Data Dokter (Updated: Dr. House & Gender Adjusted)
const doctorsData = [
  // 1. Dr. House (Male)
  { id: 1, name: "Dr. Gregory House", field: "Head of Diagnostic Medicine & Psychiatry", img: "/doc-1.jpeg", contact: "mailto:house@safira.clinic" },
  
  // 2. Male (Tetap)
  { id: 2, name: "Dr. Budi Santoso, Sp.KJ", field: "Psychiatrist (Mood Disorders)", img: "/doc-2.jpeg", contact: "tel:+6281234567890" },
  
  // 3. Male (Dulu Sarah -> Sekarang Samuel)
  { id: 3, name: "Dr. Samuel Jenkins", field: "Trauma & PTSD Counselor", img: "/doc-3.jpeg", contact: "mailto:samuel@safira.clinic" },
  
  // 4. Male (Tetap)
  { id: 4, name: "Dr. Kenji Tanaka", field: "Sleep Specialist & Somnologist", img: "/doc-4.jpeg", contact: "mailto:kenji@safira.clinic" },
  
  // 5. Male (Dulu Maria -> Sekarang Mario)
  { id: 5, name: "Dr. Mario Rodriguez", field: "Family & Relationship Therapist", img: "/doc-5.jpeg", contact: "mailto:mario@safira.clinic" },
  
  // 6. FEMALE (Dulu Ahmad -> Sekarang Dr. Lisa - "Except doc-6")
  { id: 6, name: "Dr. Lisa Cuddy", field: "Psychiatrist (Adolescent Health)", img: "/doc-6.jpeg", contact: "tel:+628987654321" },
  
  // 7. Male (Dulu Emily -> Sekarang Eric)
  { id: 7, name: "Dr. Eric Chen", field: "Clinical Social Worker", img: "/doc-7.jpeg", contact: "mailto:eric@safira.clinic" },
];

export default function DoctorsPage() {
  return (
    <div className="min-h-screen p-6 md:p-8 transition-colors duration-300 bg-gray-50 dark:bg-[#121212]">
      
      {/* Header with Back Button */}
      <div className="mb-8 flex items-center">
        <Link href="/dashboard" className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-gray-100 dark:bg-[#2a2a2a] dark:hover:bg-[#3a3a3a]">
          ◀
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Professional Consultation</h1>
          <p className="text-gray-600 dark:text-gray-400">Connect with our verified experts.</p>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {doctorsData.map((doc) => (
          <div key={doc.id} className="group overflow-hidden rounded-xl bg-white shadow transition-all hover:shadow-lg dark:bg-[#181818] dark:border dark:border-gray-800">
            {/* Doctor Image */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
              <Image 
                src={doc.img} 
                alt={doc.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                // Placeholder jika gambar belum ada
                onError={(e) => { e.currentTarget.src = "https://placehold.co/400x500?text=No+Image"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>

            {/* Doctor Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{doc.name}</h3>
              <p className="mb-4 text-sm font-medium text-teal-600 dark:text-teal-400">{doc.field}</p>
              
              <a 
                href={doc.contact}
                className="flex w-full items-center justify-center rounded-lg bg-teal-600 py-3 font-bold text-white transition hover:bg-teal-700 active:scale-95"
              >
                📅 Book Consultation
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}