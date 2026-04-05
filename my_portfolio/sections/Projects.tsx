import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        title: "Raccoon's Mischief",
        description: "A game where you play as a raccoon and cause mischief. Try for the best score and don't get caught!",
        image: "/RM_menu.png",
        tags: ["Unity", "C#"],
        link: "https://smolwulf.itch.io/raccoons-mischief",
        github: "#"
    },
    {
        title: "Skid Loader - Virtual Showroom",
        description: "A virtual showroom for a skid loader, built in Unity.",
        image: "/VS_skid-loader.png",
        tags: ["Unity", "C#"],
        link: "#",
        github: "https://github.com/luknuts56/Virtual-ShowRoom"
    },
]

export default function Projects() {
    return(
        <section id="projects" className="relative py-32 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">

            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featuerd Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projects that
                    <span className="font-serif italic font-normal text-white"> I've worked on:</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Here are a few projects I've worked on, showcasing my skills and passion for game development. 
                    From gameplay prototypes to interactive experiences.
                </p>
            </div>
            
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                     style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                        {/* Project Image*/}
                        <div className="relative overflow-hidden aspect-video">
                            <Image src={project.image} alt={project.title} width={400} height={400} className="w-full h-full rounded-lg object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                            {/* Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link href={project.link} target="_blank" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-main-theme transition-all">
                                    <ArrowUpRight />
                                </Link>
                                <Link href={project.github} target="_blank" className="p-3 rounded-full glass hover:bg-primary/10 hover:text-main-theme transition-all">
                                    <Image src={"/giticon.png"} alt={"github"} width={20} height={20} className="hover:opacity-80 transition-opacity" />
                                </Link>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="px-4 py-1.5 rounded-full bg-primary/10 text-xl font-medium border border-border/90 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton>
                    View All Projects
                    <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>
            </div>
            </div>
        </section>
    )
}