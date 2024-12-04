"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {
  const pathUrl = usePathname();

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const { theme, setTheme } = useTheme();

  // Scroll to section for anchor links
  const scrollToSection = (e: React.MouseEvent, path: string) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(path);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`ud-header top-0 left-0 z-40 w-full transition-all duration-300 ${sticky
          ? "fixed backdrop-blur-md bg-white/80 dark:bg-dark/80 shadow-lg"
          : "absolute bg-transparent"
        }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="w-60">
            <Link href="/">
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={150}
                height={40}
                className="header-logo"
              />
            </Link>
          </div>

          {/* Navbar */}
          <nav
            id="navbarCollapse"
            className={`absolute right-0 z-30 w-[250px] bg-white dark:bg-dark border rounded-lg px-6 py-4 transition-all duration-300 lg:relative lg:w-auto lg:border-none lg:rounded-none lg:bg-transparent lg:py-0 ${navbarOpen ? "visible opacity-100 top-16" : "invisible opacity-0 top-[120%]"
              }`}
          >
            <ul className="block lg:flex lg:space-x-8">
              {menuData.map((menuItem, index) => (
                <li key={index} className="relative group">
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => handleSubmenu(index)}
                        className={`flex items-center justify-between w-full py-2 text-base text-dark hover:text-primary dark:text-white`}
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className={`h-4 w-4 transition-transform ${openIndex === index ? "rotate-180" : ""
                              }`}
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 10.667L3.333 6l1.154-1.154L8 8.358l3.512-3.512L12.667 6z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                      <ul
                        className={`absolute left-0 mt-2 w-48 bg-white shadow-lg dark:bg-dark rounded-md transition-all duration-300 ${openIndex === index ? "block opacity-100" : "hidden opacity-0"
                          }`}
                      >
                        {menuItem.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.path || "#"}
                              className="block px-4 py-2 text-sm text-dark hover:text-primary dark:text-white"
                              onClick={navbarToggleHandler}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={menuItem.path || "#"}
                      onClick={(e) => scrollToSection(e, menuItem.path || "#")}
                      className={`block py-2 text-base ${pathUrl === menuItem.path
                          ? "text-primary"
                          : "text-dark hover:text-primary dark:text-white"
                        }`}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={navbarToggleHandler}
            className="lg:hidden focus:outline-none"
          >
            <span
              className={`block w-6 h-0.5 bg-dark dark:bg-white transition-transform ${navbarOpen ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-dark dark:bg-white my-1 ${navbarOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-dark dark:bg-white transition-transform ${navbarOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            ></span>
          </button>

          {/* Theme Toggle and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              aria-label="theme toggler"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8 text-dark dark:text-white"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
            <Link
              href="/contact"
              className="px-4 py-2 text-base font-medium text-dark border rounded-lg dark:text-white hover:bg-primary hover:text-white"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
