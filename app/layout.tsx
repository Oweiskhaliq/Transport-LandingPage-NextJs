import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// 💡 Initializing the font on a Server Component fixes the webpack compilation crash!
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UAE Transport & Rental Buses",
  description: "High-quality bus tour and rental services in Dubai, UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}