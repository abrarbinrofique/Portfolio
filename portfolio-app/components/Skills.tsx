"use client";

import Image from "next/image";

const Skills = () => {
    const categories = [
        {
            title: "AI & Data Engineering",
            skills: [
                { name: "Python", icon: "/icons/python.svg" },
                { name: "LangChain", icon: "/icons/langchain.svg" },
                { name: "RAG Systems", icon: "/icons/rag-new.png" },
                { name: "Vector DBs", icon: "/icons/vector-db.png" },
                { name: "Apache Airflow", icon: "/icons/airflow.svg" },
                { name: "ETL Pipelines", icon: "/icons/etl-new.png" },
                { name: "REST API", icon: "/icons/api.svg" },
                { name: "OpenAPI", icon: "/icons/openapi.svg" },
            ],
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Django", icon: "/icons/django.svg" },
                { name: "FastAPI", icon: "/icons/fastapi.svg" }, // Placeholder
                { name: "Express.js", icon: "/icons/express.svg" }, // Placeholder
                { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
                { name: "MySQL", icon: "/icons/my.svg" }, // Placeholder
                { name: "MongoDB", icon: "/icons/mongodb.svg" },
                { name: "Docker", icon: "/icons/docker.svg" },
                { name: "AWS", icon: "/icons/aws.svg" },
                { name: "Google Cloud", icon: "/icons/gcp.svg" },
                { name: "C++", icon: "/icons/cpp.svg" }, // Placeholder
            ],
        },
        {
            title: "Frontend Development",
            skills: [
                { name: "React", icon: "/icons/react-new.svg" },
                { name: "Next.js", icon: "/icons/nextjs.svg" },
                { name: "JavaScript", icon: "/icons/js.svg" },
                { name: "HTML", icon: "/icons/html.svg" }, // Placeholder if needed
                { name: "CSS", icon: "/icons/css.svg" }, // Placeholder if needed
            ],
        },
        {
            title: "Tools & Collaboration",
            skills: [
                { name: "Linux", icon: "/icons/linux.svg" },
                { name: "Git", icon: "/icons/git.svg" },
                { name: "Docker", icon: "/icons/docker.svg" },
                { name: "Jira", icon: "/icons/jira.svg" },
                { name: "ClickUp", icon: "/icons/clickup.svg" },
                { name: "Slack", icon: "/icons/slack.svg" },
                { name: "Teams", icon: "/icons/teams.svg" },
                { name: "Vercel", icon: "/icons/vercel.svg" },
            ],
        },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-white">
                    <span className="text-neon-purple">Technical</span> Arsenal
                </h2>

                <div className="space-y-16">
                    {categories.map((category, index) => (
                        <div key={index}>
                            <h3 className="text-2xl font-display font-bold text-neon-cyan mb-8 border-l-4 border-neon-purple pl-4">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group relative p-4 skill-box rounded-xl flex flex-col items-center justify-center gap-3 hover:border-neon-cyan transition-all duration-300 hover:-translate-y-1 bloom-effect"
                                        style={{ animationDelay: `${Math.random() * 0.5}s` }}
                                    >
                                        <div className="absolute inset-0 bg-neon-cyan/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative w-12 h-12">
                                            <Image
                                                src={skill.icon}
                                                alt={skill.name}
                                                fill
                                                className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                                                onError={(e) => {
                                                    // Fallback if image fails - generic code icon
                                                    e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTE2IDE4bDYtNi02LTZNMCA5aDRNMCAxNWg0Ii8+PC9zdmc+";
                                                }}
                                            />
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium group-hover:text-neon-cyan transition-colors duration-300 text-center">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
