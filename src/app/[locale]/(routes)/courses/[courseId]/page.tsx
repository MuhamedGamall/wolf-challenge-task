import { getLocale, getTranslations } from "next-intl/server";
import TabbedContent from "../../../../../components/TabbedContent";
import Announcements from "./_components/Announcements";
import Tasks from "./_components/Tasks";

export default async function CoursePage() {
  return (
    <TabbedContent
      TabOneContent={Announcements}
      TabTwoContent={Tasks}
      tMessages={"Layout.Pages.MyCourses.Course.Content.Sections"}
      tabOneLabel={"announcementsSection.label"}
      tabTwoLabel={"tasksSection.label"}
    />
  );
}
