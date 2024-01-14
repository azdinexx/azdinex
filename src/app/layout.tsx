import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AzdineX',
  description: 'Next.js Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={nunito.className + ' max-w-6xl mx-auto p-2 sm:p-2 md:p-0'}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
