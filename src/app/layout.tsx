import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NavLinks from '../components/navbar/nav-links';
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'NextJS Blog App',
  description: 'Tutorial for Deployment NextJS Project',
};

const RootLayout = (
  props: Readonly<{
    children: React.ReactNode;
  }>
) => {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header>
            <NavLinks />
          </header>
          <main>{props.children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
