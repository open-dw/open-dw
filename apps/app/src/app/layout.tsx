import Providers from "./providers";
import "~/styles/globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className={inter.className}>
        <body>{children}</body>
      </html>
    </Providers>
  );
}
