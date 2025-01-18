"use client";

import { TASKS } from "@/constants";
import TaskCard from "./TaskCard";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export default function Tasks() {
  const unfinishedTasks = TASKS.filter((task) => !task.isFinished);
  const finishedTasks = TASKS.filter((task) => task.isFinished);
  const [fileStates, setFileStates] = useState<Record<string, File | null>>({});

  const handleFileChange = (taskTitle: string, file: File | null) => {
    setFileStates((prevState) => ({
      ...prevState,
      [taskTitle]: file,
    }));
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {unfinishedTasks.map((task, i) => (
        <TaskCard
          key={i}
          data={task}
          file={fileStates[task.title] || null}
          onFileChange={(file) => handleFileChange(task.title, file)}
        />
      ))}
      <Accordion type="single" collapsible  defaultValue="item-1">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="text-[12px] flex gap-2 text-[#808080] ">
            Hidden
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            <div className="h-[1px] w-full bg-[#808080]" />
          </AccordionTrigger>
          <AccordionContent  className="flex flex-col gap-2 w-full">
            {finishedTasks.map((task, i) => (
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
