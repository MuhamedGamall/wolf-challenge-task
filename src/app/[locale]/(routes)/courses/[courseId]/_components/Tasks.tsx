"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import TaskCard from "./TaskCard";

export default function Tasks({ t, locale }: { t: any; locale?: string }) {
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

  const cardData = Array.from({ length: 2 })
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

  const unfinished = cardData.filter((task) => !task.isFinished);
  const finished = cardData.filter((task) => task.isFinished);
  const [fileStates, setFileStates] = useState<Record<string, File | null>>({});

  const handleFileChange = (taskTitle: string, file: File | null) => {
    setFileStates((prevState) => ({
      ...prevState,
      [taskTitle]: file,
    }));
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {unfinished.map((task, i) => (
        <TaskCard
          key={i}
          data={task}
          file={fileStates[task.title] || null}
          onFileChange={(file) => handleFileChange(task.title, file)}
        />
      ))}
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="text-[12px] flex gap-2 text-[#808080] ">
            {locale === "en" && t("hiddenBtn")}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            {locale === "ar" && t("hiddenBtn")}

            <div className="h-[1px] w-full bg-[#808080]" />
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 w-full">
            {finished.map((task, i) => (
              <TaskCard
                key={i}
                data={task}
                file={fileStates[task.title] || null}
                onFileChange={(file) => handleFileChange(task.title, file)}
                hiddenOnly
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
