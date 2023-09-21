import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LoginModel from "@/components/models/LoginModel";
import RegisterModel from "@/components/models/RegisterModel";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitverse",
  description:
    "twitter and x clone using react nextjs tailwinid typescript mongodb prisa ",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Toaster />
          <RegisterModel />
          <LoginModel />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
