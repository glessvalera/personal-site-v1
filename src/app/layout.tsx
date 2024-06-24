import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CssBaseline from '@mui/material/CssBaseline';
import AppBarNav from "@/components/nav/AppBarNav";
import BottomNav from "@/components/nav/BottomNav";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gless Valera",
  description: "UX Research Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen justify-between">
        <CssBaseline />
        <AppBarNav />
        <Box className="flex flex-col flex-1 xl:mx-64">
          <Box className={`${inter.className} flex flex-col flex-1`}>{children}</Box>
          <BottomNav />
        </Box>
      </body>
    </html>
  );
}
