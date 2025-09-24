import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Savi, will you be my girlfriend? 💝",
  description: "A special message for someone very special",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
