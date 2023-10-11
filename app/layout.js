'use client'

import Footer from './components/footer'
import Navbar from './components/navbar'
import './global.css'
import { Inter } from 'next/font/google'
import useFetch from './hooks/useFetch'
import { Suspense } from 'react'
import LoadingScreen from './loading'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const { data: socialsfriends } = useFetch("socials?type=friends");
  const { data: socialsformal } = useFetch("socials?type=formal");

  return (
    <html lang="en">
      <head>
        {/* just normal meta tags */}
        <meta name="author" content="Fahd Ashour" />
        <meta name="description" content="Fahd Fady Ashour's Personal Portfolio" />
        <meta name="keywords" content="Fahddev, Fahd Fady, Fahd Ashour, Fahd Fady Ashour, HTML, CSS, JavaScript, React, Next, Tailwind, Frontend, Developer" />
        <meta name="theme-color" content="#8b6bd1" />
        <link rel="apple-touch-icon" href="personal-pic.webp" />
        <link rel="icon" href="personal-pic.webp" />
      </head>

      <body className={inter.className}>
        <Suspense fallback={<LoadingScreen />}>
          <Navbar />

          {children}
        </Suspense>


        {/* import flowbite via script tag cuz i cannot use it in react propely */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>

        {socialsformal && <Footer socialsfriends={socialsfriends} socialsformal={socialsformal} />}
      </body>

    </html>
  )
}
