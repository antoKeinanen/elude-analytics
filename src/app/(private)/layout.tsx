"use client";
import { SessionProvider } from "next-auth/react";

function PrivateLayout({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default PrivateLayout;
