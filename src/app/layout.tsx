import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar'; // Gunakan @ jika tsconfig sudah benar, atau relative path
import BottomNav from './components/BottomNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SAFIRA Web App',
  description: 'Mental health companion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* PERBAIKAN DI SINI:
          bg-gray-50 = Latar Putih (Light Mode)
          dark:bg-[#121212] = Latar Hitam (Dark Mode)
      */}
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-[#121212] dark:text-white transition-colors duration-300`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 md:ml-64 pb-24 md:pb-0">
            {children}
          </main>
        </div>
        <BottomNav />
      </body>
    </html>
  );
}