import CourseCard from "@/components/CourseCard";
import { Link } from "@/i18n/routing";
import { Plus } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

export default async function CoursesPage() {
  const t = await getTranslations("Layout.Pages.MyCourses.Content.Sections");
  const locale = await getLocale();
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {Array.from({ length: 10 }).map((_, index) => (
          <CourseCard
            key={index}
            courseName={t("courseCard.title")}
            teacherName={t("courseCard.teacherName")}
            locale={locale}
          />
        ))}
      </div>
      <div className="flex items-center flex-wrap gap-10 mt-10  ">
        <div className="  w-fit flex items-center shadow-[0px_0px_15px_0px_#00000033] gap-10 justify-between text-white bg-custom-accentDark rounded-3xl px-7 py-4">
          <Link
            href={{
              pathname: "/courses/createWithRHF",
              query: { tab: "one" },
            }}
            className="flex flex-col  gap-2"
          >
            <div className="w-[35px] cursor-pointer h-[35px] mx-auto bg-custom-accent rounded-full flex items-center justify-center text-custom-accentDark">
              <Plus className="w-7 h-7" />
            </div>
            <span className="font-medium text-lg">
              {t("courseCard.createCourseWithReactHookForm.title")}
            </span>
          </Link>
        </div>
        <div className="  w-fit flex items-center shadow-[0px_0px_15px_0px_#00000033] gap-10 justify-between text-white bg-custom-accentDark rounded-3xl px-7 py-4">
          <Link
            href={{
              pathname: "/courses/createWithFormik",
              query: { tab: "one" },
            }}
            className="flex flex-col  gap-2"
          >
            <div className="w-[35px] cursor-pointer h-[35px] mx-auto bg-custom-accent rounded-full flex items-center justify-center text-custom-accentDark">
              <Plus className="w-7 h-7" />
            </div>
            <span className="font-medium text-lg">
              {t("courseCard.createCourseWithFormik.title")}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
