import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start space-y-5 pt-[40vh]">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-2xl">Invalid guess! This page could not be found.</p>
      <Link href={'/'}>Go back home</Link>
    </div>
  );
}
