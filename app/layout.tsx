
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";



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
      <body className={`${roboto.className}  antialiased`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
