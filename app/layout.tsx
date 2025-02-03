import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google";

const inter =Inter({subsets:["latin"]})

export const metadata: Metadata = {
  title: "स्वदेसी हाट",
  description:
    "An desi E-Commerce website created by Arjun Kumar for personal project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-900">
      <body className={inter.className}>
        <main className="bg-gray-900">{children}</main>
      </body>
    </html>
  );
}
