"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import "./globals.css";
import theme from "./theme/theme";
import Footer from "./footer/layout";
import NavbarLayout from "./navbarLayout/layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={theme} cssVarsRoot="body">
          <NavbarLayout />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
