import { GameProvider } from './contexts/GameContext'
import { RecordProvider } from './contexts/RecordContext'
import { ModalProvider } from './contexts/ModalContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <GameProvider>
        <RecordProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </RecordProvider>
      </GameProvider>
      </body>
    </html>
  )
}
