import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Design & Programming | Immersive AI Agency",
  description: "Intelligent workflows, where innovative AI technology meets high-end web design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#6a0000] text-white selection:bg-white/20">
        <SmoothScroll>
          <CustomCursor />
          {/* <Navbar /> */}
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
