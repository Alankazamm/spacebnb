import './globals.css'
export const metadata = {
  title: 'SpaceBnB',
  description: 'Find the best places to stay at in space',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/space-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
