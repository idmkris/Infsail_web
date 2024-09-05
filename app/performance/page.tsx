
'use client'

import ROISlider from "../components/ROISlider";
import React from 'react'
import { useRouter } from "next/navigation";
const page = () => {
    const router = useRouter();

    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-white">

            <div className="mt-32 mb-40 text-center space-y-8">
                <h1 className="text-7xl mb-10 font-bold">Infsail Performance</h1>
                <p className="text-xl mb-4">Infsail - At Infsail, we have consistently delivered remarkable returns by<br /> embracing calculated risks in our investment strategy.</p>
                <button className="mt-12 px-8 py-4 bg-black font-semibold text-lg text-white" onClick={() => {
                    router.push("/auth/sign-in");
                }}>Invest in Infsail</button>
            </div>

            <div className="flex max-w-7xl w-full mb-4">
                <div className="flex flex-col items-start w-full max-w-6xl">
                    <h2 className="text-4xl font-semibold mb-6">Calculate your return</h2>
                    <p className="mt-2 text-xl mb-12">
                        See the potential value of your initial investment had you invested in Infsail 2 years ago:
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center w-full max-w-7xl mb-20">
                <div className="w-full p-24 bg-white border border-grey-100 rounded-lg">
                    <ROISlider />
                </div>
            </div>

        </div>

    );
}

export default page
