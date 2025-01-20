import CourseCard from "@/components/CourseCard";
import { CardsSlider } from "@/components/Slider";
import { Link } from "@/i18n/routing";
import React from "react";

export default function MyCoursesSection({
  t,
  locale,
}: {
  t: any;
  locale: string;
}) {
  return (
    <section>
      <div className="flex flex-col gap-2 w-full  mt-10 text-white ">
        <div className="flex w-full justify-between items-center">
          <h2 className="max-sm:text-lg text-2xl font-medium  mb-3 w-full">
            {t("myCourses.title")}:
          </h2>
          <Link href={"/courses"}  className="text-sm cursor-pointer whitespace-nowrap">
            {t("myCourses.viewAll")}
          </Link>
        </div>

        <CardsSlider>
          <CourseCard
            courseName={t("myCourses.card.title")}
            teacherName={t("myCourses.card.teacherName")}
            locale={locale}
          />
        </CardsSlider>
      </div>
    </section>
  );
}
