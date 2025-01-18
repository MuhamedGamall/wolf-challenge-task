"use client";
import React, { useState } from "react";
import CourseBar from "./CourseBar";
import { cn } from "@/lib/utils";
import Announcements from "./Announcements";
import Tasks from "./Tasks";

export type Tab = "announcements" | "tasks";

export default function TabbedContent() {
  const [activeTab, setActiveTab] = useState<Tab>("announcements");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tab: Tab) => {
    if (tab !== activeTab && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsTransitioning(false);
      }, 200);
    }
  };
  return (
    <div className="w-full">
      <CourseBar activeTab={activeTab} handleTabChange={handleTabChange} />
      <div
        className={cn(
          "transition-all duration-200 ease-in",
          isTransitioning ? "translate-y-0 opacity-0" : "translate-y-1 opacity-1"
        )}
      >
        {activeTab === "announcements" && <Announcements />}
        {activeTab === "tasks" && <Tasks />}
      </div>
    </div>
  );
}
