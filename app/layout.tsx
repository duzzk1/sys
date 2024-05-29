import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import LateralMenu from "./components/LateralMenu";
import '@radix-ui/themes/styles.css';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unisys",
  description: "A system to unific invoices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AppRouterCacheProvider>
          <LateralMenu />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
