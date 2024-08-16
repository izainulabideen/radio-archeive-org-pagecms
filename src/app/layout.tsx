import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radio Archive",
  description:
    "Radio archive revolutionizing the way radio history is preserved and accessed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-color1 ${inter.className}`}>
        <Header />
        {children}
        <Testimonial />
        <Footer />
      </body>
    </html>
  );
}
