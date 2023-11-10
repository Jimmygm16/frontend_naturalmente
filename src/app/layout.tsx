import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
 import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Naturalmente',
  description: 'welcome',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Ajusta este valor según la altura de tu encabezado */}
          {children}
        
        <Footer />
      </body>
    </html>
  )
}
