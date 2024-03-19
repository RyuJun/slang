import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";

import "./globals.css";

const roboto = Roboto({ weight: ["500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
