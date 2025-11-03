import type { Metadata } from 'next'
import { Crimson_Text } from 'next/font/google'
import './globals.css'

const crimsonText = Crimson_Text({
  weight: ['400', '600', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-crimson'
})

export const metadata: Metadata = {
  title: 'Библия онлайн — Свет и покой',
  description: 'Читайте Священное Писание в атмосфере света и покоя',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${crimsonText.variable} font-serif`}>{children}</body>
    </html>
  )
}
