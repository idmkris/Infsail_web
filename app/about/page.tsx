'use client'
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">

      <div className="mt-36 mb-40 text-center space-y-8">
        <h1 className="text-7xl mb-10 font-bold">About Infsail</h1>
        <p className="text-xl mb-4">Infsail offers education and opportunities to invest, empowering you<br /> to grow your wealth.</p>
        <button className="mt-12 px-8 py-4 bg-black font-semibold text-lg text-white" onClick={() => {
          router.push("/auth/sign-in");
        }}>Invest in Infsail</button>
      </div>
    </div>
  );
};

export default About;
