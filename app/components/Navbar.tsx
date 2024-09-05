"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo1.png";
import { usePathname } from "next/navigation";
import { SignInBtn } from "./SignInBtn";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons for menu toggle

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu visibility

  const pathname = usePathname();
  useEffect(() => {
    setScrolled(false);

    if (pathname !== "/") {
      setScrolled(true);
    }

    // Only apply scroll effect on the homepage
    if (pathname === "/") {
      const handleScroll = () => {
        const offset = window.scrollY;
        const videoHeight =
          document.getElementById("video-section")?.clientHeight || 0;
        setScrolled(offset > videoHeight);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 p-6 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="Logo"
              width={80}
              height={100}
              className="h-19 lg:ml-64 w-auto cursor-pointer mr-16"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/about" passHref legacyBehavior>
              <a className="text-lg font-semibold text-black hover:border-b-2 hover:border-black transition-all duration-100">About Infsail</a>
            </Link>
            <Link href="/performance" passHref legacyBehavior>
              <a className="text-lg font-semibold text-black hover:border-b-2 hover:border-black transition-all duration-100">Performance</a>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <a className="text-lg font-semibold text-black hover:border-b-2 hover:border-black transition-all duration-100">Contact</a>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>

          <div className="hidden md:flex ml-auto mr-64">
            <SignInBtn />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="relative h-full ">
            {/* Close Button */}
            <button
              className="ml-12 text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <AiOutlineClose />
            </button>

            <div className="flex flex-col items-center mt-32 space-y-6">
              <Link href="/about" passHref legacyBehavior>
                <a
                  className="text-lg font-semibold text-black hover:border-b-2 hover:border-black transition-all duration-100"
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  About Infsail
                </a>
              </Link>
              <Link href="/performance" passHref legacyBehavior>
                <a
                  className="text-lg font-semibold text-black hover:border-b-2 hover:border-black transition-all duration-100"
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  Performance
                </a>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <a
                  className="text-lg font-semibold text-black hover:border-b-2 hover:border-black transition-all duration-100"
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  Contact
                </a>
              </Link>
              <SignInBtn /> {/* Add SignInBtn to mobile menu */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


