import LibraryCard from "@/components/LibraryCard";
import { getLocale, getTranslations } from "next-intl/server";

export default async function LibraryPage() {
  const t = await getTranslations("Layout.Pages.Library.Content.Sections");
  const locale = await getLocale();
  return (
    <div className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 p-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <LibraryCard
          key={index}
          locale={locale}
          bookName={t("libraryCard.title")}
          teacherName={t("libraryCard.teacherName")}
        />
      ))}
    </div>
  );
}
