import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Solendr | Modern Loan Management System',
  description: 'Streamline your lending operations with Solendr - The comprehensive loan management system for private lenders and micro-credit firms in East Africa.',
  keywords: 'loan management, lending software, fintech, East Africa, private lenders, micro-credit',
  openGraph: {
    title: 'Solendr | Modern Loan Management System',
    description: 'Streamline your lending operations with Solendr - The comprehensive loan management system for private lenders and micro-credit firms in East Africa.',
    url: 'https://solendr.co.ke',
    siteName: 'Solendr',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solendr | Modern Loan Management System',
    description: 'Streamline your lending operations with Solendr - The comprehensive loan management system for private lenders and micro-credit firms in East Africa.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://solendr.co.ke'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}