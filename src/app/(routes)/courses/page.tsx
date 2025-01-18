import CourseCard from "@/app/components/CourseCard";
import { Plus } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 p-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <CourseCard key={index} />
      ))}
      <div className=" lg:ml-16 w-fit flex items-center shadow-[0px_0px_15px_0px_#00000033] gap-10 justify-between text-white bg-[#484848] rounded-3xl px-7 py-4">
        <div className="flex flex-col  gap-2">
          <div className="w-[35px] cursor-pointer h-[35px] mx-auto bg-[#D2F473] rounded-full flex items-center justify-center text-[#484848]">
            <Plus className="w-7 h-7" />
          </div>
          <span className="font-medium text-lg">
            Add Course
          </span>
        </div>
      </div>
    </div>
  );
}
