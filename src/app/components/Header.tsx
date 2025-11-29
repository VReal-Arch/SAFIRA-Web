import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-sm">
      <Link href="/" className="text-xl font-bold text-teal-700">
        SAFIRA
      </Link>
      <div className="flex gap-2">
        {/* Placeholders for future functionality */}
        <button className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">SOS</button>
      </div>
    </header>
  );
};

export default Header;