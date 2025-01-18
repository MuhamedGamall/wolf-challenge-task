"use client";
import React, { use, useCallback, useEffect, useState } from "react";
import CourseBar from "./CourseBar";
import { cn } from "@/lib/utils";
import Announcements from "./Announcements";
import Tasks from "./Tasks";
import { useLocale, useTranslations } from "next-intl";

export type Tab = "announcements" | "tasks";

export default function TabbedContent() {
  const [activeTab, setActiveTab] = useState<Tab>("announcements");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Layout.Pages.MyCourses.Course.Content.Sections");

  const cardDataAnnouncements = Array.from({ length: 4 })
    .map(() => [
      {
        title: t("announcementsSection.data.title"),
        desc: t("announcementsSection.data.desc"),
        date: t("announcementsSection.data.date"),
        isFinished: false,
      },
      {
        title: t("announcementsSection.data.title"),
        desc: t("announcementsSection.data.desc"),
        date: t("announcementsSection.data.date"),
        isFinished: true,
      },
    ])
    .flat();

  const cardTasks = {
    title: t("tasksSection.data.title"),
    desc: t("tasksSection.data.desc"),
    type: t("tasksSection.data.type"),
    date: t("tasksSection.data.date"),
    time: t("tasksSection.data.time"),
    dummyFileName: t("tasksSection.data.dummyFileName"),
    submitted: t("tasksSection.submitted"),
    ended: t("tasksSection.ended"),
    submitBtn: t("tasksSection.submitBtn"),
    uploadBtn: t("tasksSection.uploadBtn"),
  };

  const cardDataTasks = Array.from({ length: 2 })
    .map(() => [
      {
        ...cardTasks,
        isFinished: false,
      },
      {
        ...cardTasks,
        isFinished: true,
      },
    ])
    .flat();

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
      <CourseBar
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        locele={locale}
        TaskLabel={t("tasksSection.label")}
        announcementsLabel={t("announcementsSection.label")}
      />
      <div
        className={cn(
          "transition-all duration-200 ease-in",
          isTransitioning
            ? "translate-y-0 opacity-0"
            : "translate-y-1 opacity-1"
        )}
      >
        {activeTab === "announcements" && (
          <Announcements
            cardData={cardDataAnnouncements}
            hiddenBtn={t("hiddenBtn")}
            locale={locale}
          />
        )}
        {activeTab === "tasks" && (
          <Tasks
            hiddenBtn={t("hiddenBtn")}
            cardData={cardDataTasks}
            locale={locale}
          />
        )}
      </div>
    </div>
  );
}
