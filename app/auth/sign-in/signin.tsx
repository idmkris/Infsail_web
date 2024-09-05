"use client";

import { FcGoogle } from "react-icons/fc";
import { useTransition, useState } from "react";
import { handleGoogleSignIn } from "@/lib/auth/googleSignInServerAction";
import { handleEmailSignIn } from "@/lib/auth/emailSignInServerAction";
import logo from "/public/logo1.png";
import Image from "next/image";

export const SignInPage: React.FC = () => {
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState({ email: "" as string });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevents the form from submitting and reloading the page, allowing us to handle the submission in TypeScript.
        try {
            startTransition(async () => {
                await handleEmailSignIn(formData.email);
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-lg p-10 bg-white shadow-md rounded-lg flex flex-col items-center"> {/* Increased width and padding */}
        <Image
            src={logo}
            alt="Logo"
            width={80} 
            height={100} 
            className="mb-8 mr-2" 
        />
        <h2 className="text-3xl font-bold text-center mb-8">Sign In</h2> {/* Increased font size and margin-bottom */}
        <div className="space-y-6"> {/* Increased spacing */}
            <form className="space-y-6" onSubmit={handleSubmit}> {/* Increased spacing */}
                <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    maxLength={320}
                    placeholder="Email Address"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({ email: event.target.value })
                    }
                    disabled={isPending}
                    required
                />
                <button
                    className="w-full px-4 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="submit"
                >
                    Sign in with email
                </button>
            </form>

            <div className="flex items-center justify-between">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-4 text-gray-500">or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="pb-12">
                <button
                    className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => handleGoogleSignIn()}
                >
                    <FcGoogle className="w-6 h-6 mr-2" /> {/* Adjusted icon size */}
                    Sign in with Google
                </button>
            </div>
        </div>
    </div>
</div>


    );
};