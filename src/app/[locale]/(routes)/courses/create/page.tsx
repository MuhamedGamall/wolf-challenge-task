// 'use client';
import TabbedContent from "@/components/TabbedContent";
import CourseForm from "./_components/Zod/CouresForm";
export default function CreateCourse() {
  return (
    <div>
      <TabbedContent
        TabOneContent={CourseForm}
        TabTwoContent={CourseForm}
        tMessages={"Layout.Pages.MyCourses.Course.Create.Content.Sections.form"}
        tabOneLabel={"tabOneLabel"}
        tabTwoLabel={"tabTwoLabel"}
      />
    </div>
  );
}
