import LibraryCard from "@/components/LibraryCard";
import TeachersCard from "@/components/TeachersCard";
import { getLocale, getTranslations } from "next-intl/server";

export default async function TeachersPage() {
  const t = await getTranslations("Layout.Pages.Teachers.Content.Sections");
  const locale = await getLocale();
  return (
    <div className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 p-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <TeachersCard
          key={index}
          locale={locale}
          teacherName={t("teacherCard.teacherName")}
          booksLength={t("teacherCard.booksLength")}
          coursesLength={t("teacherCard.coursesLength")}
        />
      ))}
    </div>
  );
}
