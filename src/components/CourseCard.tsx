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
      href={"/courses/courseId"}
      className="flex items-center  gap-[10%] justify-between text-white bg-[#484848] rounded-2xl px-6 py-4"
    >
      <div className="flex flex-col ">
        <span className="font-medium max-xs:text-lg text-xl break-all ">
          {courseName}
        </span>
        <span className="max-xs:text-sm text-lg break-all">{teacherName}</span>
      </div>
      <div className="min-w-[30px] min-h-[30px] bg-[#D2F473] rounded-full flex items-center justify-center text-[#484848]">
        <Chevron strokeWidth={3} className="w-6 h-6" />
      </div>
    </Link>
  );
}
