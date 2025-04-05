"use client"
import Image from "next/image";
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "@/components/confetti"
import CatAnimation from "@/components/cat-animation"
import { Card, CardContent } from "@/components/ui/card"
import { ShineBorder } from "@/components/magicui/shine-border";
import { TextAnimate } from "@/components/magicui/text-animate";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function Home() {

  const [showCard, setShowCard] = useState(false)
  useEffect(() => {
    // Small delay to trigger the entrance animation
    const timer = setTimeout(() => setShowCard(true), 500)
    return () => clearTimeout(timer)
  }, [])


  return (
    <main className="h-screen w-screen bg-black">
      <div className="min-h-screen flex items-center justify-center bg-black from-pink-50 to-lavender-50 p-4">
        <AnimatePresence>
          {showCard && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-md"
            >
              <Card className="border-none shadow-lg bg-black/100 backdrop-blur-sm overflow-hidden">
                <ShineBorder borderWidth={4} shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute inset-0">
                      <Confetti />
                    </div>

                    <div className="pt-8 px-6 relative z-10 w-full">
                      <CatAnimation />

                      <motion.div
                        className="mt-8 mb-6 w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <h1 className="text-3xl font-bold text-purple-500  pl-6 font-display  self-center mx-auto">
                          <SparklesText text="You thought I forgot your birthday, huh?" />
                        </h1>
                      </motion.div>

                      <div className="text-white p-6 rounded-lg mb-6 shadow-inner flex flex-col max-w-full">

                        <TextAnimate animation="blurIn" by="word" className="my-3 text-white text-lg">
                          Can’t help it… I guess I like making a dramatic late entrance.
                        </TextAnimate>
                        <TextAnimate animation="blurIn" by="word" className="text-white w-full text-lg">
                          Hope you’re smiling today.
                        </TextAnimate>
                        <TextAnimate animation="blurIn" by="word" className="text-white w-full text-lg">

                          Happy Birthday Ruchi ✨</TextAnimate>


                        <SparklesText className="flex justify-end pt-8" text="FareWell Perry🤍" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}