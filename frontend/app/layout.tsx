import MainLayout from "@/components/main-layout";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/lib/styles/theme";
import "./globals.css"

export const metadata: Metadata = {
  title: "Train schedule",
  description: "Test task for Kevych Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
