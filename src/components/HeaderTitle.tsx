"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function HeaderTitle() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Layout.Header");
  const routeTitles: { [key: string]: string } = {
    [`/${locale}`]: t("title.home"),
    [`/${locale}/courses`]: t("title.courses"),
    [`/${locale}/courses/courseId`]: t("title.courseName"),
    [`/${locale}/courses/create`]: t("title.createCourse"),
    [`/${locale}/library`]: t("title.library"),
    [`/${locale}/teachers`]: t("title.teachers"),
    [`/${locale}/universities`]: t("title.universities"),
  };
  const title = routeTitles[pathname];

  return (
    <div className="text-white">
      <h1 className="font-normal text-lg md:text-3xl">{title}</h1>
      {pathname !== `/${locale}/courses/create` && <span>{t("group")}</span>}
    </div>
  );
}
