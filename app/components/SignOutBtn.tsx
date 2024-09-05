"use client";

import { handleSignOut } from "@/lib/auth/signOutServerAction";

export const SignOutBtn = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={props.className}
      style={{ cursor: "pointer" }}
      onClick={() => handleSignOut()}
    >
      {props.children || "Sign Out"}
    </button>
  );
};