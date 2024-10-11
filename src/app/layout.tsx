import MainLayout from "@/layouts/MainLayout";
import type { BaseComponentProperties } from "@/types/base-component-properties";
import type { Metadata } from "next";
import localFont from "next/font/local";

type Properties = BaseComponentProperties;

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ScreenCode — Powerful Text Tools",
  description: "Tools for managing and manipulating text effectively.",
};

export default function RootLayout({ children }: Readonly<Properties>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
