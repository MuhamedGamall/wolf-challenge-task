"use client";

import { cn } from "@/lib/utils";
import { Tab } from "./TabbedContent";

export default function CourseBar({
  activeTab,
  handleTabChange,
}: {
  activeTab: string;
  handleTabChange: (tab: Tab) => void;
}) {
  return (
    <div className="w-full">
      <div className="border-b border-zinc-700 mb-6">
        <div className="flex gap-8 text-sm relative">
          <button
            onClick={() => handleTabChange("announcements")}
            className={cn(
              "px-4 py-2 transition-colors duration-200 w-full",
              activeTab === "announcements"
                ? "text-[#D2F473]"
                : "text-zinc-400 hover:text-zinc-100"
            )}
          >
            Announcements
          </button>
          <button
            onClick={() => handleTabChange("tasks")}
            className={cn(
              "px-4 py-2 transition-colors text-center duration-200 w-full",
              activeTab === "tasks"
                ? "text-[#D2F473]"
                : "text-zinc-400 hover:text-zinc-100"
            )}
          >
            Tasks
          </button>
          <div
            className={cn(
              "absolute bottom-0 h-0.5 bg-[#D2F473] transition-all duration-200 ease-in",
              activeTab === "announcements"
                ? "left-0 w-[50%]"
                : "left-[50%] w-[50%]"
            )}
          />
        </div>
      </div>
    </div>
  );
}
