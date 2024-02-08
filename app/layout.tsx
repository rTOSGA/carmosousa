import "./globals.css";

import { Inter } from "@next/font/google";
import Header from "../components/header";
import WidgetWhatsapp from "../components/whatsapp";

const inter = Inter({
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className={inter.className}>
        <div className="flex flex-col w-full">
          <Header></Header>
          <WidgetWhatsapp></WidgetWhatsapp>
          <div className="flex w-full justify-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
