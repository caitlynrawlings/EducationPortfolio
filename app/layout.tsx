
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from './components/NavBar'
import basePath from "./utils/basePath";

const nav = [
  { label: 'Home', href: `${basePath}/` },
  { label: 'Planning and Preparation', href: `${basePath}/planning-and-preparation` },
  { label: 'The Classroom Environment', href: `${basePath}/the-classroom-environment` },
  { label: 'Instruction', href: `${basePath}/instruction` },
  { label: 'Professional Responsibilities', href: `${basePath}/professional-responsibilities` },
]


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caitlyn Rawlings | Education Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} Caitlyn Rawlings | Education Portfolio</p>
        </footer>
      </body>
    </html>
  );
}
