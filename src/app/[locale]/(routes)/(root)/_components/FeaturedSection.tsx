import { CardsSlider } from "@/components/Slider";
import TeachersCard from "@/components/TeachersCard";
import { Link } from "@/i18n/routing";

export default function FeaturedSection({
  t,
  locale,
}: {
  t: any;
  locale: string;
}) {
  return (
    <section>
      <div className="flex flex-col gap-2 w-full  mt-10 text-white ">
        <div className="flex w-full justify-between items-center">
          <h2 className="max-sm:text-lg text-2xl font-medium  mb-3 w-full">
            {t("featuredTeachers.title")}:
          </h2>
          <Link href={"/teachers"} className="text-sm   whitespace-nowrap">
            {t("featuredTeachers.viewAll")}
          </Link>
        </div>

        <CardsSlider>
          <TeachersCard
            locale={locale}
            teacherName={t("featuredTeachers.card.teacherName")}
            booksLength={t("featuredTeachers.card.booksLength")}
            coursesLength={t("featuredTeachers.card.coursesLength")}
          />
        </CardsSlider>
      </div>
    </section>
  );
}
