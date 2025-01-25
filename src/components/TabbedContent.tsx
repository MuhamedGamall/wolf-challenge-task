"use client";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { JSX, useEffect, useState } from "react";
import TabbedBar from "@/components/TabbedBar";
import { Tab } from "@/types";
import { useParams, useSearchParams } from "next/navigation";

export default function TabbedContent({
  TabOneContent,
  TabTwoContent,
  tMessages,
  tabTwoLabel,
  tabOneLabel,
}: {
  TabOneContent: ({ t, locale }: { t: any; locale: string }) => JSX.Element;
  TabTwoContent: ({ t, locale }: { t: any; locale: string }) => JSX.Element;
  tMessages: string;
  tabTwoLabel: string;
  tabOneLabel: string;
}) {
  const searchParams = useSearchParams();
  const activeTabContentType = searchParams.get("tab") as "one" | "two";
  const [activeTab, setActiveTab] = useState<Tab>(activeTabContentType === "one" ? "tabOne" : "tabTwo");
  
  const [isTransitioning, setIsTransitioning] = useState(false);
  const locale = useLocale();
  const t = useTranslations(tMessages);

  useEffect(() => {
    setActiveTab(activeTabContentType === "one" ? "tabOne" : "tabTwo");
  }, [activeTabContentType]);

  return (
    <div className="w-full">
      <TabbedBar
        activeTab={activeTab}
        setIsTransitioning={setIsTransitioning}
        isTransitioning={isTransitioning}
        setActiveTab={setActiveTab}
        locele={locale}
        tabTwoLabel={t(tabTwoLabel)}
        tabOneLabel={t(tabOneLabel)}
      />
      <div
        className={cn(
          "transition-all duration-200 ease-in",
          isTransitioning
            ? "translate-y-0 opacity-0"
            : "translate-y-1 opacity-1"
        )}
      >
        {activeTab === "tabOne"  ? (
          <TabOneContent t={t} locale={locale} />
        ) : (
          <TabTwoContent t={t} locale={locale} />
        )}
      </div>
    </div>
  );
}
