
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from './components/NavBar'

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Planning and Preparation', href: '/planning-and-preparation' },
  { label: 'The Classroom Environment', href: '/the-classroom-environment' },
  { label: 'Instruction', href: '/instruction' },
  { label: 'Professional Responsibilities', href: '/professional-responsibilities' },
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
