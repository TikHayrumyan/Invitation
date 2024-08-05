import type { Metadata } from "next";
import { Inter, Great_Vibes, Cormorant, Ephesis } from "next/font/google";
import "./globals.css";
import path from "path";

const GreatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-great-vibes",
});
const InterFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const font_Cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cormorant",
});

const Ephesis_font = Ephesis({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-epi",
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Generated by Weflex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GreatVibes.variable} ${InterFont.variable} ${font_Cormorant.variable} ${Ephesis_font.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
