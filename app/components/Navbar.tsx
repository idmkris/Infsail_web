// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo1.png";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

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
        className={`fixed p-6 top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-12">
          <div className="flex pl-28 items-center space-x-8">
            <Link href="/" passHref>
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={20}
                className="h-19 w-auto cursor-pointer"
              />
            </Link>
            <div className="pl-10 items-center space-x-12">
              {" "}
              <Link href="/about" passHref legacyBehavior>
                <a className="text-lg font-semibold text-black">About Us</a>
              </Link>
              <Link href="/" passHref legacyBehavior>
                <a className="text-lg font-semibold text-black">Market</a>
              </Link>
              <Link href="/" passHref legacyBehavior>
                <a className="text-lg font-semibold text-black">Contact</a>
              </Link>
            </div>
          </div>

          <div className="ml-auto pr-32">
            <button className="font-semibold bg-black px-10 py-3 text-white rounded-full text-lg">
              Join Now
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
