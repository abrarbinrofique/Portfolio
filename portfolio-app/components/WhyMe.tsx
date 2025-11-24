"use client";

const WhyMe = () => {
    const features = [
        {
            title: "100+ Integrations",
            description: "Extensive experience integrating with over 100 platforms including Microsoft, Jira, AWS, GCS, and ServiceNow. Expert in API automation, OAuth2, JWT authentication methods, and automated QA testing to ensure seamless integration reliability.",
            icon: (
                <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: "Debugging Mastery",
            description: "I don't just write code; I ensure it works. My deep understanding of system architecture allows me to pinpoint and resolve complex bugs efficiently, minimizing downtime.",
            icon: (
                <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
        },
        {
            title: "Clean Code Architecture",
            description: "I write maintainable, scalable, and self-documenting code. I believe that good code should be easy to read and easy to extend, reducing technical debt for the future.",
            icon: (
                <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="why-me" className="py-20 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-white">
                    Why <span className="text-neon-purple">Me?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass p-8 rounded-xl border border-glass-border hover:border-neon-cyan transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="mb-6 p-4 bg-glass-bg rounded-full w-fit group-hover:bg-neon-cyan/10 transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyMe;
