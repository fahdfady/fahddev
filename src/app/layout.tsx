import type { Metadata } from "next";
import { Cairo, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const cairoFont = Cairo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fahd Ashour",
  description: "self-taught software engineer exploring React internals, dev tools, Rust, Networking, BLEU Community, cofounder and engineer Oblien.",
  icons:"/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairoFont.className} antialiased`}
      >
        <div className="w-full max-w-screen-lg mx-auto flex min-h-screen flex-col gap-y-4 items-center justify-start p-6 sm:p-8 ">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
