import { Space_Grotesk, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata = {
  title: 'GreenApple Studio — We Build, Publish & Bring Your Game to Life',
  description:
    'GreenApple Studio creates original games, publishes indie titles, and builds custom games for clients worldwide. Contact us at info@greenapplestudio.in',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sourceSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
