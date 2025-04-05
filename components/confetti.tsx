"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Particle = {
    id: number
    x: number
    y: number
    size: number
    color: string
    rotation: number
}

export default function Confetti() {
    const [particles, setParticles] = useState<Particle[]>([])

    useEffect(() => {
        const colors = [
            "#FFD6E0", // light pink
            "#FFACC7", // pink
            "#D8B4E2", // lavender
            "#F2E2BA", // beige
            "#FFF9C9", // light yellow
        ]

        const newParticles: Particle[] = []

        for (let i = 0; i < 50; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: -20 - Math.random() * 100,
                size: 5 + Math.random() * 10,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
            })
        }

        setParticles(newParticles)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-md"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: particle.color,
                        rotate: `${particle.rotation}deg`,
                    }}
                    animate={{
                        y: ["0%", "120%"],
                        x: [`${particle.x}%`, `${particle.x + (Math.random() * 20 - 10)}%`],
                        rotate: [`${particle.rotation}deg`, `${particle.rotation + 360}deg`],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: Math.random() * 5,
                    }}
                />
            ))}
        </div>
    )
}

