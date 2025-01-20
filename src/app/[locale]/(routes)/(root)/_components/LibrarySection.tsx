import LibraryCard from "@/components/LibraryCard";
import { CardsSlider } from "@/components/Slider";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import React from "react";

export default function LibrarySection({
  t,
  locale,
}: {
  t: any;
  locale: string;
}) {
  return (
    <section>
      <div className="flex flex-col gap-2 w-full mt-10 text-white ">
        <div className="flex w-full justify-between items-center">
          <h2 className="max-sm:text-lg text-2xl font-medium  mb-3 w-full">
            {t("library.title")}:
          </h2>
          <Link href="/library" className="text-sm cursor-pointer whitespace-nowrap">
            {t("library.viewAll")}
          </Link>
        </div>
        <CardsSlider>
          <LibraryCard
            locale={locale}
            bookName={t("library.card.title")}
            teacherName={t("library.card.teacherName")}
          />
        </CardsSlider>
      </div>
    </section>
  );
}
