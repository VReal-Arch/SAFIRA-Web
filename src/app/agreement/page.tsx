import Link from 'next/link';

export default function AgreementPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-90 p-4">
      <div className="mx-auto max-w-md rounded-lg bg-[#181818] p-8 shadow-xl border border-gray-800">
        <h2 className="mb-6 text-xl font-bold text-white">User Agreement</h2>
        <ul className="mb-8 list-inside list-disc space-y-3 text-sm text-gray-300">
          <li>
            <strong>Data Privacy:</strong> Your journal and survey data are encrypted and kept confidential.
          </li>
          <li>
            <strong>AI Analysis:</strong> You allow AI to analyze language patterns to detect mental health risks.
          </li>
          <li>
            <strong>Crisis Protocol:</strong> If a high risk of self-harm is detected, the system will provide emergency contact options.
          </li>
        </ul>
        <Link href="/onboarding" className="block w-full rounded-md bg-teal-600 py-3 text-center font-semibold text-white hover:bg-teal-500 transition">
          I Agree & Continue
        </Link>
      </div>
    </div>
  );
}