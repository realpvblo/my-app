import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Skills from './components/skills'
import { CanvasRevealEffectDemo } from '@/components/canvasReveal/canvasReveal'
import Timeline from './components/timeline'
import Certificates from './components/certificates'
import Footer from './components/footer'

export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="bg-black bg-dot-white/[0.3] relative">
        <div className="max-w-7xl mx-auto p-5 relative z-10">
          <Navbar />
          <Hero />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full z-0">
        </div>
      </div>
      <div className='min-h-screen bg-black'>
        <div className="max-w-7xl mx-auto p-5 relative z-10">
        {/* <CanvasRevealEffectDemo /> */}
        <Skills />
        <Timeline />
        <Certificates />
        </div>
      </div>
      <Footer />
    </div>
  )
}
