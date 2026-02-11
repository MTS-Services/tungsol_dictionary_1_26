import AppLogo from "@/components/app-logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { login, register } from "@/routes";
import { type SharedData } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { ArrowRight, Menu, XIcon } from "lucide-react";
import { useState } from "react";

export function FrontendHeader() {
  const { auth } = usePage<SharedData>().props;
  const { url } = usePage();
  console.log(url);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: route("home"), slug: "/" },
    // { name: "Home 2", href: route("home2"), slug: "/" },
    
    // { name: "Home 1", href: route("home1"), slug: "/" },
    { name: "Dictionary", href: route("dictionary"), slug: "/" },  
    { name: "Games", href: route("game"), slug: "/" },
    // { name: "Games 2", href: route("game2"), slug: "/" }, 
    { name: "About", href: route("about"), slug: "/" },
    { name: "Contact", href: route("contact"), slug: "/" },
    // { name: "adminDashboard", href: route("admin-dashboard"), slug: "/" },
    // { name: "Admin Dashboard", href: route("admin-dashboard2"), slug: "/" },
    // { name: "Reset Password", href: route("reset-password"), slug: "/" },
    // { name: "Reset Password Successful", href: route("reset-password-successful"), slug: "/" },
  ];

  return (
    <header className="bg-btn-primary shadow-sm sticky top-0 z-50">
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
                        className={`block  text-gray-100  hover:text-blue-200 py-3 px-2 rounded-lg transition-colors font-medium hover:underline   `}
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
              {!auth.user ? (
                <>
                {/* <a
                  href={route('login')}
                  className="text-gray-100 hover:text-gray-200 text-sm font-medium"
                >
                  Login
                </a>
                <a
                  href={route('register')}
                  className=" bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium
                                transition-colors"
                >
                  Sign Up
                </a> */}
                </>
              ) : (
                <>
                <Link href={route('logout')} method="post">
                  <button className="text-gray-100 hover:text-gray-900 text-sm font-medium cursor-pointer">
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
                  {/* <AppLogo /> */}
                  <div className="flex justify-start items-center gap-4">
                   {!auth.user ? (
                          <>
                            <Link
                              href={route('login')}
                              className="hover:text-white hover:bg-blue-700 text-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                              Login
                            </Link>

                            <Link
                              href={route('register')}
                              className="hover:text-white hover:bg-blue-700 text-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                              Sign Up
                            </Link>
                          </>
                        ) : (
                            <Link
                              href={route('register')}
                              className="text-white bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                              Get started
                            </Link>
                        )}

                  </div>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <XIcon className="h-5 w-5" />
                    </Button>
                  </SheetClose>
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
                                    className="inline-block w-full rounded-full bg-btn-primary px-2 py-2 text-primary hover:text-white "
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
