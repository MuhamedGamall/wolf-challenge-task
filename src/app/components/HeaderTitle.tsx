"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function HeaderTitle() {
  const pathname = usePathname();
  const title = () => {
    if (pathname === "/") {
      return "Dashboard";
    } else if (pathname === "/courses") {
      return "Course";
    } else if (pathname === "/courses/courseId") {
      return "Course Name";
    } else if (pathname === "/library") {
      return "Library";
    } else if (pathname === "/teachers") {
      return "Teachers";
    } else if (pathname === "/universities") {
      return "Universities";
    }
  };
  return (
    <div className="text-white ">
      <h1 className="font-normal text-lg md:text-3xl">{title()}</h1>
      <span>Group 1</span>
    </div>
  );
}
