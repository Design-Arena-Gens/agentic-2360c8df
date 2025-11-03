'use client'

import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import VerseOfDay from './components/VerseOfDay'
import BooksSection from './components/BooksSection'
import Footer from './components/Footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navigation isScrolled={isScrolled} />
      <main>
        <Hero />
        <VerseOfDay />
        <BooksSection />
      </main>
      <Footer />
    </>
  )
}
