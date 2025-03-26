import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: 'Volkan Kaya | Frontend Developer',
   description: 'Personal portfolio website of Volkan Kaya, a dedicated Frontend Developer with expertise in React, TypeScript, and REST technologies.',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="dark">
         <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
      </html>
   );
}
