"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

export function CardsSlider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  return (
    <Carousel
      opts={{
        align: "start",
        direction: locale === "ar" ? "rtl" : "ltr",
      }}
      className=" w-full"
    >
      <CarouselContent>
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem
            key={index}
            className={cn(
              "pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 max-w-[344px]",
              {
                "pr-2 md:pr-4": locale === "ar",
              }
            )}
          >
            <div className="p-1  ">{children}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
