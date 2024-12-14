"use client";

import "@styles/global.css";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import NavHeader from "../components/header/NavHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/waj0nge.css" />
      </Head>
      <body className="dark bg-background font-sans">
        <NextUIProvider>
          <NavHeader position="auto" />
          <main className="bg-background min-h-page font-light">
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
