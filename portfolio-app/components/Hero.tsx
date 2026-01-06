"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    const techStack = [
        { name: "Python", icon: "/icons/python.svg", isImage: true },
        { name: "TensorFlow", icon: "🧠", isImage: false },
        { name: "PyTorch", icon: "🔥", isImage: false },
        { name: "LangChain", icon: "/icons/langchain.svg", isImage: true },
        { name: "RAG", icon: "/icons/rag-new.png", isImage: true },
        { name: "Next.js", icon: "/icons/nextjs.svg", isImage: true },
    ];

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-accent font-medium tracking-widest mb-4">HELLO, I&apos;M</h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                        Abrar Bin <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                            Rofique
                        </span>
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
                        Software Engineer <span className="text-secondary">- Gen AI</span>
                    </h3>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-12">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-full hover:shadow-[0_0_20px_rgba(212,165,116,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            View Projects <ArrowRight size={20} />
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-8 py-3 border border-accent text-accent font-medium rounded-full hover:bg-accent/10 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Download CV <Download size={20} />
                        </a>
                    </div>

                    {/* Tech Stack Grid */}
                    <div className="mt-8">
                        <p className="text-sm text-gray-400 mb-4 tracking-wider">TECH STACK</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center text-2xl hover:border-accent/50 hover:bg-white/10 transition-all duration-300 cursor-help p-2"
                                    title={tech.name}
                                >
                                    {tech.isImage ? (
                                        <Image
                                            src={tech.icon}
                                            alt={tech.name}
                                            width={32}
                                            height={32}
                                            className="object-contain w-full h-full"
                                        />
                                    ) : (
                                        <span>{tech.icon}</span>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
                            <Image
                                src="/Media(1).jpeg"
                                alt="Abrar Bin Rofique"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -bottom-4 -right-4 bg-card-blue p-4 rounded-xl border border-white/10 shadow-xl backdrop-blur-md"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-white">Open to Work</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
