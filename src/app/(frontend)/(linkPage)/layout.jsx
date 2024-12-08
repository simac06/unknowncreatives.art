'use client'

import '@styles/global.css'
import Head from 'next/head'
import { NextUIProvider } from '@nextui-org/react'
import NavHeader from '../components/header/NavHeader'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isIndexPage = pathname === '/'
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark relative">
        <NextUIProvider>
          <NavHeader position="absolute" />
          <main> {children}</main>
        </NextUIProvider>
      </body>
    </html>
  )
}
