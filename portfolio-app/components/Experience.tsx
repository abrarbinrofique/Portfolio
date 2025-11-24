"use client";

const Experience = () => {
    const experiences = [
        {
            company: "FlowGenx AI",
            role: "Graduate AI Engineer",
            period: "Jan 2025 – Present",
            location: "San Francisco, USA (Remote)",
            description: [
                "Engineered native and external connectors for over 100+ platforms (Jira, AWS, GCS, ServiceNow, etc.) with full automation.",
                "Implemented OAuth2-based authentication and token security workflows across multiple connectors.",
                "Developed and maintained vector-based retrieval systems (VectorVerse) for RAG pipelines.",
                "Built internal API routing components to automate workflow orchestration.",
            ],
        },
        {
            company: "Arbor AI Studio",
            role: "Full Stack Developer",
            period: "Oct 2024 – Dec 2024",
            location: "Canada (Remote)",
            description: [
                "Contributed to an ATS (Applicant Tracking System) AI project using Express.js, React, and Tailwind CSS.",
                "Integrated Google Cloud APIs for data enrichment and automation.",
                "Managed version control and team collaboration using Git/GitHub.",
            ],
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
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content */}
                            <div className="w-full md:w-1/2">
                                <div className="glass p-8 rounded-xl border-l-4 border-neon-purple hover:border-neon-cyan transition-colors duration-300 relative group">
                                    <div className="absolute -left-[42px] top-1/2 -translate-y-1/2 w-5 h-5 bg-neon-purple rounded-full border-4 border-black hidden md:block group-hover:bg-neon-cyan transition-colors duration-300 z-10"></div>

                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors duration-300">
                                        {exp.role}
                                    </h3>
                                    <h4 className="text-neon-purple font-display mb-2">{exp.company}</h4>
                                    <p className="text-sm text-gray-400 mb-4 font-mono">
                                        {exp.period} | {exp.location}
                                    </p>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-300 text-sm flex items-start">
                                                <span className="text-neon-cyan mr-2">▹</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
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
