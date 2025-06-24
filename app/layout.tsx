import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Design Agency - Strategic Brand Identities & Web Interfaces',
  description: 'Strategic brand identities and future-proof web interfaces — built to convert, scale, and stand out.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/eri5dkq.css" />
      </head>
      <body className="font-elza">{children}</body>
    </html>
  )
}