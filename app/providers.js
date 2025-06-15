'use client';

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";


export function Providers({ children }) {
  return (
    <SessionProvider classname="min-h-screen bg-black px-2">
     {children}
     <Toaster />
    </SessionProvider>
  );
}