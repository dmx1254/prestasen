import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif, Montserrat, Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

const monteserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-monteserrat",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Prestasen",
  description: "Prestasen is a modern service provision platform for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} ${monteserrat.variable} ${mulish.variable} font-sans bg-white`}
      >
        <main className="h-full w-full">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
