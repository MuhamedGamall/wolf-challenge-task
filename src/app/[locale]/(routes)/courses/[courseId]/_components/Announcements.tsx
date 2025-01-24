"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import AnnouncementCard from "./AnnouncementCard";

export default function Announcements({
  locale,
  t,
}: {
  locale?: string;
  t: any;
}) {
  const cardData = Array.from({ length: 4 })
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

  const unfinished = cardData.filter((task) => !task.isFinished);
  const finished = cardData.filter((task) => task.isFinished);

  return (
    <div className="flex flex-col gap-3 w-full">
      {unfinished.map((item: any, i) => (
        <AnnouncementCard key={i} data={item} />
      ))}
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="text-[12px] flex gap-2 text-[#808080] ">
            {locale === "en" && t('hiddenBtn')}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            {locale === "ar" && t('hiddenBtn')}

            <div className="h-[1px] w-full bg-[#808080]" />
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 w-full">
            {finished.map((item: any, i) => (
              <AnnouncementCard key={i} data={item} hiddenOnly />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
