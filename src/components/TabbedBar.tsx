"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Tab } from "@/types";
import { useParams } from "next/navigation";

export default function TabbedBar({
  activeTab,
  locele,
  isTransitioning,
  setIsTransitioning,
  setActiveTab,
  tabTwoLabel,
  tabOneLabel,
}: {
  activeTab: string;
  locele: string;
  isTransitioning: boolean;
  setIsTransitioning: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
  tabTwoLabel: string;
  tabOneLabel: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const handleTabChange = (tab: Tab) => {
    if (tab !== activeTab && !isTransitioning) {
      setIsTransitioning(true);
      router.push({
        pathname,
        query: { tab: tab === "tabOne" ? "one" : "two" },
      });
      setTimeout(() => {
        setActiveTab(tab);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <div className="w-full">
      <div className="border-b border-zinc-700 mb-6">
        <div className="flex gap-8 text-sm relative">
          <button
            onClick={() => handleTabChange("tabOne")}
            className={cn(
              "px-4 py-2 transition-colors duration-200 w-full",
              activeTab === "tabOne"
                ? "text-custom-accent"
                : "text-zinc-400 hover:text-zinc-100"
            )}
          >
            {tabOneLabel}
          </button>
          <button
            onClick={() => handleTabChange("tabTwo")}
            className={cn(
              "px-4 py-2 transition-colors text-center duration-200 w-full",
              activeTab === "tabTwo"
                ? "text-custom-accent"
                : "text-zinc-400 hover:text-zinc-100"
            )}
          >
            {tabTwoLabel}
          </button>
          <div
            className={cn(
              "absolute bottom-0 h-0.5 bg-custom-accent transition-all duration-200 ease-in",
              activeTab === "tabOne"
                ? locele == "ar"
                  ? "right-0 w-[50%]"
                  : "left-0 w-[50%]"
                : locele == "ar"
                ? "right-[50%] w-[50%]"
                : "left-[50%] w-[50%]"
            )}
          />
        </div>
      </div>
    </div>
  );
}
