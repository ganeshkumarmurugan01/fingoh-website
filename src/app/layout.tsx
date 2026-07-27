import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Fingoh — Intent Intelligence for B2B Trade Fairs",
  description: "Stop waiting for the right visitors to walk in. Start bringing them yourself. Fingoh.ai helps exhibitors identify, engage and convert prospects before, during and after every trade fair.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
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