import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import type { Metadata } from "next";
import Image from "next/image";
// import { Inter } from "next/font/google";     //? b/c already imported in main layout.tsx
// import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
        <main className="relative flex bg-black-3">
            {/* //TODO <p className="text-white-1">Left sidebar</p> */}
            <LeftSidebar />

            <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
              <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                <div className="flex h-16 items-center justify-between md:hidden">
                  <Image src={"/icons/podcAIst-logo.svg"} alt="menu icon" width={40} height={40}/>
                  {/*//TODO MobileNav */}
                  <MobileNav />
                </div>
                <div className="flex flex-col md:pb-14">
                  Toaster Nofification (Shadcn)
                  {children} {/*//TODO main */}
                </div>
              </div>
            </section>


            
            
            {/* //TODO <p className="text-white-1">Right sidebar</p> */}
            <RightSidebar />
        </main>
    </div>
  );
}
