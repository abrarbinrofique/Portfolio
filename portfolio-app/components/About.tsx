"use client";

import { motion } from "framer-motion";
import { Network, Bug, Code2, Target } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Beyond the <span className="italic text-accent">Console</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Philosophy Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                            <Target size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">My Philosophy</h3>
                        <blockquote className="text-gray-300 italic border-l-2 border-accent pl-4">
                            &quot;Code is not just about function; it&apos;s about crafting experiences that resonate with users and solve real-world problems efficiently.&quot;
                        </blockquote>
                    </motion.div>

                    {/* 100+ Integrations Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                            <Network size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">100+ Integrations</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Extensive experience integrating with over 100 platforms including Microsoft, Jira, AWS, GCS, and ServiceNow. Expert in API automation, OAuth2, JWT authentication methods, and automated QA testing to ensure seamless integration reliability.
                        </p>
                    </motion.div>

                    {/* Debugging Mastery Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 transition-transform">
                            <Bug size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Debugging Mastery</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            I don&apos;t just write code; I ensure it works. My deep understanding of system architecture allows me to pinpoint and resolve complex bugs efficiently, minimizing downtime.
                        </p>
                    </motion.div>

                    {/* Clean Code Architecture Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                            <Code2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Clean Code Architecture</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            I write maintainable, scalable, and self-documenting code. I believe that good code should be easy to read and easy to extend, reducing technical debt for the future.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
