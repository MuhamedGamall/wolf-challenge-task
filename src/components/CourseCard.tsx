import { Link } from "@/i18n/routing";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CourseCard({
  courseName,
  teacherName,
  locale,
}: {
  courseName: string;
  teacherName: string;
  locale: string;
}) {
  const Chevron = locale == "ar" ? ChevronLeft : ChevronRight;

  return (
    <Link
      href={{
        pathname: "/courses/courseId",
        query: { tab: "one" },
      }}
      className="flex items-center  gap-[10%] justify-between text-white bg-custom-accentDark rounded-2xl px-6 py-4"
    >
      <div className="flex flex-col ">
        <span className="font-medium max-xs:text-lg text-xl break-all ">
          {courseName}
        </span>
        <span className="max-xs:text-sm text-lg break-all">{teacherName}</span>
      </div>
      <div className="min-w-[30px] min-h-[30px] bg-custom-accent rounded-full flex items-center justify-center text-custom-accentDark">
        <Chevron strokeWidth={3} className="w-6 h-6" />
      </div>
    </Link>
  );
}
