"use client";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderTitle from "./HeaderTitle";
import UserMenu from "./UserMenu";

export default function Header() {

  return (
    <div className="flex justify-between items-center gap-3 py-2 border-b border-[#D2F47380]">
    <HeaderTitle/>
    <UserMenu/>
    </div>
  );
}
