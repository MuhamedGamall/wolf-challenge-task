import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LibraryCard() {
  return (
    <Link
      href={"/library"}
      className="shadow-[0px_0px_15px_0px_#00000033] rounded-full"
    >
      <Image
        src={"/library.webp"}
        alt="library"
        width={200}
        height={200}
        className="object-cover w-full rounded-t-3xl"
      />
      <div className="flex items-center gap-3 justify-between bg-[#484848] rounded-b-3xl px-7 py-6 w-full">
        <div className="flex flex-col px-2">
          <span className="font-medium max-xs:text-lg text-2xl ">
            Book Name
          </span>
          <span className=" text-sm ">Teacher's Name</span>
        </div>
        <div className="min-w-[30px] min-h-[30px] bg-[#D2F473] rounded-full flex items-center justify-center text-[#484848]">
          <ChevronRight className="w-6 h-6" />
        </div>
      </div>
    </Link>
  );
}
