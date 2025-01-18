"use client";

import React from "react";
import { File, FileUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export default function AnnouncementCard({
  data,
  hiddenOnly,
}: {
  data: { title: string; type: string; desc: string; date: string };
  hiddenOnly?: boolean;
}) {
  return (
    <div className="flex max-lg:items-end justify-between max-lg:flex-col  gap-5 bg-[#484848] shadow-[0px_0px_15px_0px_#00000033] rounded-md p-5">
      <div className="flex items-start gap-7 w-full max-sm:flex-col">
        <Checkbox
          checked={hiddenOnly}
          className="data-[state=checked]:bg-[#D2F473] border border-[#D2F473] w-6 h-6 rounded-lg [&>.text-current]:text-slate-800 "
          id={"data-" + data.title}
        />
        <div className="flex items-start flex-col ">
          <label
            htmlFor={"data-" + data.title}
            className="cursor-pointer  font-medium text-2xl text-white whitespace-nowrap"
          >
            {data.title}
          </label>
          <p className="max-w-[900px] break-all text-white text-[15px]">
            {data.desc}
          </p>
        </div>
      </div>
      <span className="whitespace-nowrap text-[#808080] text-sm ml-auto w-fit">
        {data.date}
      </span>
    </div>
  );
}
