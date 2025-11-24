"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "AI Engineer & Full Stack Developer";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
                    <h2 className="text-neon-cyan font-display text-xl md:text-2xl mb-4 tracking-wider">
                        HELLO, I&apos;M
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 text-glow">
                        Abrar Bin <br /> Rofique
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-gray-300 mb-8 h-10 font-mono">
                        {text}
                        <span className="animate-blink">|</span>
                    </h3>
                    <p className="text-gray-400 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Passionate about building intelligent, data-driven systems that bridge AI engineering and backend architecture for real-world impact.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-neon-purple hover:bg-neon-cyan text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]"
                            >
                                Contact Me
                            </a>
                            <a
                                href="/Abrar_Resume_2025.pdf"
                                download="Abrar_Resume_2025.pdf"
                                className="px-8 py-3 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-bold rounded-lg transition-all duration-300 hover:scale-105"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center relative">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0">
                        <div className="absolute inset-0 bg-neon-purple/30 rounded-full blur-3xl animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neon-cyan shadow-[0_0_30px_rgba(0,243,255,0.5)]">
                            <Image
                                src="/profile.jpeg"
                                alt="Abrar Bin Rofique"
                                fill
                                className="object-cover object-[center_20%]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
