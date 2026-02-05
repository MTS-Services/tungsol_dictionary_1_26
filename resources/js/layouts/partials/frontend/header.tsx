import AppLogo from "@/components/app-logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { login, register } from "@/routes";
import { type SharedData } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { ArrowRight, Menu, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function FrontendHeader() {
  const { auth , activeSlug } = usePage<SharedData>().props;


  const { url } = usePage();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: route("home"), slug: "/" },
    { name: "Dictionary", href: route("dictionary"), slug: "/dictionary" },
    { name: "Thesaurus", href: route("thesaurus"), slug: "/thesaurus" },
    { name: "Games", href: route("game"), slug: "/game" },
    { name: "Learn", href: route("learn"), slug: "/learn" },
    { name: "About", href: route("about"), slug: "/about" },
    { name: "Contact", href: route("contact"), slug: "/contact" },
  ];


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="">
              <AppLogo />
            </Link>
          </div>
          {navLinks && (
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex justify-between gap-7">
                {navLinks
                  && navLinks.map((link) => (
                    <li>
                     <Link
                        href={link.href}

                        className={`
                          relative inline-block pb-2
                          font-medium transition-colors duration-300
                          ${link.slug == url ? 'text-btn-primary' : 'text-gray-700 hover:text-btn-primary'}

                          after:content-['']
                          after:absolute after:left-0 after:bottom-0
                          after:h-[2px]
                          after:bg-btn-primary
                          after:transition-all after:duration-300 after:ease-in-out 
                          ${link.slug == url ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                        `}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-4">
              {!auth.user
                ? (
                  <>
                    <a
                      href={route("login")}
                      className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                    >
                      Login
                    </a>
                    <a
                      href={route("register")}
                      className=" bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium
                                transition-colors"
                    >
                      Sign Up
                    </a>
                  </>
                )
                : (
                  <>
                    <Link href={route("logout")} method="post">
                      <button className="text-gray-700 hover:text-gray-900 text-sm font-medium cursor-pointer">
                        Logout
                      </button>
                    </Link>

                    <Link
                      href={route("user.dashboard")}
                      as="button"
                      className=" bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium
                                transition-colors cursor-pointer"
                    >
                      Get started
                    </Link>
                  </>
                )}
            </div>

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
                className="flex w-full flex-col p-0 sm:max-w-sm"
              >
                <SheetHeader className="flex-row items-center justify-between space-y-0 border-b p-6">
                  <AppLogo className="w-1/3 overflow-hidden" />
                  <div className="flex justify-start items-center gap-4">
                    {!auth.user
                      ? (
                        <div className="flex gap-0">
                          <Link
                            href={route("login")}
                            className="hover:text-white hover:bg-blue-700 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            Login
                          </Link>

                          <Link
                            href={route("register")}
                            className="hover:text-white hover:bg-blue-700 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            Sign Up
                          </Link>
                        </div>
                      )
                      : (
                        <Link
                          href={route("register")}
                          className="text-white bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Get started
                        </Link>
                      )}

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
                    {!auth.user
                      ? (
                        <>
                          <ul className="mt-3 flex flex-col justify-between gap-2">
                            {navLinks
                              && navLinks.map((link) => (
                                <li>
                                  <Link
                                    href={link.href}
                                    className={`
                          relative inline-block pb-2
                          font-medium transition-colors duration-300
                          ${link.slug == url ? 'text-btn-primary' : 'text-gray-700 hover:text-btn-primary'}

                          after:content-['']
                          after:absolute after:left-0 after:bottom-0
                          after:h-[2px]
                          after:bg-btn-primary
                          after:transition-all after:duration-300 after:ease-in-out 
                          ${link.slug == url ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                        `}
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </>
                      )
                      : (
                        <div>
                          <Link
                            href={route("admin.dashboard")}
                            className="block w-full"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <Button className="w-full bg-violet-600 py-6">
                              Dashboard
                            </Button>
                          </Link>
                          <ul className="mt-3 flex flex-col justify-between gap-2">
                            {navLinks
                              && navLinks.map((link) => (
                                <li>
                                  <Link
                                    href={link.href}
                                    className="inline-block w-full rounded-full bg-btn-primary px-2 py-2 text-primary hover:bg-btn-primary/90"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}
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
