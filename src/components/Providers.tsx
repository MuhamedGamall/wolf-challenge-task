"use client";

import { Course } from "@/types";
import { SessionProvider } from "next-auth/react";
import { createContext, useState, ReactNode } from "react";

export const CoursesContext = createContext<any>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<Course[]>([]);

  return (
    <SessionProvider>
      <CoursesContext.Provider value={{ courses, setCourses }}>
        {children}
      </CoursesContext.Provider>
    </SessionProvider>
  );
}
