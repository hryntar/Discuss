import type { Metadata } from "next";
import Providers from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Discuss",
   description: "Discuss - a platform where you can discuss different topics.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <div className="container px-4 mx-auto max-w-6xl">
               <Providers>
                  <Header />
                  {children}
               </Providers>
            </div>
         </body>
      </html>
   );
}
