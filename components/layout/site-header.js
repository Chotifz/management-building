'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  // Check if current path is active
  const isActive = (path) => {
    return pathname === path;
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle user logout
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Layanan", href: "/services" },
    { name: "Portofolio", href: "/projects" },
    // { name: "Kontak", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : pathname === "/" 
            ? "bg-white py-4" 
            : "bg-white text-gray-800 py-4"
      }`}
    >
      <div className="container flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2"
        >
          <Image 
          width={40}
          height={40}
          src={"/logo.png"}/>
          <span 
            className={`text-xl font-semibold uppercase ${
              isScrolled 
                ? "text-sky-900" 
                : pathname === "/" 
                  ? "text-sky-900" 
                  : "text-sky-900"
            }`}
          >
            Pancatiara Sentrausaha
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                ${isActive(item.href) 
                  ? "font-semibold" 
                  : "font-medium"
                }
                ${isScrolled
                  ? "text-gray-900 hover:text-primary"
                  : pathname === "/"
                    ? "text-gray-900 hover:text-primary/90"
                    : "text-gray-900 hover:text-primary/90"
                }
                transition-colors
              `}
            >
              {item.name}
            </Link>
          ))}
          
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={isScrolled ? "default" : "outline"} 
                  className={`${
                    !isScrolled && pathname === "/" 
                      ? "border-white text-white hover:bg-white/20" 
                      : ""
                  }`}
                >
                  My Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link 
                    href={session.user.role === "ADMIN" ? "/admin" : "/employee"} 
                    className="cursor-pointer"
                  >
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${
              isScrolled 
                ? "text-gray-900" 
                : pathname === "/" 
                  ? "text-white" 
                  : "text-white"
            }`} />
          ) : (
            <Menu className={`h-6 w-6 ${
              isScrolled 
                ? "text-gray-900" 
                : pathname === "/" 
                  ? "text-white" 
                  : "text-white"
            }`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      ${isActive(item.href) ? "font-semibold text-primary" : "font-medium text-gray-900"}
                      transition-colors
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {session ? (
                  <>
                    <Link 
                      href={session.user.role === "ADMIN" ? "/admin" : "/employee"}
                      className="font-medium text-gray-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="text-left font-medium text-gray-900"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <Button asChild>
                    <Link 
                      href="/login" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                  </Button>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}