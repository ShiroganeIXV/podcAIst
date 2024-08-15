import type { Metadata } from "next";
// import { Inter } from "next/font/google";     //? b/c already imported in main layout.tsx
// import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main>
            {/* main */}
            {children}
        </main>
  
  );
}
