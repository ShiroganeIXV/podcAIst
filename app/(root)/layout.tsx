import LeftSidebar from "@/components/LeftSidebar";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";     //? b/c already imported in main layout.tsx
// import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main>
            {/* <p className="text-white-1">Left sidebar</p> */}
            <LeftSidebar />
            {children} {/* main */}
            
            <p className="text-white-1">Right sidebar</p>
        </main>
    </div>
  );
}
