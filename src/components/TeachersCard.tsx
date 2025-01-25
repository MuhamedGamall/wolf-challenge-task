import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function TeachersCard({
  booksLength,
  coursesLength,
  teacherName,
  locale,
}: {
  booksLength: string;
  coursesLength: string;
  teacherName: string;
  locale: string;
}) {
  const Chevron = locale == "ar" ? ChevronLeft : ChevronRight;
  return (
    <Link href={"/teachers"} className="relative h-[186px] flex items-end ">
      <Image
        src="/person.webp"
        alt="teacher"
        width={80}
        height={80}
        className={cn(
          "rounded-full absolute top-[8px] left-7 border border-custom-accent",
          { "right-7": locale == "ar" }
        )}
      />
      <div className="flex items-center gap-3 justify-between shadow-[0px_0px_15px_0px_#00000033] bg-custom-accentDark rounded-3xl px-7 pt-8 pb-6 w-full">
        <div className="flex flex-col ">
          <span className="font-medium max-sm:text-lg text-2xl whitespace-nowrap ">
            {teacherName}
          </span>
          <span className=" text-sm ">{coursesLength}</span>
          <span className=" text-sm ">{booksLength}</span>
        </div>
        <div
          className={cn(
            "max-xs:hidden flex   min-w-[30px] min-h-[30px] bg-custom-accent rounded-full md:flex items-center justify-center text-custom-accentDark"
          )}
        >
          <Chevron className="w-7 h-7" />
        </div>
      </div>
    </Link>
  );
}
