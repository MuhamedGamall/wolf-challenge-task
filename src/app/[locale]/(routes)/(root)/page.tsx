import Image from "next/image";
import ScheduleSection from "./_components/ScheduleSection";
import MyCoursesSection from "./_components/MyCoursesSection";
import LibrarySection from "./_components/LibrarySection";
import FeaturedSection from "./_components/FeaturedSection";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Layout.Pages.Home.Content.Sections");
  const locale = await getLocale();

  return (
    <>
      <ScheduleSection t={t} />
      <MyCoursesSection t={t} locale={locale} />
      <LibrarySection t={t} locale={locale} />
      <FeaturedSection t={t} locale={locale} />
    </>
  );
}
