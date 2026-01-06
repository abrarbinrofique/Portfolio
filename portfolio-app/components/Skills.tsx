"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Database, ChevronLeft, ChevronRight } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "AI & Data Engineering",
            icon: <Database size={32} />,
            skills: [
                { name: "Python", icon: "/icons/python.svg" },
                { name: "LangChain", icon: "/icons/langchain.svg" },
                { name: "RAG Systems", icon: "/icons/rag-new.png" },
                { name: "Vector DBs", icon: "/Vector_db.png" },
                { name: "Apache Airflow", icon: "/icons/airflow.svg" },
                { name: "ETL Pipelines", icon: "/etl_pipeline.png" },
                { name: "REST API", icon: "/icons/api.svg" },
                { name: "OpenAPI", icon: "/icons/openapi.svg" },
            ],
            borderColor: "from-[#d4a574] to-[#5ec4c4]",
        },
        {
            title: "Backend Development",
            icon: <Database size={32} />,
            skills: [
                { name: "Django", icon: "/icons/django.svg" },
                { name: "FastAPI", icon: "/icons/fastapi.svg" },
                { name: "Express.js", icon: "/icons/express.svg" },
                { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
                { name: "MySQL", icon: "/icons/my.svg" },
                { name: "MongoDB", icon: "/icons/mongodb.svg" },
                { name: "Docker", icon: "/icons/docker.svg" },
                { name: "AWS", icon: "/icons/aws.svg" },
                { name: "Google Cloud", icon: "/icons/gcp.svg" },
                { name: "C++", icon: "/icons/cpp.svg" },
            ],
            borderColor: "from-[#5ec4c4] to-[#d4a574]",
        },
        {
            title: "Frontend Development",
            icon: <Database size={32} />,
            skills: [
                { name: "React", icon: "/icons/react-new.svg" },
                { name: "Next.js", icon: "/icons/nextjs.svg" },
                { name: "JavaScript", icon: "/icons/js.svg" },
                { name: "HTML", icon: "/icons/html.svg" },
                { name: "CSS", icon: "/icons/css.svg" },
            ],
            borderColor: "from-[#d4a574] to-[#5ec4c4]",
        },
        {
            title: "Tools & Collaboration",
            icon: <Database size={32} />,
            skills: [
                { name: "Linux", icon: "/icons/linux.svg" },
                { name: "Git", icon: "/icons/git.svg" },
                { name: "GitHub", icon: "/hub.svg" },
                { name: "Jira", icon: "/icons/jira.svg" },
                { name: "ClickUp", icon: "/icons/clickup.svg" },
                { name: "Slack", icon: "/icons/slack.svg" },
                { name: "Teams", icon: "/icons/teams.svg" },
                { name: "Vercel", icon: "/icons/vercel.svg" },
            ],
            borderColor: "from-[#5ec4c4] to-[#d4a574]",
        },
        {
            title: "Cloud & DevOps",
            icon: <Database size={32} />,
            skills: [
                { name: "AWS", icon: "/icons/aws.svg" },
                { name: "Google Cloud", icon: "/icons/gcp.svg" },
                { name: "Docker", icon: "/icons/docker.svg" },
            ],
            borderColor: "from-[#d4a574] to-[#5ec4c4]",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState<number | null>(null);

    // Auto-rotate fan
    useEffect(() => {
        if (isHovered !== null) return;

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % skillCategories.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [skillCategories.length, isHovered]);

    const handleCardClick = (index: number) => {
        setActiveIndex(index);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev + 1) % skillCategories.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    };

    const getFanStyle = (index: number) => {
        let diff = index - activeIndex;

        if (diff > skillCategories.length / 2) diff -= skillCategories.length;
        if (diff < -skillCategories.length / 2) diff += skillCategories.length;

        const rotationStep = 18;
        const yOffsetStep = 20;

        const rotate = diff * rotationStep;
        const y = Math.abs(diff) * yOffsetStep;
        const zIndex = 10 - Math.abs(diff);
        const scale = 1 - Math.abs(diff) * 0.03;
        const opacity = 1 - Math.abs(diff) * 0.08;

        return { rotate, y, zIndex, scale, opacity: Math.max(opacity, 0.4) };
    };

    return (
        <section id="skills" className="py-20 relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Database className="text-accent" size={36} />
                        <h2 className="text-4xl md:text-5xl font-bold font-display">
                            TECHNICAL <span className="text-accent">ARSENAL</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-lg font-light tracking-wide">
                        Mastered Technologies & Engineering Scalable Database Architectures
                    </p>
                </motion.div>

                {/* Fan Container - Centered */}
                <div className="relative w-full h-[700px] flex justify-center items-center">

                    {/* Navigation Controls */}
                    <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 md:px-20 z-20 pointer-events-none">
                        <button
                            onClick={handlePrev}
                            className="pointer-events-auto p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-accent hover:text-primary-dark transition-all duration-300 shadow-lg"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="pointer-events-auto p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-accent hover:text-primary-dark transition-all duration-300 shadow-lg"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>

                    {/* Fan Cards */}
                    {skillCategories.map((category, index) => {
                        const fanStyle = getFanStyle(index);
                        const isActive = index === activeIndex;

                        return (
                            <motion.div
                                key={index}
                                onClick={() => handleCardClick(index)}
                                onMouseEnter={() => setIsHovered(index)}
                                onMouseLeave={() => setIsHovered(null)}
                                animate={{
                                    y: fanStyle.y,
                                    rotate: fanStyle.rotate,
                                    scale: isHovered === index ? fanStyle.scale * 1.05 : fanStyle.scale,
                                    zIndex: fanStyle.zIndex,
                                    opacity: fanStyle.opacity,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut"
                                }}
                                className={`absolute w-[420px] h-[560px] rounded-[20px] p-[3px] bg-gradient-to-br ${category.borderColor} cursor-pointer shadow-[0_10px_40px_rgba(212,165,116,0.5)] hover:shadow-[0_0_50px_rgba(94,196,196,0.7)] transition-shadow duration-300`}
                                style={{
                                    transformOrigin: "center bottom",
                                }}
                            >
                                <div className="w-full h-full rounded-[17px] bg-[#1a1625]/90 backdrop-blur-md p-8 flex flex-col relative overflow-hidden">

                                    {/* Glow effect for active card */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-[17px] pointer-events-none" />
                                    )}

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-white/10 rounded-lg text-accent">
                                                {category.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white leading-tight">
                                                {category.title}
                                            </h3>
                                        </div>

                                        <div className="grid grid-cols-2 gap-5 flex-grow content-start">
                                            {category.skills.map((skill, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-black/40 rounded-md flex items-center justify-center p-2 border border-white/5">
                                                        {skill.icon ? (
                                                            <Image
                                                                src={skill.icon}
                                                                alt={skill.name}
                                                                width={24}
                                                                height={24}
                                                                className="object-contain w-full h-full"
                                                            />
                                                        ) : (
                                                            <CheckCircle2 className="text-gray-400" size={18} />
                                                        )}
                                                    </div>
                                                    <span className="text-sm text-gray-300 font-medium">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Footer */}
                                        <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                                            <span className="text-sm text-accent font-mono">
                                                {category.skills.length} Technologies
                                            </span>
                                            {isActive && (
                                                <motion.div
                                                    animate={{ scale: [1, 1.1, 1] }}
                                                    transition={{ repeat: Infinity, duration: 2 }}
                                                    className="text-accent text-sm font-semibold"
                                                >
                                                    ● Active
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
