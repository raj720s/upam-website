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
            className={`navbar ml-auto absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${navbarOpen
              ? "visibility top-full opacity-100"
              : "invisible top-[120%] opacity-0"
              }`}
          >
            <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
              {menuData.map((menuItem, index) =>
                menuItem.path ? (
                  <li key={index} className="group relative">
                    {pathUrl !== "/" ? (
                      <Link
                        onClick={navbarToggleHandler}
                        scroll={false}
                        href={menuItem.path}
                        className={`ud-menu-scroll flex py-2 text-base text-dark  dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6 ${pathUrl == menuItem?.path && "text-primary"
                          }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <Link
                        scroll={false}
                        href={menuItem.path}
                        className={`ud-menu-scroll flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${"text-dark group-hover:text-white dark:text-white dark:group-hover:text-black"

                          } ${pathUrl === menuItem?.path &&

                          "!text-blue-950"
                          }`}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ) : (
                  <li className="submenu-item group relative" key={index}>
                    {pathUrl !== "/" ? (
                      <button
                        onClick={() => handleSubmenu(index)}
                        className={`ud-menu-scroll flex items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                      >
                        {menuItem.title}

                        <span className="pl-1">
                          <svg
                            className={`duration-300 lg:group-hover:rotate-180`}
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSubmenu(index)}
                        className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${"text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"

                          }`}
                      >
                        {menuItem.title}

                        <span className="pl-1">
                          <svg
                            className={`duration-300 lg:group-hover:rotate-180`}
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                    )}

                    <div
                      className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "!-left-[25px]" : "hidden"
                        }`}
                    >
                      {menuItem?.submenu?.map((submenuItem: any, i) => (
                        <Link
                          href={submenuItem.path}
                          key={i}
                          className={`block rounded px-4 py-[10px] text-sm ${pathUrl === submenuItem.path
                            ? "text-primary"
                            : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                            }`}
                        >
                          {submenuItem.title}
                        </Link>
                      ))}
                    </div>
                  </li>
                ),
              )}
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
          <div className="hidden lg:flex items-center space-x-4 ml-4">
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
