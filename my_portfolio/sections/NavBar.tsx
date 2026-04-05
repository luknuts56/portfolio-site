'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    {href: "#about", label: "About"}, 
    {href: "#projects", label: "Projects"}, 
    {href: "#experience", label: "Experience"},
];

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold font-serif tracking-tight hover:text-primary">
                    Luke<span className="text-primary animate-pulse"> • </span>Knutson<span className="text-primary">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-10">
                        {navLinks.map((link, index) => (
                            <Link key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary rounded-full">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm" className="cursor-pointer" >
                        <Link href="#contact">Contact Me</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-foreground cursor-pointer"
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <Link key={index} href={link.href} className="text-lg text-muted-foreground hover:text-foreground py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button onClick={() => setIsMobileMenuOpen(false)} size="sm" className="cursor-pointer">
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}