import React from "react";
import Image from "next/image";
import linkedin from "/public/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-black text-wh-50 pt-24 pb-40 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="text-white text-lg font-bold">Infsail LLC.</h4>
          <div className="pt-7">
            <a href="https://example.com">
              <Image
                src={linkedin}
                alt="Logo"
                width={200}
                height={20}
                className="h-26 w-6"
              />
            </a>
          </div>

          <p className="text-white py-14">©2024 Infsail LLC, All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className=" text-white mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold text-lg">Links</h4>
          <p className="my-5">Membership</p>
          <p className="my-5">Market</p>
          <p className="my-5">Contact</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="text-white mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold text-lg">Policy</h4>
          <p className="my-5">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
