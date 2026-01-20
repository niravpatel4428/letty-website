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

    /* ✅ Close menu on route change */
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Base + per-route active layout styles
    const getNavLinkClass = (path: string) => {
        const base = "inline-flex items-center justify-center text-base leading-relaxed lg:py-2 lg:px-6 rounded-full transition-all duration-300";

        const isActive = pathname === path;

        // Active: Nancy
        if (isActive && path === "/nancy") {
            return `${base} font-semibold text-purple lg:bg-purple/10`;
        }

        // Active: Pete
        if (isActive && path === "/pete") {
            return `${base} font-semibold text-orange lg:bg-orange/10`;
        }

        // Hover: Nancy
        if (!isActive && path === "/nancy") {
            return `${base} text-champ-blue hover:text-purple lg:hover:bg-purple/10`;
        }

        // Hover: Pete
        if (!isActive && path === "/pete") {
            return `${base} text-champ-blue hover:text-orange lg:hover:bg-orange/10`;
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
                        <Link href="/" className="bg-white" onClick={() => setMenuOpen(false)}>
                            <Image src="/images/logo.svg" alt="logo" width={120} height={40} className="max-w-full w-18 md:w-25 xl:w-auto" priority/>
                        </Link>
                    </div>

                    {/* Burger Button (Mobile) */}
                    <button className="lg:hidden cursor-pointer flex flex-col gap-1.5 ml-auto relative z-9" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu" aria-expanded={menuOpen}>
                        <span className={`h-0.5 w-6 bg-champ-blue transition ${ menuOpen ? "rotate-45 translate-y-2" : "" }`} />
                        <span className={`h-0.5 w-6 bg-champ-blue transition ${ menuOpen ? "opacity-0" : "" }`} />
                        <span className={`h-0.5 w-6 bg-champ-blue transition ${ menuOpen ? "-rotate-45 -translate-y-2" : "" }`} />
                    </button>

                    <div className="flex-none lg:flex-1">
                        {/* navigation-with-signin */}
                        <div className={`fixed top-0 bottom-0 w-full h-full bg-white transition-all duration-300 overflow-auto ${menuOpen ? "right-0" : "-right-full"} lg:static lg:right-0 lg:h-auto lg:bg-transparent lg:flex lg:items-center lg:justify-between pt-22 md:pt-30 pb-8 px-4 lg:p-0`}>
                            {/* Navigation */}
                            <div className="flex-none lg:flex-1">
                                <nav className="flex lg:justify-center items-center bg-white lg:bg-transparent">
                                    <ul className="flex lg:inline-flex flex-col lg:flex-row flex-wrap lg:items-center justify-center lg:p-1 w-full lg:w-auto lg:border border-titan-white rounded-4xl bg-white">
                                        <li className="py-3 lg:py-0 border-b border-titan-white lg:border-0 last:border-0"><Link href="/nancy" className={getNavLinkClass("/nancy")} onClick={() => setMenuOpen(false)}>Negotiator Nancy</Link></li>
                                        <li className="py-3 lg:py-0 border-b border-titan-white lg:border-0 last:border-0"><Link href="/pete" className={getNavLinkClass("/pete")} onClick={() => setMenuOpen(false)}>Property Manager Pete</Link></li>
                                    </ul>
                                </nav>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-wrap flex-col-reverse xs:flex-row items-center gap-4 mt-8 lg:mt-0">
                                <Link href="/sign-in" className='text-base leading-relaxed transition hover:text-purple'>Sign In</Link>
                                <Link href="#" className="btn btn-orange" onClick={() => setMenuOpen(false)}>Book a Demo</Link>
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
