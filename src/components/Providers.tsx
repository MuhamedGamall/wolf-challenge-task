"use client";

import { SessionProvider } from "next-auth/react";
import { createContext, useState, ReactNode } from "react";

export const MyContext = createContext<any>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState([]);

  return (
    <SessionProvider>
      <MyContext.Provider value={{ courses, setCourses }}>
        {children}
      </MyContext.Provider>
    </SessionProvider>
  );
}
