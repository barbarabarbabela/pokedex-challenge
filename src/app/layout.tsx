import type { Metadata } from 'next'
import './globals.css'
import { Nunito_Sans, Roboto_Mono } from 'next/font/google'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

const roboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Search for your favorite Pokémon!',
  icons: {
    icon: './favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${roboto.variable}`}>
      <body>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        {children}
      </body>
    </html>
  )
}
