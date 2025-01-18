import CourseCard from "@/app/components/CourseCard";
import { CardsSlider } from "@/app/components/Slider";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MyCoursesSection() {
  return (
    <section>
      <div className="flex flex-col gap-2 w-full  mt-10 text-white ">
        <div className="flex w-full justify-between items-center">
          <h2 className="max-sm:text-lg text-2xl font-medium  mb-3 w-full">My Courses:</h2>
          <div className="text-sm  whitespace-nowrap">View All</div>
        </div>

        <CardsSlider>
          <CourseCard />
        </CardsSlider>
      </div>
    </section>
  );
}
