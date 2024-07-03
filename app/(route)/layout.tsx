import type { Metadata } from 'next';
import { Providers } from './providers';

import React from 'react';
import NavBar from '@/_components/NavBar/NavBar';

import '@/_styles/globals.css';
import { fontRoboto } from '@/_config/fonts';
import { siteConfig } from '@/_config/site';
import UserSearchList from './_components/UserSearchList';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="dark">
      <body className={`${fontRoboto.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
