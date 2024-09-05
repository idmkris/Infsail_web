"use client";

import { useRouter } from "next/navigation";

export const SignInBtn = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();

  return (
    <button
      className=" bg-black px-9 py-2 text-white text-lg rounded-md"
      style={{ cursor: "pointer" }}
      onClick={() => {
        router.push("/auth/sign-in");
      }}
    >
      {props.children || "Sign In"}
    </button>
  );
};