import { Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function UserMenu() {
  return (
    <div className="flex items-center gap-7">
      <div className="flex items-center gap-3">
        <Image
          src="/person.webp"
          width={50}
          height={50}
          alt="user"
          className="rounded-full min-w-[50px]"
        />
        <div  className="max-sm:hidden">
          <p className="text-white text-lg font-medium">Student Name</p>
          <p className="text-[#C2C2C2] text-[15px]">View Profile</p>
        </div>
      </div>
        <Settings className="w-6 h-6 text-white max-sm:hidden" />
    </div>
  );
}
