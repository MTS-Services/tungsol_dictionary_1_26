import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Menu, XIcon } from 'lucide-react';
import { useState } from 'react';

export function FrontendHeader() {
    const { auth, activeSlug } = usePage<SharedData>().props;

    const { url } = usePage();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = [
        { name: 'Home', href: route('home'), slug: '/' },
        { name: 'Dictionary', href: route('dictionary'), slug: '/dictionary' },
        { name: 'Games', href: route('game'), slug: '/games' },
        { name: 'About', href: route('about'), slug: '/about' },
        { name: 'Contact', href: route('contact'), slug: '/contact' },

    ];

    console.log(url);

    return (
        <header className="sticky top-0 z-50 bg-btn-primary shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between py-10">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="">
                            <AppLogo  className='w-30 h-20'/>
                        </Link>
                    </div>
                    {navLinks && (
                        <div className="hidden items-center gap-8 md:flex">
                            <ul className="flex justify-between gap-7">
                                {navLinks &&
                                    navLinks.map((link) => (
                                      
                                        <li>
                                        
                                            <Link
                                                href={link.href}
                                                className={`block rounded-lg px-2 py-3 font-medium transition-colors hover:text-blue-200 hover:underline ${url == link.slug ? 'text-blue-200' :  'text-gray-100'}`}
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    )}
                    <div className="flex items-center gap-3">
               

                        {/* Mobile Menu Trigger */}
                        <Sheet
                            open={isMobileMenuOpen}
                            onOpenChange={setIsMobileMenuOpen}
                        >
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="flex w-full flex-col p-0 sm:max-w-sm "
                            >
                                <SheetHeader className="flex-row items-center bg-btn-primary justify-between space-y-0 border-b p-6">
                                    <AppLogo className="w-1/3 overflow-hidden" />
                                    <div className="flex items-center justify-start gap-4">
                                        <SheetClose asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="rounded-full"
                                            >
                                                <XIcon className="h-5 w-5" />
                                            </Button>
                                        </SheetClose>
                                    </div>
                                </SheetHeader>

                                <div className="flex flex-1 flex-col justify-between p-6">
                                    <div className="space-y-3">
                                        <>
                                            <ul className="mt-3 flex flex-col justify-between gap-2">
                                                {navLinks &&
                                                    navLinks.map((link) => (
                                                        <li>
                                                            <Link
                                                                href={link.href}
                                                                className={`inline-block w-full rounded-full px-2 py-2 text-primary hover:text-btn-primary hover:underline ${url == link.slug ? 'text-btn-primary' : 'text-gray-100'}`}
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
