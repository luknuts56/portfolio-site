import Image from 'next/image';
import { Code2, Users, Lightbulb, Rocket, Heading2 } from 'lucide-react';

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing clean, maintainable code that is easy to read and understand."
    },

    {
        icon: Users,
        title: "Collaboration",
        description: "I enjoy working in teams and collaborating with other developers, artists, and designers."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "I strive to bring creative and innovative solutions to problems, always looking for ways to improve and optimize."
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "I focus on creating high-performance applications that provide a smooth and responsive user experience."
    }
]

export default function About() {
    return(
        <section id="about" className="relative py-32 overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me:
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white"> one line of code at a time.</span>
                        </h2>

                        <div className="space-y-6 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I’m a student focused on gameplay systems programming, with a strong interest in building systems that make games feel fun, responsive, and engaging.
                                Most of my work so far has been centered around learning how gameplay mechanics come together and how small details can have a big impact on the player’s experience.
                            </p>
                            <p>
                                I mainly work in C# with Unity, where I’ve been building and experimenting with different gameplay features. I’ve also been getting into C++ with Unreal Engine,
                                which has been a great way to learn more about how things work under the hood and how bigger systems are put together.
                            </p>
                            <p>
                                Whether it's developing a new feature, optimizing performance, or solving complex problems, I am having a blast every step of the way!
                                What I enjoy most is learning how to use development patterns to create systems that are reusable. I like focusing on systems that streamline the process of making games,
                                and I’m always trying to improve and learn more as I keep building new things.
                            </p>
                        </div>

                        {/* Mission Statement */}
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground text-center">
                                My mission is to build immersive virtual worlds that people value ─ 
                                be it players getting lost in the experience or fellow devs learning and finding inspiration in the work. 
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="glass-strong p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}