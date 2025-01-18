import Image from "next/image";
import ScheduleSection from "./_components/ScheduleSection";
import MyCoursesSection from "./_components/MyCoursesSection";
import LibrarySection from "./_components/LibrarySection";
import FeaturedSection from "./_components/FeaturedSection";

export default function Home() {
  return (
    <>
      <ScheduleSection />
      <MyCoursesSection />
      <LibrarySection />
      <FeaturedSection />
    </>
  );
}
