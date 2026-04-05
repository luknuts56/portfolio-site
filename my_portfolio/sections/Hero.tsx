import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import {
    ArrowRight,
    Download,
    ChevronDown,
} from 'lucide-react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

const skills = [
    "Unity",
    "Unreal Engine",     
    "C#",
    "C++",
    "GitHub",
];

export default function Hero() {
    return(
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/green-bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60 bg-green-500"
                        style={{
                            backgroundColor: "#20b2a6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${20 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Game Developer • Gameplay Systems Programmer
                        </span>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Crafting <span className="text-primary glow-text">immersive</span> and 
                            <span className="text-primary glow-text"> engaging</span><br /> 
                            <span className="font-serif italic font-normal text-white">gameplay experiences </span> 
                            through <span className="font-serif italic font-normal text-primary">code</span>.
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            I’m a gameplay systems programmer who enjoys building engaging, responsive player experiences. I primarily work in C# with Unity and have experience with C++ in Unreal Engine.
                             I love bringing virtual worlds to life through code and am passionate about playing a part in the creation of experiences that connect with players.
                        </p>
                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg" >
                                Contact Me <ArrowRight className="w-5 h-5 cursor-pointer" />
                            </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5 cursor-pointer" />
                                Download CV 
                            </AnimatedBorderButton>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Connect with me:</span>
                            <div className="flex gap-4">
                                {[ 
                                    { icon: '/giticon.png', alt: 'GitHub', href: 'https://github.com/luknuts56' },
                                    { icon: '/linkedin.png', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/luke-knutson-89a577268/' },
                                    { icon: '/discord.png', alt: 'Discord', href: 'https://discord.com/users/789456123' },
                                ].map((social, idx) => (
                                    <Link key={idx} href={social.href} target="_blank" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-main-theme transition-all duration-300">
                                        <Image src={social.icon} alt={social.alt} width={19} height={19} className="hover:opacity-80 transition-opacity" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column - Image Content */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-transparent to-primary/30 
                                        blur-2xl animate-pulse"/>
                        <div className="relative glass-strong rounded-3xl p-2 glow-border">
                            <Image src="/profile.png" alt="Luke Knutson" width={400} height={400} className="w-full aspect-[4/5] object-cover rounded-2xl" />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">Avaiable for work</span>
                                </div>
                            </div>

                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">Student</div>
                                <div className="text-sm text-foreground/40">Fullsail University</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* Skills List */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with:</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4 text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    <span>{skill}</span>
                                </div>  
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <Link href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                  <span className="text-xs uppercase tracking-wider">Scroll</span>
                  <ChevronDown className="w-6 h-6 animate-bounce" />
                </Link>
            </div>
        </section>
    )
}