import "./globals.css";
import {} from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mehedi Hasan",
  description: "Mehedi Hasan's Protfolio Version 2.0",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
