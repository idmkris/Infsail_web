"use client";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import showcase from "/public/showcase.png";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";

const HomePage = () => {
  const stars = Array(5).fill(0);
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="top-0 w-full h-screen flex mt-48 justify-center">
        <div className="absolute w-full h-5/6 inset-0 z-0 bg-no-repeat bg-cover animate-zoom  bg-[url('/bg.jpg')]">
          {/* Background Image with Zoom Animation */}
        </div>
        <ExpandCircleDownRoundedIcon
          className="absolute text-6xl bottom-48 right-4 cursor-pointer"
          style={{ color: 'black' }}
          onClick={handleScrollDown}
        />
        <div className="relative z-10 text-center text-white">
          <span className="text-7xl font-semibold text-black mb-5">
            Unlock your trading potential
            <br /> with Infsail
          </span>
          <div className="text-4xl pt-16 font-semibold text-black">
            Path to Financial Independence
          </div>
          <div className="pt-20 pb-48">
            <button className="bg-black text-white px-9 py-3 rounded-md text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <hr className="border-0 h-0.5 bg-gray-300 w-1/2 mx-auto my-6 mt-16" />
      <div className="flex flex-col pt-2 items-center min-h-screen">
        <div className="mt-32 flex flex-col-reverse lg:flex-row items-center relative pb-20">
          <div className="lg:w-1/2 lg:px-40 relative z-10">
            <h3 className="font-bold tracking-tight leading-tight text-gray-darker text-xl">
              Community Support & Real-Time Analysis
            </h3>
            <p className="text-lg leading-loose text-gray-dark mt-6">
              Join our Discord community where we share daily stock picks and
              expert market analysis to help you make informed trading
              decisions. Stay ahead with real-time recommendations and connect
              with fellow traders committed to financial success. Join us today
              and elevate your trading game!
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <Image src={showcase} alt="showcase" width={700} height={600} />
          </div>
        </div>

        <div className="bg-gray-100 shadow-lg rounded-xl p-14 w-100 h-auto m-24">
          <div className="flex items-center mb-4">
            <div>
              <div className="flex items-center justify-center mt-4">
                {stars.map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className="text-blue-200 w-8 h-8 mx-3"
                  />
                ))}
              </div>
              <h3 className="text-lg pt-14 pl-60 pr-60 text-center pb-12 items-center">
                “I've been with Infsail for just a few weeks now, and I am
                thoroughly impressed with the knowledge and support they
                provide. The team at Infsail goes above and beyond to ensure we
                have all the resources we need to succeed. From the dedicated
                staff who host webinars and Zoom sessions, to the incredible
                community that interacts and shares insights daily, it's truly
                an amazing experience. Shoutout to the Infsail team and keep up the great work!”
              </h3>
              <p className="text-gray-900 text-center text-xl font-bold">
                @invescozxw, Member
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
