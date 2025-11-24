"use client";

const Education = () => {
    const education = [
        {
            institution: "Shahjalal University of Science & Technology (SUST)",
            degree: "B.Sc. in Geography and Environment",
            period: "2020 – 2025",
            achievements: [
                "Regional Bio Olympiad 2018 – Second Runner-Up",
            ],
        },
    ];

    return (
        <section id="education" className="py-20 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-white">
                    Academic <span className="text-neon-cyan">Background</span>
                </h2>

                <div className="flex justify-center">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="glass p-8 rounded-xl border-t-4 border-neon-purple hover:border-neon-cyan transition-all duration-300 flex flex-col h-full hover:-translate-y-2 group max-w-md"
                        >
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                                {edu.institution}
                            </h3>
                            <h4 className="text-neon-purple font-mono text-sm mb-4">{edu.degree}</h4>
                            {edu.period && (
                                <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {edu.period}
                                </p>
                            )}

                            {edu.achievements.length > 0 && (
                                <ul className="mt-auto space-y-2">
                                    {edu.achievements.map((achievement, i) => (
                                        <li key={i} className="text-gray-300 text-sm flex items-start">
                                            <span className="text-neon-cyan mr-2">▹</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
