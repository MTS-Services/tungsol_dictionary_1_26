import AppLogo from '@/components/app-logo';
import { Search } from '@/components/search/search';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Link, usePage } from '@inertiajs/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export function FrontendHeader() {
    const { url } = usePage();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = [
        { name: 'Home', href: route('home'), slug: '/' },
        { name: 'Dictionary', href: route('dictionary'), slug: '/dictionary' },
        { name: 'Games', href: route('game'), slug: '/games' },
        { name: 'About', href: route('about'), slug: '/about' },
        { name: 'Contact', href: route('contact'), slug: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-primary shadow-md shadow-primary/20">
            {/* Top Bar: Logo | Search | Menu */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-24 items-center gap-3 py-2 md:h-26">
                    {/* Logo */}
                    <Link href="/" className="shrink-0">
                        <AppLogo className="h-18 w-auto md:h-20" />
                    </Link>

                    {/* Search Bar - always visible, fills available space */}
                    <div className="relative min-w-0 flex-1">
                        <Search variant="header" />
                    </div>

                    {/* Desktop Nav Links (inline, right side) */}
                    <nav className="hidden shrink-0 items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.slug}
                                href={link.href}
                                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-blue-200 ${url === link.slug
                                    ? 'bg-white/10 text-blue-200'
                                    : 'text-gray-100'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Trigger */}
                    <Sheet
                        open={isMobileMenuOpen}
                        onOpenChange={setIsMobileMenuOpen}
                    >
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="shrink-0 text-white hover:bg-white/20 hover:text-white md:hidden h-12 w-12"
                                aria-label="Open menu"
                            >
                                <FaBars className="h-8 w-8" style={{height:"40px", width:"40px"}} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="flex w-full flex-col p-0 sm:max-w-sm"
                        >
                            <SheetHeader className="flex-row items-center justify-between space-y-0 border-b border-white/10 bg-primary p-6">
                                <AppLogo className="w-1/3 overflow-hidden" />
                                <div className="flex items-center justify-start gap-4">
                                    <SheetClose asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full text-white hover:bg-white/20 hover:text-white h-12 w-12"
                                        >
                                            <FaTimes className="h-8 w-8" style={{height:"40px", width:"40px"}} />
                                        </Button>
                                    </SheetClose>
                                </div>
                            </SheetHeader>

                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div className="space-y-3">
                                    <ul className="mt-3 flex flex-col justify-between gap-2">
                                        {navLinks.map((link) => (
                                            <li key={link.slug}>
                                                <Link
                                                    href={link.href}
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false,
                                                        )
                                                    }
                                                    className={`inline-block w-full rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-blue-50 hover:text-btn-primary ${url === link.slug
                                                        ? 'bg-blue-50 text-btn-primary'
                                                        : 'text-gray-700'
                                                        }`}
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
