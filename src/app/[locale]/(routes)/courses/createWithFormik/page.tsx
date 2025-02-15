import TabbedContent from "@/components/TabbedContent";
import CourseForm from "./_components/CouresForm";
import CoursesList from "../_components/CoursesList";

export default function CreateCourse() {
  return (
    <div className="flex justify-between gap-10 max-lg:flex-col ">
      <div className="lg:flex-1">
        <TabbedContent
          TabOneContent={CourseForm}
          TabTwoContent={CourseForm}
          tMessages={
            "Layout.Pages.MyCourses.Course.Create.Content.Sections.form"
          }
          tabOneLabel={"tabOneLabel"}
          tabTwoLabel={"tabTwoLabel"}
        />
      </div>
      <div className="lg:flex-1">
        <CoursesList />
      </div>
    </div>
  );
}
