'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Building, LogIn, User, LogOut, LayoutDashboard } from "lucide-react";
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
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  // Check if current path is active
  const isActive = (path) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
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
    { name: "Proyek", href: "/projects" },
    { name: "Hubungi Kami", href: "/contact" },
  ];

  return (
    <header 
      className={`text-white fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-primary/80 backdrop-blur-md shadow-md py-2" 
          : pathname === "/" 
            ? "bg-transparent py-4" 
            : "bg-primary py-4"
      }`}
    >
      <div className="container flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2"
        >
          <Image 
            src="/logo.png"
            width={40}
            height={40}
            alt="PT Pancatiara Sentrausaha Logo"
            className="h-10 w-auto"
          />
          <span 
            className={`text-xl font-semibold `}
          >
            Pancatiara Sentrausaha
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="relative hidden lg:flex items-center space-x-6">
          {navigation.map((item) => (
            
            <Link
              key={item.name}
              href={item.href}
              className={`text-white hover:text-tertiary
                ${isActive(item.href) 
                  ? "font-semibold" 
                  : "font-medium"
                }
                ${isScrolled
                  ? "text-white "
                  :
                    "text-white"
                  
                }
                transition-colors
              `}
            >
              {item.name}
            </Link>
          ))}
          
          {isLoading ? (
            <div className="h-10 w-24 bg-gray-200 animate-pulse rounded"></div>
          ) : session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={isScrolled || pathname !== "/" ? "default" : "outline"} 
                  className={`${
                    !isScrolled && pathname === "/" 
                      ? "border-white text-white hover:bg-white/20" 
                      : ""
                  }`}
                >
                  <User className="h-4 w-4 mr-2" />
                  {session.user.name.split(' ')[0]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                <DropdownMenuLabel className="text-xs text-gray-500">{session.user.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link 
                    href={session.user.role === "ADMIN" ? "/admin" : "/employee"} 
                    className="cursor-pointer"
                  >
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Keluar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant={isScrolled || pathname !== "/" ? "default" : "outline"} 
              className={`${
                !isScrolled && pathname === "/" 
                  ? "border-white text-white hover:text-tertiary/80" 
                  : ""
              }`}
            >
              <Link href="/login">
                <LogIn className="h-4 w-4 mr-2" />
                Masuk
              </Link>
            </Button>
          )}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 "text-white" `} />
          ) : (
            <Menu className={`h-6 w-6 "text-white" `} />
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
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container py-4 px-4">
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
                      className="font-medium text-gray-900 flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Dashboard
                    </Link>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="text-left font-medium text-red-600 flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Keluar
                    </button>
                  </>
                ) : (
                  <Button asChild className="w-full justify-center">
                    <Link 
                      href="/login" 
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center"
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      Masuk
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