"use client";

import React from "react";
import { File, FileUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export default function TaskCard({
  data,
  file,
  onFileChange,
  hiddenOnly,
}: {
  data: {
    title: string;
    type: string;
    desc: string;
    date: string;
    time: string;
    submitted: string;
    submitBtn: string;
    uploadBtn: boolean;
    ended: string;
    dummyFileName: string;
  };
  file: File | null;
  onFileChange: (file: File | null) => void;
  hiddenOnly?: boolean;
}) {
  return (
    <div className="flex max-lg:items-end justify-between max-lg:flex-col  gap-5 bg-custom-accentDark shadow-[0px_0px_15px_0px_#00000033] rounded-md p-5">
      <div className="flex items-start gap-7 w-full max-sm:flex-col">
        <Checkbox
          checked={hiddenOnly}
          className="data-[state=checked]:bg-custom-accent border border-custom-accent w-6 h-6 rounded-lg [&>.text-current]:text-slate-800 "
          id={"data-" + data.title}
        />
        <div className="flex items-start flex-col ">
          <label
            htmlFor={"data-" + data.title}
            className="cursor-pointer  font-medium text-2xl text-white whitespace-nowrap"
          >
            {data.title}
          </label>
          <span className="text-sm whitespace-nowrap text-[#C2C2C2]">
            Type: {data.type}
          </span>
          <p className="max-w-[900px] break-all text-white text-[15px]">
            {data.desc}
          </p>
          <div>
            {file && !hiddenOnly && (
              <span className="text-white mt-2 flex items-center gap-2 text-sm">
                <File className="h-3 w-3" />
                {file.name}
              </span>
            )}
            {hiddenOnly && (
              <span className="text-white mt-2 flex items-center gap-2 text-sm">
                <File className="h-3 w-3" />
                {data.dummyFileName}
              </span>
            )}
          </div>
          {!hiddenOnly && (
            <>
              <label
                htmlFor={`file-${data.title}`}
                className="cursor-pointer flex my-2 gap-2 text-custom-accent px-2 py-1 rounded-md items-center border-dotted border-2 border-custom-accent"
              >
                <FileUp className="h-3 w-3" />
                <div className="w-[1px] h-4 bg-slate-400/50" />
                <span className="text-[10px]">{data.uploadBtn}</span>
              </label>
              <input
                onChange={(e) => onFileChange(e.target.files![0] || null)}
                id={`file-${data.title}`}
                type="file"
                className="hidden"
              />
              <button className="bg-custom-accent text-sm px-2 py-1 rounded-md">
                {data.submitBtn}
              </button>
            </>
          )}
        </div>
      </div>
      <div className="flex text-white flex-col">
        <span className="whitespace-nowrap text-sm ml-auto w-fit">
          {data.date}
        </span>
        <div
          className={cn(
            "flex gap-5 text-sm text-white h-full mt-[25%] lg:mt-[45%]",
            { "lg:mt-[20%]": hiddenOnly }
          )}
        >
          <div className="">
            <div>{hiddenOnly ? `${data.ended}: ` : `${data.submitted}: `}</div>
            <div>{data.time}</div>
            <div>{data.date}</div>
          </div>
          <div className="">
            <div>{hiddenOnly ? `${data.ended}: ` : `${data.submitted}: `}</div>
            <div>{data.time}</div>
            <div>{data.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
