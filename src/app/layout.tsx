import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'LingoBridge | Interpretation & Translation',
  description: 'Professional Interpretation and Translation Services Across Alberta and Beyond.',
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="bg-blue-950 text-white p-8 text-center mt-12">
          <p>Serving organizations across Alberta and beyond. {/*[cite: 1] */}</p>
        </footer>
      </body>
    </html>
  );
}