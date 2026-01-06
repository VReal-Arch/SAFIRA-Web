'use client';
import Link from 'next/link';
import Image from 'next/image';

// Data for the 7 Doctors (You can edit this later)
const doctorsData = [
  { id: 1, name: "Dr. Anya Sharma", field: "Clinical Psychologist (Anxiety Specialist)", img: "/doc-1.jpeg", contact: "mailto:anya@safira.clinic" },
  { id: 2, name: "Dr. Budi Santoso, Sp.KJ", field: "Psychiatrist (Mood Disorders)", img: "/doc-2.jpeg", contact: "tel:+6281234567890" },
  { id: 3, name: "Sarah Jenkins, M.Psi", field: "Counselor (Trauma & Recovery)", img: "/doc-3.jpeg", contact: "mailto:sarah@safira.clinic" },
  { id: 4, name: "Dr. Kenji Tanaka", field: "Sleep Specialist & Somnologist", img: "/doc-4.jpeg", contact: "mailto:kenji@safira.clinic" },
  { id: 5, name: "Maria Rodriguez, Ph.D.", field: "Family & Relationship Therapist", img: "/doc-5.jpeg", contact: "mailto:maria@safira.clinic" },
  { id: 6, name: "Dr. Ahmad Hidayat", field: "Psychiatrist (Adolescent Mental Health)", img: "/doc-6.jpeg", contact: "tel:+628987654321" },
  { id: 7, name: "Emily Chen, LCSW", field: "Licensed Clinical Social Worker", img: "/doc-7.jpeg", contact: "mailto:emily@safira.clinic" },
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
                // Using a placeholder if image is missing during development
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