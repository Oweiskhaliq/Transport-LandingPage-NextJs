"use client";
import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const serif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  /// Define animation variants for left-to-right effect
  const pageVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    }, // Slide to center smoothly
    exit: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.5, ease: "easeIn" },
    }, // Exit by sliding to the right
  };
  return (
    <html lang="en">
      <body className={`${serif.className}  antialiased`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
