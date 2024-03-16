import type { Metadata } from 'next';
import { inter } from './fonts';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import { Theme } from '@radix-ui/themes';
import Provider from './provider';
export const metadata: Metadata = {
  title: 'Shipping lines',
  description: 'Shipping lines'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${inter.className} `}>
          <Header />
          <Theme>
            <main className="mt-[50px] h-[calc(100%-50px)]">{children}</main>
          </Theme>
          <Footer />
          <Toaster />
        </body>
      </Provider>
    </html>
  );
}
