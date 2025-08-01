'use client';

import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-start space-y-5 px-5 pt-[30vh] text-center sm:px-0 sm:pt-[40vh]">
          <h1 className="text-6xl font-bold">Something went wrong.</h1>
          <p className="text-2xl">Ahh, you broke something. Oh well.</p>
          <Link href="/">Go back home</Link>
        </div>
      </body>
    </html>
  );
}
