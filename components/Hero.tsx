"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Zap, Shield, TrendingUp } from "lucide-react"
import dynamic from "next/dynamic"
import Typewriter from "typewriter-effect"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })
const MotionButton = dynamic(() => import("framer-motion").then((mod) => mod.motion.button), { ssr: false })

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-gray-900">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="galaxy"></div>
      <div className="shooting-stars"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-teal-400 rounded-full text-sm font-semibold text-white mb-6 glow-effect">
            <Typewriter
              options={{
                strings: ["Empowering Autonomous Innovation", "Building the Future", "Transforming Business"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            <span className="text-white">Autonomous</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200 animate-pulse">
              AI AGENTS
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
          <Typewriter
        options={{
          strings: [
            "We build self-governing AI agents that learn, adapt, and execute with minimal supervision.",
            "Let us take your business into the future of automation and smart solutions.",
          ],
          autoStart: true,
          loop: true,
          delay: 50, // Adjust speed
          deleteSpeed: 30,
        }}
      />
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <Feature icon={Zap} text="Fast Performance" />
            <Feature icon={Shield} text="Robust Security" />
            <Feature icon={TrendingUp} text="Scalable Solutions" />
          </div>
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-teal-400 text-white font-bold py-3 px-8 rounded-full text-lg glow-effect"
          >
            Get Started
          </MotionButton>
        </MotionDiv>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex flex-col items-center">
      <Icon className="w-8 h-8 mb-2 text-teal-400 animate-float" />
      <span className="text-sm text-gray-300">{text}</span>
    </div>
  )
}

