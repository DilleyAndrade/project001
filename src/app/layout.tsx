import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dilley Andrade | Fullstack',
  description: 'Dilley Andrade Portifolio',
  icons: '/favicon.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`pr-12 bg-bgLight dark:bg-bgDark ${inter.className}`}>
          {children}
      </body>
    </html>
  )
}
