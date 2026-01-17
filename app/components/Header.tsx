"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    // 🔒 Lock / unlock body scroll
    useEffect(() => {
        const html = document.documentElement;

        if (menuOpen) {
        html.classList.add("overflow-hidden");
        } else {
        html.classList.remove("overflow-hidden");
        }

        // Cleanup on unmount
        return () => {
        html.classList.remove("overflow-hidden");
        };
    }, [menuOpen]);

    // Base + per-route active layout styles
    const getNavLinkClass = (path: string) => {
        const base = "inline-flex items-center justify-center text-base leading-relaxed py-2 px-6 rounded-full transition-all duration-300";

        const isActive = pathname === path;

        // Active: Nancy
        if (isActive && path === "/nancy") {
            return `${base} font-semibold text-purple bg-purple/10`;
        }

        // Active: Pete
        if (isActive && path === "/pete") {
            return `${base} font-semibold text-orange bg-orange/10`;
        }

        // Hover: Nancy
        if (!isActive && path === "/nancy") {
            return `${base} text-champ-blue hover:text-purple hover:bg-purple/10`;
        }

        // Hover: Pete
        if (!isActive && path === "/pete") {
            return `${base} text-champ-blue hover:text-orange hover:bg-orange/10`;
        }

        // Inactive (hover applies only here)
        return `${base} text-champ-blue`;
    };

    return (
        <div className="block py-6 absolute left-0 right-0 top-0 z-9">
            <div className="container">
                <div className="flex flex-wrap items-center gap-4 justify-between">
                    {/* Logo */}
                    <div className="flex-none relative z-9">
                        <Link href="/" className="bg-white">
                            <Image src="/images/logo.svg" alt="logo" width={120} height={40} className="max-w-full w-18 md:w-25 xl:w-auto" priority/>
                        </Link>
                    </div>

                    {/* Burger Button (Mobile) */}
                    <button className="lg:hidden flex flex-col gap-1.5 ml-auto relative z-9" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                        <span className={`h-0.5 w-6 bg-champ-blue transition ${ menuOpen && "rotate-45 translate-y-2" }`}/>
                        <span className={`h-0.5 w-6 bg-champ-blue transition ${ menuOpen && "opacity-0" }`} />
                        <span className={`h-0.5 w-6 bg-champ-blue transition ${ menuOpen && "-rotate-45 -translate-y-2" }`} />
                    </button>

                    <div className="flex-none lg:flex-1">
                        {/* navigation-with-signin */}
                        <div className={`transition-all duration-300 ${menuOpen ? "right-0 before:fixed before:content-[''] before:top-0 before:left-0 before:right-0 before:w-full before:h-19 md:before:h-21 before:bg-white" : "-right-full"} fixed -right-full top-0 bottom-0 w-full lg:w-auto h-full lg:h-auto lg:relative lg:right-0 block lg:flex lg:flex-wrap lg:gap-4 bg-white lg:bg-transparent pt-22 md:pt-30 pb-8 px-4 lg:p-0 overflow-auto`}>
                            {/* Navigation */}
                            <div className="flex-none lg:flex-1">
                                <nav className="flex lg:justify-center items-center bg-white lg:bg-transparent">
                                    <ul className="flex lg:inline-flex flex-col lg:flex-row flex-wrap lg:items-center justify-center lg:p-1 w-full lg:w-auto lg:border border-titan-white rounded-4xl bg-white">
                                        <li className="border-b border-titan-white lg:border-0 last:border-0"><Link href="/nancy" className={getNavLinkClass("/nancy")}>Negotiator Nancy</Link></li>
                                        <li className="border-b border-titan-white lg:border-0 last:border-0"><Link href="/pete" className={getNavLinkClass("/pete")}>Property Manager Pete</Link></li>
                                    </ul>
                                </nav>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-wrap flex-col-reverse xs:flex-row items-center gap-4 mt-8 lg:mt-0">
                                <Link href="/sign-in" className='text-base leading-relaxed transition hover:text-purple'>Sign In</Link>
                                <Link href="#" className="btn btn-orange">Book a Demo</Link>
                            </div>
                        </div>
                        {/* navigation-with-signin */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
