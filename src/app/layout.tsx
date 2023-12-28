import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner';
import { siteConfig } from './page';
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })



// SITE CONFUGRATION 
export const metadata: Metadata = {
  metadataBase: new URL("https://gitestimate.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,
  keywords: ["gitestimate", "github", "project" , "nextjs", "git" , "gitest", "mdtaquiimam", "taqui imam"],
  authors: [
    {
      name: "Taqui Imam",
      url: "https://github.com/taqui-786",
    },
  ],
  creator: "Taqui imam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@Taquiimam14",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <Toaster />
      <Analytics />
      </body>
  
    </html>
  )
}
