"use client";

const Experience = () => {
    const experiences = [
        {
            company: "FlowGenx AI",
            location: "San Francisco, USA (Remote)",
            url: "https://flowgenx.ai",
            roles: [
                {
                    title: "Software Engineer - Gen AI",
                    period: "Jan 2026 – Present",
                    description: [
                        "Leading the Generative AI division, architecting scalable AI agents and large language model (LLM) workflows.",
                        "Working with automation mainly to streamline workflows and enhance system efficiency.",
                        "Spearheading the development of autonomous agentic systems for enterprise automation.",
                    ]
                },
                {
                    title: "Graduate AI Engineer",
                    period: "Jan 2025 – Dec 2025",
                    description: [
                        "Engineered native and external connectors for over 100+ platforms (Jira, AWS, GCS, ServiceNow, etc.) with full automation.",
                        "Implemented OAuth2-based authentication and token security workflows across multiple connectors.",
                        "Developed and maintained vector-based retrieval systems (VectorVerse) for RAG pipelines.",
                        "Built internal API routing components to automate workflow orchestration.",
                    ]
                }
            ]
        },
        {
            company: "Arbor AI Studio",
            location: "Canada (Remote)",
            roles: [
                {
                    title: "Full Stack Developer",
                    period: "Oct 2024 – Dec 2024",
                    description: [
                        "Contributed to an ATS (Applicant Tracking System) AI project using Express.js, React, and Tailwind CSS.",
                        "Integrated Google Cloud APIs for data enrichment and automation.",
                        "Managed version control and team collaboration using Git/GitHub.",
                    ]
                }
            ]
        },
    ];

    return (
        <section id="experience" className="py-20 relative bg-black/40">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-white">
                    Work <span className="text-neon-cyan">Experience</span>
                </h2>

                <div className="max-w-4xl mx-auto space-y-12 relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-glass-border hidden md:block"></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Content */}
                            <div className="w-full md:w-1/2">
                                <div className="glass p-8 rounded-xl border-l-4 border-neon-purple hover:border-neon-cyan transition-colors duration-300 relative group">
                                    <div className="absolute -left-[42px] top-8 w-5 h-5 bg-neon-purple rounded-full border-4 border-black hidden md:block group-hover:bg-neon-cyan transition-colors duration-300 z-10"></div>

                                    <h4 className="text-2xl font-display font-bold text-neon-purple mb-2">
                                        {/* @ts-ignore */}
                                        {exp.url ? (
                                            <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                {exp.company}
                                            </a>
                                        ) : (
                                            exp.company
                                        )}
                                    </h4>
                                    <p className="text-sm text-gray-400 mb-6 font-mono">
                                        {exp.location}
                                    </p>

                                    <div className="space-y-8">
                                        {/* @ts-ignore */}
                                        {exp.roles.map((role, rIndex) => (
                                            <div key={rIndex} className="relative pl-4 border-l-2 border-white/10">
                                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors duration-300">
                                                    {role.title}
                                                </h3>
                                                <p className="text-sm text-accent mb-3 font-mono">
                                                    {role.period}
                                                </p>
                                                <ul className="space-y-2">
                                                    {role.description.map((item: string, i: number) => (
                                                        <li key={i} className="text-gray-300 text-sm flex items-start">
                                                            <span className="text-neon-cyan mr-2">▹</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Empty side for timeline balance */}
                            <div className="w-full md:w-1/2 hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
