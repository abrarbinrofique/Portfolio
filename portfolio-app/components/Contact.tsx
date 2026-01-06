"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Facebook, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Get In <span className="text-accent">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-white">Let&apos;s Talk</h3>
                        <p className="text-gray-300 text-lg">
                            I am open to help with AI integration and automation.
                            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-primary/50 rounded-full flex items-center justify-center text-accent border border-white/10">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="font-medium">researchabrarrofique@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-primary/50 rounded-full flex items-center justify-center text-accent border border-white/10">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="font-medium">+8801928051705</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-primary/50 rounded-full flex items-center justify-center text-accent border border-white/10">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="font-medium">Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <p className="text-sm text-gray-400 mb-4">FOLLOW ME</p>
                            <div className="flex gap-4">
                                <a href="https://github.com/abrarbinrofique" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary-dark transition-all duration-300">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/abrarbinrofique/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary-dark transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary-dark transition-all duration-300">
                                    <Facebook size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-lg hover:shadow-[0_0_20px_rgba(212,165,116,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
