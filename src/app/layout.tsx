import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GClient Admin Dashboard",
  description: "GClient Admin Dashboard",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <StoreProvider>
      <html lang="en" >
        <body className={`${manrope.variable} antialiased`}>

          {children}

        </body>
      </html>
    </StoreProvider>
  );
}