import Image from 'next/image';

const experience = [
    {
        period: "2024 - Present",
        role: "Student at Full Sail University",
        company: "Full Sail University",
        description: 
            "Currently pursuing a Bachelor's degree in Game Development, focusing on gameplay systems programming. Engaged in coursework and projects that involve building gameplay mechanics, optimizing performance, and collaborating on game development teams.",
        technolgies: ["C#", "Unity", "C++", "Unreal Engine", "GitHub", "Visual Studio"],
        current: true
    },
    {
        period: "2024 - Present",
        role: "Freelance Game Developer",
        company: "Freelance",
        description:
            "Worked on various game development projects as a freelance developer, focusing on creating engaging gameplay experiences and implementing core game systems.",
        technolgies: ["C#", "Unity", "C++", "Unreal Engine", "GitHub", "Visual Studio"],
        current: true
    },
    {
        period: "2021 - 2024",
        role: "Consruction Worker",
        company: "Construction Company",
        description:
            "Gained valuable experience working in a team environment, managing time effectively, and developing problem-solving skills. This role helped me build a strong work ethic and the ability to adapt to new challenges.",
        technolgies: ["Teamwork", "Time Management", "Problem Solving"],
        current: false
    }
]

export default function Expirience() {
    return(
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Carrer Journey
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Expirience that <span className="font-serif italic font-normal text-white"> shapes my journey.</span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Here's a look at my career journey and the experiences that have shaped my path as a game developer.
                    </p>
                </div>

                {/* Experience Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                
                    {/* Experience Cards */}
                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div key={index} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" 
                                style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                                
                                {/* Timeline Point */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                                </div>

                                {/* Experience Card */}
                                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : " md:col-start-2 md:pl-16"}`}>
                                    <div className={`bg-primary/3 p-6 rounded-2xl border border-primary/30 hover:border-primary/80 transition-all duration-500 `}>
                                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.description}</p>
                                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                            {exp.technolgies.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-primary/20 text-xs rounded-full text-muted-foreground">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}