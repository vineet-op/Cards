"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CatAnimation() {
    return (
        <div className="relative h-48 flex justify-center">
            <motion.div
                initial={{ y: 0 }}
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="relative w-screen h-40"
            >
                <Image
                    src="/catop.jpeg"
                    alt="Cute cat illustration"
                    width={900}
                    height={900}
                    className="w-screen h-56"
                />
                <motion.div
                    className="absolute top-[25%] left-[25%] w-2 h-2 bg-pink-400 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />

                <motion.div
                    className="absolute top-[25%] right-[25%] w-2 h-2 bg-pink-400 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />
            </motion.div>
        </div>
    )
}

