"use client";
import { CoursesContext } from "@/components/Providers";
import { truncateText } from "@/lib/utils";
import { Course } from "@/types";
import { Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useContext } from "react";
export default function CoursesList() {
  const { courses, setCourses } = useContext(CoursesContext) as {
    courses: Course[];
    setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  };
  const t = useTranslations(
    "Layout.Pages.MyCourses.Course.Create.Content.Sections.coursesList"
  );
  const deleteCourse = (id: number) => {
    setCourses(courses.filter((course) => course.id !== id));
  };
  return (
    <div className="pt-2 pb-5">
      <h2 className="text-gray-400">{t("label")}</h2>
      {courses.length > 0 && (
        <ul className="flex flex-col gap-2 mt-5 w-full text-white">
          {courses.map((course) => (
            <li
              key={course.id}
              className="flex  items-start gap-5 p-2 bg-custom-accentDark shadow-md rounded-md"
            >
              <video
                controls
                poster={course.image}
                width={200}
                height={150}
                className="rounded-md aspect-[16/9]"
              >
                <source src={course.video} type="video/mp4" />
              </video>
              <div className="flex flex-col gap-1  w-full">
                <p
                  className="  break-all   max-w-[340px] capitalize
              text-lg font-semibold "
                >
                  {truncateText(course.title, 25)}
                </p>

                <p className="  block break-all  text-sm max-w-[300px] capitalize">
                  {truncateText(course.description, 50)}
                </p>
                <p className=" text-sm text-gray-400 mt-2 ">{course.date}</p>
                <p className=" text-sm text-custom-accent mt-2 ">
                  {t("course.generatedWith", {
                    type: course.validationBuilder.toUpperCase(),
                  })}
                </p>
              </div>
              <button
                name="delete"
                type="button"
                onClick={() => deleteCourse(course.id)}
              >
                <Trash2 className="w-6 h-6 hover:text-red-600 my-5 transition-colors" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {courses.length === 0 && (
        <div className="text-gray-400 w-full text-center my-48">
          <p>{t("coursesListEmpty")}</p>
        </div>
      )}
    </div>
  );
}
