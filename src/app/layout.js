import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ПрофМед",
  description: "Веб-приложение для первичной профсоюзной организации мед университета",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <NavigationMenu />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
