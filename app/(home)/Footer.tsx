import React from "react";
import Image from "next/image";
import linkedin from "/public/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-40 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="text-white text-lg font-bold">Infsail LLC.</h4>
          <div className="pt-7">
            <a href="https://linkedin.com/in/infsail" target="_blank" rel="noopener noreferrer">
              <Image
                src={linkedin}
                alt="LinkedIn"
                width={200}
                height={20}
                className="h-6 w-auto"
              />
            </a>
          </div>
          <p className="text-white py-14">©2024 Infsail LLC, All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="text-white mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold text-lg">Links</h4>
          <ul className="space-y-8 mt-8">
            <li>
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="/performance" className="hover:underline">Performance</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        {/* THIRD COLUMN */}
        <div className="text-white mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold text-lg">Policy</h4>
          <ul className="space-y-2 mt-8">
            <li>
              <a href="/terms" className="hover:underline">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

