"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const Projects = () => {
    const projects = [
        {
            title: "Homper - Home Service System",
            description: "A convenient online platform offering reliable home, office, and outlawn services to simplify your needs.",
            tech: ["Django", "React", "HTML", "CSS", "JS"],
            color: "bg-card-blue",
            image: "/hScreenshot_২০২৪১১০৪_১৩৫৮১১.png",
            live: "https://abrarbinrofique.github.io/Homper-frontend/",
            github: "https://github.com/abrarbinrofique/Homeper-backend",
        },
        {
            title: "NoMad - Travel Sharing Platform",
            description: "A travel sharing site for finding travel partners and sharing memories.",
            tech: ["Django", "React", "HTML", "CSS", "JS"],
            color: "bg-card-green",
            image: "/nScreenshot_২০২৪১১০৪_১৪০০১২.png",
            live: "https://abrarbinrofique.github.io/NorMad-Frontend/",
            github: "https://github.com/abrarbinrofique/NorMad-Bakend",
        },
        {
            title: "MailScraper - Email Marketing System",
            description: "A website email scraper system for email marketing purposes. Search for a website address and scrape all emails.",
            tech: ["Django", "React", "CSS"],
            color: "bg-card-blue",
            image: "/mails.png",
            live: "#",
            github: "https://github.com/abrarbinrofique/Email-scrapper-",
        },
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Featured <span className="text-accent">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`${project.color} rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group`}
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-200 mb-4 text-sm line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-white font-medium backdrop-blur-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4">
                                    {project.live !== "#" && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-2 bg-white text-primary-dark font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-accent transition-colors text-sm"
                                        >
                                            Live Demo <ExternalLink size={16} />
                                        </a>
                                    )}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2 border border-white/20 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-sm"
                                    >
                                        Code <Github size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
